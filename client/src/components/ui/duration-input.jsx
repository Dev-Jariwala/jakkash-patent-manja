import React, { useState, useEffect, useCallback } from "react";
import { Input } from "./input";
import { cn } from "../../lib/utils";
import { Label } from "./label";

const InputType = {
    HOURS: "hours",
    MINUTES: "minutes",
};

function getValidNumber(value, min = 0, max = Infinity) {
    let numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
        numericValue = Math.max(min, Math.min(numericValue, max));
        return numericValue.toString().padStart(2, "0");
    }
    return min.toString().padStart(2, "0");
}

function minutesToHHMM(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return {
        hours: hours.toString().padStart(3, "0"),
        minutes: remainingMinutes.toString().padStart(2, "0")
    };
}

function hhmmToMinutes(hours, minutes) {
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

const HoursMinutesInput = React.forwardRef(({ className, type = "tel", value, id, name, onChange, onKeyDown, inputType, onLeftFocus, onRightFocus, maxHours, ...props }, ref) => {
    const handleChange = useCallback(
        (newValue) => {
            let validValue = newValue;
            if (inputType === InputType.MINUTES) {
                validValue = getValidNumber(newValue, 0, 59);
            } else {
                validValue = getValidNumber(newValue, 0, maxHours);
            }
            onChange?.(validValue);
        },
        [inputType, maxHours, onChange],
    );

    const handleKeyDown = (e) => {
        if (e.key === "Tab") return;
        if (e.key === "ArrowRight") onRightFocus?.();
        if (e.key === "ArrowLeft") onLeftFocus?.();
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
            e.preventDefault();
            const step = e.key === "ArrowUp" ? 1 : -1;
            const newValue = (parseInt(value, 10) + step).toString();
            handleChange(newValue);
        }
        if (e.key >= "0" && e.key <= "9") {
            e.preventDefault();
            let newValue = value + e.key;
            if (inputType === InputType.HOURS) {
                if (newValue.length > 3) newValue = newValue.slice(-3);
            } else {
                if (newValue.length > 2) newValue = newValue.slice(-2);
            }
            handleChange(newValue);
        }
    };

    return (
        <Input
            ref={ref}
            id={id || inputType}
            name={name || inputType}
            placeholder={inputType === InputType.HOURS ? "HHH" : "MM"}
            className={cn("tw-text-center tw-font-mono tw-text-base tw-tabular-nums tw-caret-transparent focus:tw-bg-accent focus:tw-text-accent-foreground [&::-webkit-inner-spin-button]:tw-appearance-none", inputType === InputType.HOURS ? "tw-w-[72px]" : "tw-w-[48px]", className)}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            type={type}
            inputMode="decimal"
            onKeyDown={(e) => {
                onKeyDown?.(e);
                handleKeyDown(e);
            }}
            {...props}
        />
    );
});

export function HoursMinutesInputGroup({ onChange, value, maxHours = 999 }) {
    const [hours, setHours] = useState("000");
    const [minutes, setMinutes] = useState("00");

    useEffect(() => {
        if (value !== undefined) {
            const durationInMinutes = parseInt(value, 10);
            if (!isNaN(durationInMinutes)) {
                const { hours: h, minutes: m } = minutesToHHMM(durationInMinutes);
                setHours(h);
                setMinutes(m);
            }
        }
    }, [value]);

    const handleHoursChange = (newHours) => {
        setHours(newHours);
        const totalMinutes = hhmmToMinutes(newHours, minutes);
        onChange?.(totalMinutes.toString());
    };

    const handleMinutesChange = (newMinutes) => {
        setMinutes(newMinutes);
        const totalMinutes = hhmmToMinutes(hours, newMinutes);
        onChange?.(totalMinutes.toString());
    };

    const hourRef = React.createRef(null);
    const minuteRef = React.createRef(null);

    return (
        <div className="tw-flex tw-items-center tw-space-x-2">
            <div className="tw-grid tw-gap-1 tw-text-center">
                <Label htmlFor="hours">Hours</Label>
                <HoursMinutesInput
                    ref={hourRef}
                    inputType={InputType.HOURS}
                    value={hours}
                    onChange={handleHoursChange}
                    maxHours={maxHours}
                    onRightFocus={() => minuteRef.current.focus()}
                />
            </div>
            <div className="tw-grid tw-gap-1 tw-text-center">
                <Label htmlFor="minutes">Minutes</Label>
                <HoursMinutesInput
                    ref={minuteRef}
                    inputType={InputType.MINUTES}
                    value={minutes}
                    onChange={handleMinutesChange}
                    maxHours={maxHours}
                    onLeftFocus={() => hourRef.current.focus()}
                />
            </div>
        </div>
    );
}