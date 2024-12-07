import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export const sizeConfig = {
  xs: {
    radius: 15,
    strokeWidth: 3,
  },
  sm: {
    radius: 19,
    strokeWidth: 4,
  },
  md: {
    radius: 32,
    strokeWidth: 6,
  },
  lg: {
    radius: 52,
    strokeWidth: 8,
  },
  xl: {
    radius: 80,
    strokeWidth: 10,
  },
};

function getLimitedValue(input) {
  if (input === undefined) {
    return 0;
  } else if (input > 100) {
    return 100;
  } else {
    return input;
  }
}

const ProgressCircle = React.forwardRef((props, ref) => {
  const {
    value: inputValue,
    size = "md",
    className,
    showAnimation = true,
    tooltip,
    radius: inputRadius,
    strokeWidth: inputStrokeWidth,
    children,
    ...other
  } = props;

  // sanitize input
  const value = getLimitedValue(inputValue);
  const radius = inputRadius ?? sizeConfig[size].radius;
  const strokeWidth = inputStrokeWidth ?? sizeConfig[size].strokeWidth;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = (value / 100) * circumference;
  const offset = circumference - strokeDashoffset;

  const tooltipRef = useRef(null);

  return (
    <>

      <div
        ref={ref}
        className={cn(
          "tw-flex tw-flex-col tw-items-center tw-justify-center",
          className,
        )}
        {...other}
      >
        <svg
          data-tip
          data-for="progress-circle-tooltip"
          ref={tooltipRef}
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className="tw-transform -tw-rotate-90"
        >
          <circle
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke="#e5e7eb"
            strokeOpacity="0.25"
            strokeLinecap="round"
            className="tw-transition-colors tw-ease-linear"
          />
          {value >= 0 ? (
            <circle
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={offset}
              fill="transparent"
              stroke={value < 75 ? "#ef4444" : "#22c55e"}
              strokeLinecap="round"
              className={cn(
                "tw-transition-colors tw-ease-linear",
                showAnimation ? "tw-transition-all tw=duration-300 tw-ease-in-out" : "",
              )}
            />
          ) : null}
        </svg>
        <div className={cn("tw-absolute tw-flex")}>{children} <span>{value}%</span></div>
      </div>
    </>
  );
});

ProgressCircle.displayName = "ProgressCircle";

export default ProgressCircle;