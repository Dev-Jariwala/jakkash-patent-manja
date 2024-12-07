import React from 'react';
import { cn } from "../../lib/utils"

const Spinner = React.forwardRef((props, ref) => {
    const spinnerBars = [
        { animationDelay: -1.2, rotate: 0.0001 },
        { animationDelay: -1.1, rotate: 30 },
        { animationDelay: -1, rotate: 60 },
        { animationDelay: -0.9, rotate: 90 },
        { animationDelay: -0.8, rotate: 120 },
        { animationDelay: -0.7, rotate: 150 },
        { animationDelay: -0.6, rotate: 180 },
        { animationDelay: -0.5, rotate: 210 },
        { animationDelay: -0.4, rotate: 240 },
        { animationDelay: -0.3, rotate: 270 },
        { animationDelay: -0.2, rotate: 300 },
        { animationDelay: -0.1, rotate: 330 },
    ];

    const { className, colorClassName, ...otherProps } = props;

    return (
        <div ref={ref} className={cn("tw-h-5 tw-w-5", className)} {...otherProps}>
            <div className="tw-relative tw-left-1/2 tw-top-1/2 tw-h-full">
                {spinnerBars.map((bar) => (
                    <div
                        key={bar.rotate}
                        className={cn("tw-absolute tw-left-[-10%] tw-top-[-3.9%] tw-h-[8%] tw-w-[24%] tw-animate-spinner tw-rounded-md tw-bg-black", colorClassName)}
                        style={{
                            animationDelay: `${bar.animationDelay}s`,
                            transform: `rotate(${bar.rotate}deg) translate(146%)`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
});

Spinner.displayName = 'Spinner';

export { Spinner };
