import { cn } from "../../lib/utils"
import ReactTextareaAutosize from "react-textarea-autosize"
import { cva } from "class-variance-authority";


const textAreavariants = cva("tw-bg-background tw-ring-offset-background placeholder:tw-text-muted-foreground focus-visible:tw-ring-ring tw-flex tw-w-full tw-resize-none tw-rounded-md tw-border tw-border-input tw-px-3 tw-py-2 tw-text-sm focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50", {
    variants: {
        variant: {
            default: "focus-visible:tw-border-ring",
            ringShadow: "hover:tw-border-indigo-400 focus-visible:tw-border-ring focus-visible:tw-ring-2 focus-visible:tw-ring-indigo-200/80 focus-visible:dark:tw-ring-indigo-700/30",
            shadow: "focus-visible:tw-border-ring focus-visible:tw-shadow-input",
            ringed: "focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2"
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const TextareaAutosize = ({
    value,
    onValueChange,
    textareaRef,
    className,
    placeholder = "",
    minRows = 1,
    maxRows = 6,
    maxLength,
    onKeyDown = () => { },
    onPaste = () => { },
    onCompositionStart = () => { },
    onCompositionEnd = () => { },
    variant = "default"
}) => {
    return (
        <ReactTextareaAutosize
            ref={textareaRef}
            className={cn(textAreavariants({ variant }), className)}
            minRows={minRows}
            maxRows={minRows > maxRows ? minRows : maxRows}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={event => onValueChange(event.target.value)}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            onCompositionStart={onCompositionStart}
            onCompositionEnd={onCompositionEnd}
        />
    )
}