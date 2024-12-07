import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export default function RotatingDotsLoader({
    size = 'md',
    dotColor = 'tw-bg-red-500',
    className
}) {
    const sizeClasses = {
        sm: 'tw-h-8 tw-w-8',
        md: 'tw-h-12 tw-w-12',
        lg: 'tw-h-16 tw-w-16',
    };

    const dotSizeClasses = {
        sm: 'tw-h-2 tw-w-2',
        md: 'tw-h-4 tw-w-4',
        lg: 'tw-h-6 tw-w-6',
    };

    const rotateVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
            },
        },
    };

    return (
        <div className={cn("tw-flex tw-items-center tw-justify-center", className)}>
            <motion.div
                className={cn("tw-relative", sizeClasses[size])}
                variants={rotateVariants}
                animate="rotate"
            >
                {[0, 0.2, 0.4, 0.6].map((delay, index) => (
                    <motion.div
                        key={index}
                        className={cn(
                            "tw-absolute tw-rounded-full",
                            dotSizeClasses[size],
                            dotColor,
                            {
                                'tw-left-0 tw-top-0': index === 0,
                                'tw-right-0 tw-top-0': index === 1,
                                'tw-left-0 tw-bottom-0': index === 2,
                                'tw-right-0 tw-bottom-0': index === 3,
                            }
                        )}
                        initial="initial"
                        animate="animate"
                        transition={{ delay }}
                    />
                ))}
            </motion.div>
        </div>
    );
}