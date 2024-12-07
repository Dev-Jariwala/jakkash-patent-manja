import React, { useState, forwardRef } from 'react';
import { Input } from "./input"
import { cn } from '../../lib/utils';

const AdvancedNumberInput = forwardRef(({
    value,
    onChange,
    locale = 'en-US',
    options = {},
    min,
    max,
    step = 1,
    disabled = false,
    formatOnBlur = true,
    className,
    ...props
}, ref) => {
    const numberFormat = new Intl.NumberFormat(locale, options);
    const [inputValue, setInputValue] = useState(() => numberFormat.format(Number(value)));

    const handleChange = (e) => {
        const rawValue = e.target.value.replace(/[^0-9.-]/g, "");
        setInputValue(rawValue);
        if (!isNaN(Number(rawValue))) {
            onChange(Number(rawValue));
        }
    };

    const handleBlur = () => {
        if (formatOnBlur) {
            const numericValue = Number(inputValue);
            if (!isNaN(numericValue)) {
                const formattedValue = numberFormat.format(numericValue);
                setInputValue(formattedValue);
            } else {
                setInputValue("");
            }
        }
    };

    const handleFocus = () => {
        // Revert to raw numeric value when focusing
        const numericValue = Number(inputValue.replace(/[^0-9.-]/g, ""));
        if (!isNaN(numericValue)) {
            setInputValue(numericValue.toString());
        }
    };

    return (
        <div className="">
            <Input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                disabled={disabled}
                ref={ref}
                className={cn(className)}
            />
        </div>
    );
});

AdvancedNumberInput.displayName = 'AdvancedNumberInput';

export default AdvancedNumberInput;