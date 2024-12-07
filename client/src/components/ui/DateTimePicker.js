import React, { useCallback, useMemo, useState } from 'react';
import { format, parse, isValid } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import TimePicker from "../../Common/TimePicker/TimePicker";
import { cn } from '../../lib/utils';

const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';
const DEFAULT_TIME_FORMAT_24 = 'HH:mm:ss';
const DEFAULT_TIME_FORMAT_12 = 'hh:mm:ss a';
const DEFAULT_RETURN_FORMAT = "EEE MMM dd yyyy HH:mm:ss 'GMT'XXXXX ('India Standard Time')";

const DateTimePicker = ({
    value,
    onChange,
    dateFormat = DEFAULT_DATE_FORMAT,
    timeFormat,
    displayFormat,
    returnFormat = DEFAULT_RETURN_FORMAT,
    use24HourTime = false,
    minuteStep = 1,
    hourStep = 1,
    showSeconds = false,
    disabled = false,
    disabledDates,
    className = '',
    calendarClassName = '',
    timePickerClassName = '',
    placeholder = 'Select date and time',
    clearable = false,
    onClear,
    showCloseButton = false,
    closeButtonText = 'OK',
    calendarInputClass
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const actualTimeFormat = timeFormat || (use24HourTime ? DEFAULT_TIME_FORMAT_24 : DEFAULT_TIME_FORMAT_12);
    const actualDisplayFormat = displayFormat || `${dateFormat} ${actualTimeFormat}`;

    const parseDateTime = useCallback((dateTimeValue) => {
        if (!dateTimeValue) return null;
        if (dateTimeValue instanceof Date) return dateTimeValue;
        try {
            // First, try parsing with the return format
            const parsedWithReturnFormat = parse(dateTimeValue, returnFormat, new Date());
            if (isValid(parsedWithReturnFormat)) return parsedWithReturnFormat;

            // If that fails, try parsing with the display format
            const parsedWithDisplayFormat = parse(dateTimeValue, actualDisplayFormat, new Date());
            if (isValid(parsedWithDisplayFormat)) return parsedWithDisplayFormat;
        } catch (error) {
            console.error('Error parsing date:', error);
        }
        return null;
    }, [returnFormat, actualDisplayFormat]);

    const formattedDisplayValue = useMemo(() => {
        const dateTime = parseDateTime(value);
        return dateTime ? format(dateTime, actualDisplayFormat) : '';
    }, [value, actualDisplayFormat, parseDateTime]);

    const handleDateChange = (newDate) => {
        if (!newDate) return;
        const currentDateTime = parseDateTime(value) || new Date();
        const updatedDateTime = new Date(newDate);
        updatedDateTime.setHours(currentDateTime.getHours());
        updatedDateTime.setMinutes(currentDateTime.getMinutes());
        updatedDateTime.setSeconds(currentDateTime.getSeconds());
        onChange(format(updatedDateTime, returnFormat));
    };

    const handleTimeChange = (newTime) => {
        const currentDateTime = parseDateTime(value) || new Date();
        const hours = newTime.getHours();
        const minutes = newTime.getMinutes();
        const seconds = newTime.getSeconds();
        currentDateTime.setHours(hours);
        currentDateTime.setMinutes(minutes);
        currentDateTime.setSeconds(seconds || 0);
        onChange(format(currentDateTime, returnFormat));
    };

    const handleClear = () => {
        onChange('');
        onClear?.();
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className={calendarInputClass} asChild>
                <Button
                    variant="outline"
                    /* className={cn(`tw-w-full tw-justify-start tw-text-left tw-font-normal ${!value && 'text-muted-foreground'
                        } ${className}`} */
                    className={cn('tw-w-full tw-justify-start tw-text-left tw-font-normal', !value && 'text-muted-foreground', className)}
                    disabled={disabled}
                >
                    <CalendarIcon className="tw-mr-2 tw-size-4" />
                    {formattedDisplayValue || placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="tw-w-auto tw-p-0 tw-z-[9999]" onFocusOutside={(e) => e.preventDefault()} style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
                <div className="tw-flex tw-items-stretch tw-gap-0.5 tw-divide-x">
                    <Calendar
                        mode="single"
                        selected={parseDateTime(value)}
                        onSelect={handleDateChange}
                        initialFocus
                        className={calendarClassName}
                        disabled={disabledDates}
                    />
                    <div className="tw-p-3 tw-flex-grow">
                        <TimePicker
                            value={parseDateTime(value)}
                            onChange={handleTimeChange}
                            use24HourTime={use24HourTime}
                            minuteStep={minuteStep}
                            hourStep={hourStep}
                            showSeconds={showSeconds}
                            className={timePickerClassName}
                        />
                    </div>
                </div>

                <div className="tw-flex tw-justify-end tw-px-4 tw-py-2 tw-gap-2 tw-border-t">
                    {clearable && (
                        <Button variant="outline" onClick={handleClear}>
                            Clear
                        </Button>
                    )}
                    {showCloseButton && (
                        <Button intent="indigo" size="sm" onClick={() => setIsOpen(false)}>
                            {closeButtonText}
                        </Button>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default DateTimePicker;