import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const inputvariants = cva("tw-flex tw-w-full tw-rounded-md tw-border tw-transition tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-70", {
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

const Input = React.forwardRef(({ variant, className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(inputvariants({ variant }),
        className
      )}
      ref={ref}
      autoComplete="new-password"
      {...props} />)
  );
})
Input.displayName = "Input"

const rootVariants = cva(
  "tw-py-1 tw-px-2 tw-flex tw-rounded tw-gap-1 tw-items-center tw-transition tw-duration-200",
  {
    variants: {
      variant: {
        // outline
        default:
          "tw-border tw-ring-zinc-800 tw-ring-zinc-300 focus-within:tw-ring-2 focus-within:tw-ring-offset-2 dark:focus-within:tw-ring-zinc-400 focus-within:tw-ring-offset-white dark:focus-within:tw-ring-offset-black focus-within:tw-ring-zinc-600",

        underlined:
          "tw-border-b dark:tw-border-zinc-800 focus-within:tw-border-b-2 dark:focus-within:tw-border-zinc-400 focus-within:tw-border-zinc-500 tw-rounded-none tw-px-0",

        filled:
          "tw-bg-zinc-100 dark:tw-bg-zinc-900 dark:tw-text-zinc-100 focus-within:tw-bg-zinc-200 dark:focus-within:tw-bg-zinc-800",

        ghost:
          "tw-bg-transparent dark:tw-bg-transparent dark:tw-text-zinc-100 focus-within:tw-bg-zinc-100 dark:focus-within:tw-bg-zinc-900",
        neubrutalism:
          "tw-border tw-border-zinc-700 tw-rounded-sm tw-shadow-[2px_2px_0px_rgb(82,82,91)] dark:tw-shadow-[2px_2px_0px_rgb(82,82,91)] focus-within:tw-bg-yellow-50 dark:focus-within:tw-bg-zinc-900/40",
        // with floating label
      },
      size: {
        sm: "tw-h-8",
        default: "tw-h-10",
        lg: "tw-h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


const InputBlock = ({
  root: { size, variant, className, inputClassName } = { size: "default", variant: "default" },
  leftIcon,
  rightIcon,
  ...input
}) => (
  <div className={cn(rootVariants({ variant, size, className }))}>
    {leftIcon && <span className="tw-px-1">{leftIcon}</span>}
    <Input {...input} className={cn("tw-p-0 tw-border-none", inputClassName)} />
    {rightIcon && <span className="tw-px-1">{rightIcon}</span>}
  </div>
)

export { Input, InputBlock }