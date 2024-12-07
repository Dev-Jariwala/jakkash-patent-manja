export const ColumnResizer = ({
    header,
}) => {
    if (header?.column?.getCanResize() === false) return <></>;

    return (
        <div
            {...{
                onMouseDown: header?.getResizeHandler(),
                onTouchStart: header?.getResizeHandler(),
                className: `tw-absolute tw-top-0 tw-right-0 tw-cursor-col-resize tw-w-px tw-h-full tw-bg-gray-300 hover:tw-bg-gray-400 hover:tw-w-1.5`,
                style: {
                    userSelect: "none",
                    touchAction: "none",
                },
            }}
        />
    );
};