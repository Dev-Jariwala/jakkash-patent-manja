import { cn } from "../../../lib/utils";

const controlStyles = {
    base: 'tw-flex !tw-min-h-9 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-pl-3 tw-py-1 tw-pr-1 tw-gap-1 tw-text-sm tw-shadow-sm tw-transition-colors hover:tw-cursor-pointer hover:tw-border-indigo-400',
    focus: 'tw-outline-none tw-border-ring',
    disabled: 'tw-cursor-not-allowed tw-opacity-50'
};
const placeholderStyles = 'tw-text-sm tw-text-muted-foreground';
const valueContainerStyles = 'tw-gap-1';
const multiValueStyles =
    'tw-inline-flex tw-items-center tw-gap-2 tw-rounded-md tw-border tw-border-transparent tw-bg-gray-200 tw-text-secondary-foreground hover:tw-bg-gray-200/80 tw-px-1.5 tw-py-0.5 tw-text-xs tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2';
const multiValueRemoveStyles = 'hover:tw-bg-red-200 hover:tw-text-red-500';
const indicatorsContainerStyles = 'tw-gap-1';
const clearIndicatorStyles = 'tw-p-1 tw-rounded-md hover:tw-bg-red-50 hover:tw-text-red-500';
const indicatorSeparatorStyles = 'tw-bg-border';
const dropdownIndicatorStyles = 'tw-p-1 tw-rounded-md';
const menuStyles =
    'tw-p-1 tw-mt-1 tw-border tw-bg-popover tw-shadow-md tw-rounded-md tw-text-popover-foreground';
const groupHeadingStyles =
    'tw-py-2 tw-px-1 tw-text-secondary-foreground tw-text-sm tw-font-semibold';
const optionStyles = {
    base: 'hover:tw-cursor-pointer hover:tw-bg-accent hover:tw-text-accent-foreground tw-px-2 tw-py-1.5 tw-rounded-sm !tw-text-sm !tw-cursor-default !tw-select-none !tw-outline-none',
    focus: 'active:tw-bg-accent/90 tw-bg-accent tw-text-accent-foreground',
    disabled: 'tw-pointer-events-none tw-opacity-50',
    selected: 'tw-bg-indigo-100 hover:tw-bg-indigo-100 tw-font-semibold'
};
const noOptionsMessageStyles =
    'tw-text-accent-foreground tw-p-2 tw-bg-accent tw-border tw-border-dashed tw-border-border tw-rounded-sm';
const loadingIndicatorStyles =
    'tw-flex tw-items-center tw-justify-center tw-h-4 tw-w-4 tw-opacity-50';
const loadingMessageStyles = 'tw-text-accent-foreground tw-p-2 tw-bg-accent';

export const createClassNames = (classNames) => {
    return {
        clearIndicator: (state) =>
            cn(clearIndicatorStyles, classNames?.clearIndicator?.(state)),
        container: (state) => cn(classNames?.container?.(state)),
        control: (state) =>
            cn(
                controlStyles.base,
                state.isDisabled && controlStyles.disabled,
                state.isFocused && controlStyles.focus,
                classNames?.control?.(state)
            ),
        dropdownIndicator: (state) =>
            cn(dropdownIndicatorStyles, classNames?.dropdownIndicator?.(state)),
        group: (state) => cn(classNames?.group?.(state)),
        groupHeading: (state) =>
            cn(groupHeadingStyles, classNames?.groupHeading?.(state)),
        indicatorsContainer: (state) =>
            cn(indicatorsContainerStyles, classNames?.indicatorsContainer?.(state)),
        indicatorSeparator: (state) =>
            cn(indicatorSeparatorStyles, classNames?.indicatorSeparator?.(state)),
        input: (state) => cn(classNames?.input?.(state)),
        loadingIndicator: (state) =>
            cn(loadingIndicatorStyles, classNames?.loadingIndicator?.(state)),
        loadingMessage: (state) =>
            cn(loadingMessageStyles, classNames?.loadingMessage?.(state)),
        menu: (state) => cn(menuStyles, classNames?.menu?.(state)),
        menuList: (state) => cn(classNames?.menuList?.(state)),
        menuPortal: (state) => cn(classNames?.menuPortal?.(state)),
        multiValue: (state) =>
            cn(multiValueStyles, classNames?.multiValue?.(state)),
        multiValueLabel: (state) => cn(classNames?.multiValueLabel?.(state)),
        multiValueRemove: (state) =>
            cn(multiValueRemoveStyles, classNames?.multiValueRemove?.(state)),
        noOptionsMessage: (state) =>
            cn(noOptionsMessageStyles, classNames?.noOptionsMessage?.(state)),
        option: (state) =>
            cn(
                optionStyles.base,
                state.isFocused && optionStyles.focus,
                state.isDisabled && optionStyles.disabled,
                state.isSelected && optionStyles.selected,
                classNames?.option?.(state)
            ),
        placeholder: (state) =>
            cn(placeholderStyles, classNames?.placeholder?.(state)),
        singleValue: (state) => cn(classNames?.singleValue?.(state)),
        valueContainer: (state) =>
            cn(valueContainerStyles, classNames?.valueContainer?.(state))
    };
};

export const defaultClassNames = createClassNames({});

export const defaultStyles = {
    input: (base) => ({
        ...base,
        'input:focus': {
            boxShadow: 'none'
        }
    }),
    multiValueLabel: (base) => ({
        ...base,
        whiteSpace: 'normal',
        overflow: 'visible'
    }),
    control: (base) => ({
        ...base,
        transition: 'none'
    }),
    menuList: (base) => ({
        ...base,
        '::-webkit-scrollbar': {
            background: 'transparent'
        },
        '::-webkit-scrollbar-track': {
            background: 'transparent'
        },
        '::-webkit-scrollbar-thumb': {
            background: 'hsl(var(--border))'
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: 'transparent'
        }
    })
};
