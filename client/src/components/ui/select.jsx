import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { cva } from "class-variance-authority";
import PulsatingDots from "./loaders/PulsatingDots";

const selectVariants = cva(
  "tw-flex tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-70",
  {
    variants: {
      variant: {
        default: "focus:tw-ring-1 focus:tw-ring-ring focus:tw-ring-offset-1",
        ringShadow: "hover:tw-border-indigo-400 focus:tw-border-ring focus:tw-ring-2 focus:tw-ring-indigo-200/80 focus:dark:tw-ring-indigo-700/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, variant, children, disabled, isLoading = false, loadingText, iconSize, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    disabled={disabled || isLoading}
    className={cn(selectVariants({ variant }), className)}
    {...props}>
    {/* {children} */}
    {isLoading ? <PulsatingDots className='tw-size-1' /> : children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown size={iconSize || 18} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      style={{ fontFamily: 'Nunito, "Segoe UI", arial', boxShadow: "0 2px 10px 0 rgba(0,0,0,0.2)" }}
      ref={ref}
      className={cn(
        "tw-relative tw-z-[9999] tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow",
        "data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1 tw-max-h-[--radix-select-content-available-height]",
        className
      )}
      position={position}
      {...props}>
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("tw-py-2 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-2 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none",
      "focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    {...props}>
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tw-h-4 tw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
