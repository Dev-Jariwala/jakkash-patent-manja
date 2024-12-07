import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import { Button } from "./button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./command";
import { Input } from "./input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover";
import { ScrollArea } from "./scroll-area";

import { cn } from "../../lib/utils";

const PhoneInput = React.forwardRef(
    ({ className, onChange, ...props }, ref) => {
        return (
            <RPNInput.default
                ref={ref}
                className={cn("tw-flex", className)}
                flagComponent={FlagComponent}
                countrySelectComponent={CountrySelect}
                inputComponent={InputComponent}
                /**
                 * Handles the onChange event.
                 *
                 * react-phone-number-input might trigger the onChange event as undefined
                 * when a valid phone number is not entered. To prevent this,
                 * the value is coerced to an empty string.
                 *
                 * @param {E164Number | undefined} value - The entered value
                 */
                onChange={(value) => onChange?.(value)}
                {...props}
            />
        );
    },
);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(
    ({ className, ...props }, ref) => (
        <Input
            variant="ringShadow"
            className={cn("tw-rounded-e-md tw-rounded-s-none tw-h-full", className)}
            {...props}
            ref={ref}
        />
    ),
);
InputComponent.displayName = "InputComponent";

const CountrySelect = ({
    disabled,
    value,
    onChange,
    options,
}) => {
    const handleSelect = React.useCallback(
        (country) => {
            onChange(country);
        },
        [onChange],
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant={"outline"}
                    className={cn("tw-flex tw-h-full tw-gap-1 tw-rounded-e-none tw-rounded-s-md tw-px-3 tw-border-r-0")}
                    disabled={disabled}
                >
                    <FlagComponent country={value} countryName={value} />
                    <ChevronsUpDown
                        className={cn(
                            "-tw-mr-2 tw-h-4 tw-w-4 tw-opacity-50",
                            disabled ? "tw-hidden" : "tw-opacity-100",
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="tw-w-[300px] tw-p-0" style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
                <Command>
                    <CommandList>
                        <ScrollArea className="tw-h-72">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {options
                                    .filter((x) => x.value)
                                    .map((option) => (
                                        <CommandItem
                                            className="tw-gap-2"
                                            key={option.value}
                                            onSelect={() => handleSelect(option.value)}
                                        >
                                            <FlagComponent
                                                country={option.value}
                                                countryName={option.label}
                                            />
                                            <span className="tw-flex-1 tw-text-sm">{option.label}</span>
                                            {option.value && (
                                                <span className="tw-text-sm tw-text-foreground/50">
                                                    {`+${RPNInput.getCountryCallingCode(option.value)}`}
                                                </span>
                                            )}
                                            <CheckIcon
                                                className={cn(
                                                    "tw-ml-auto tw-h-4 tw-w-4",
                                                    option.value === value ? "tw-opacity-100" : "tw-opacity-0",
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

const FlagComponent = ({ country, countryName }) => {
    const Flag = flags[country];

    return (
        <span className="tw-flex tw-h-4 tw-w-6 tw-overflow-hidden tw-rounded-sm tw-bg-foreground/20">
            {Flag && <Flag title={countryName} />}
        </span>
    );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };