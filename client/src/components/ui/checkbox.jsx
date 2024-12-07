import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const inputvariants = cva("tw-peer tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border tw-border-indigo-300 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-text-primary-foreground data-[state=checked]:tw-border-ring data-[state=checked]:tw-bg-ring data-[state=checked]:tw-text-primary-foreground", {
  variants: {
    variant: {
      default: "focus-visible:tw-border-ring",
      ringed: "focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2"
    },
  },
  defaultVariants: {
    variant: "default",
  },
}
)

const Checkbox = React.forwardRef(({ variant, className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(inputvariants({ variant }),
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("tw-flex tw-items-center tw-justify-center tw-text-current")}>
      <Check className="tw-h-4 tw-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
