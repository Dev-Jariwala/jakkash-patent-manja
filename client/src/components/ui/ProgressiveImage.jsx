import React, { useState, useEffect, useRef, useCallback } from 'react';

const ProgressiveImage = ({
    placeholder,
    alt = '',
    src,
    srcSetData,
    delay = 0,
    onError,
    rootMargin = '0% 0% 25%',
    threshold = 0.1,
    noLazyLoad = false,
    blurUpEffect = false,
    errorImage = placeholder,
    skeletonLoader = false,
    className,
}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [loading, setLoading] = useState(true);
    const imgRef = useRef(null);
    const isOnline = useRef(navigator.onLine);

    const handleOnlineStatus = useCallback(() => {
        isOnline.current = navigator.onLine;
    }, []);

    const handleLoad = useCallback((image) => {
        const applyImage = () => {
            setImageSrc(image.src);
            setLoading(false);
        };

        if (delay) {
            setTimeout(applyImage, delay);
        } else {
            applyImage();
        }
    }, [delay]);

    const handleError = useCallback((error) => {
        setImageSrc(errorImage);
        setLoading(false);
        if (onError) onError(error);
    }, [errorImage, onError]);

    const loadImage = useCallback(() => {
        if (!isOnline.current) return;

        const image = new Image();
        image.onload = () => handleLoad(image);
        image.onerror = handleError;
        image.src = src;

        if (srcSetData) {
            image.srcset = srcSetData.srcSet;
            image.sizes = srcSetData.sizes;
        }
    }, [src, srcSetData, handleError, handleLoad]);

    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(entry.target);
                }
            });
        };

        if (!imgRef.current || noLazyLoad) {
            loadImage();
        } else {
            const observer = new IntersectionObserver(observerCallback, {
                rootMargin,
                threshold: Array.isArray(threshold) ? threshold : [threshold],
            });

            observer.observe(imgRef.current);

            return () => observer.disconnect();
        }
    }, [loadImage, rootMargin, threshold, noLazyLoad]);

    useEffect(() => {
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, [handleOnlineStatus]);

    const imageStyle = {
        width: '100%',
        height: '100%',
        maxHeight: '80dvh',
        transition: 'filter 1s ease',
        // opacity: loading ? 0.5 : 1,
        filter: blurUpEffect && loading ? 'blur(1px)' : 'none',
    };

    return (
        <div ref={imgRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
            {skeletonLoader && loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#eee',
                    }}
                />
            )}

            <img
                src={imageSrc}
                alt={alt}
                style={imageStyle}
                className={className}
            />
        </div>
    );
};

export default React.memo(ProgressiveImage);