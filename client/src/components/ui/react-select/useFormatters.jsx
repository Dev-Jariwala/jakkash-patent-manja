export const useFormatters = () => {

    // useful for CreatableSelect
    const formatCreateLabel = (label) => (
        <span className={'tw-text-sm'}>
            Add
            <span className={'tw-font-semibold'}>{` "${label}"`}</span>
        </span>
    );

    // useful for GroupedOptions
    const formatGroupLabel = (data) => (
        <div className={'tw-flex tw-justify-between tw-items-center'}>
            <span>{data.label}</span>
            <span
                className={
                    'tw-rounded-md tw-text-xs tw-font-normal tw-text-secondary-foreground tw-bg-secondary tw-shadow-sm tw-px-1'
                }
            >
                {data.options.length}
            </span>
        </div>
    );
    return {
        formatCreateLabel,
        formatGroupLabel
    };
};