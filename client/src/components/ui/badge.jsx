import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "tw-inline-flex tw-items-center tw-px-2.5 tw-py-1 tw-text-xs tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "tw-border-transparent tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/80",
        secondary:
          "tw-border-transparent tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",
        destructive:
          "tw-border-transparent tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/80",
        outline: "tw-text-white",
        none: ''
      },
      color: {
        indigo: "tw-bg-indigo-500 tw-text-white hover:tw-bg-indigo-600",
        green: "tw-bg-green-500 tw-text-white hover:tw-bg-green-600",
        red: "tw-bg-red-500 tw-text-white hover:tw-bg-red-600",
        yellow: "tw-bg-yellow-500 tw-text-white hover:tw-bg-yellow-600",
        orange: "tw-bg-orange-500 tw-text-white hover:tw-bg-orange-600",
        pink: "tw-bg-pink-500 tw-text-white hover:tw-bg-pink-600",
        purple: "tw-bg-purple-500 tw-text-white hover:tw-bg-purple-600",
        teal: "tw-bg-teal-500 tw-text-white hover:tw-bg-teal-600",
        blue: "tw-bg-blue-500 tw-text-white hover:tw-bg-blue-600",
      },
      radius: {
        rounded: "tw-rounded",
        pill: "tw-rounded-full",
        square: "tw-rounded-none",
        md: "tw-rounded-md",
      },
      border: {
        default: "tw-border-transparent",
        bordered: "tw-border",
      },
      borderColors: {
        indigo: "tw-border-indigo-500 tw-bg-indigo-100 tw-text-indigo-800",
        green: "tw-border-green-500 tw-bg-green-100 tw-text-green-800",
        red: "tw-border-red-500 tw-bg-red-100 tw-text-red-800",
        yellow: "tw-border-yellow-500 tw-bg-yellow-100 tw-text-yellow-800",
        orange: "tw-border-orange-500 tw-bg-orange-100 tw-text-orange-800",
        pink: "tw-border-pink-500 tw-bg-pink-100 tw-text-pink-800",
        purple: "tw-border-purple-500 tw-bg-purple-100 tw-text-purple-800",
        teal: "tw-border-teal-500 tw-bg-teal-100 tw-text-teal-800",
        blue: "tw-border-blue-500 tw-bg-blue-100 tw-text-blue-800",
        gray: "tw-border-gray-500 tw-bg-gray-100 tw-text-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "rounded",
      border: "default",
    },
  }
)

function Badge({
  className,
  variant,
  color,
  radius,
  border,
  borderColors,
  count,
  ...props
}) {
  return (
    <div className={cn(className, badgeVariants({ variant, color, radius, border, borderColors }), 'tw-gap-1')} {...props}>
      {props.children}
      {count && (
        <span className="tw-inline-block tw-align-middle tw-text-center tw-text-xs tw-font-semibold tw-leading-none tw-rounded-full tw-select-none tw-whitespace-nowrap tw-px-1 tw-py-1 tw-bg-white/30">
          {count}
        </span>
      )}
    </div>
  );
}

export { Badge, badgeVariants }
