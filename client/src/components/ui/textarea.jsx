import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const inputvariants = cva("tw-flex tw-w-full tw-rounded-md tw-border tw-border-input tw-px-3 tw-py-2 tw-text-sm tw-transition tw-duration-200 tw-ease-in-out tw-ring-offset-background placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-ring focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50", {
  variants: {
    variant: {
      default: "focus-visible:tw-border-ring",
      ringed: "focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",
      ringShadow: "hover:tw-border-indigo-400 focus-visible:tw-border-ring focus-visible:tw-ring-2 focus-visible:tw-ring-indigo-200/80 focus-visible:dark:tw-ring-indigo-700/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
}
)

const Textarea = React.forwardRef(({ variant, className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(inputvariants({ variant }),
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
