import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../../lib/utils"
import { X } from "lucide-react"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, showArrow, arrowClassname, showClose, closeButtonClassName, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "tw-z-[99] tw-w-72 tw-rounded-md tw-border tw-bg-popover tw-p-4 tw-text-popover-foreground tw-shadow-md tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        className
      )}
      {...props} >
      {props.children}
      {showClose && (
        <PopoverPrimitive.Close className={cn("tw-absolute tw-top-1.5 tw-right-1.5 tw-text-red-400 hover:tw-text-red-600 hover:tw-bg-red-100 tw-rounded tw-p-1 tw-cursor-pointer", closeButtonClassName)}>
          <X className="tw-size-4" />
        </PopoverPrimitive.Close>
      )}
      {showArrow && (
        <PopoverPrimitive.Arrow style={{
          fill: 'white',
          filter: 'drop-shadow(0 0 1px gray)',
          clipPath: 'inset(0 -10px -10px -10px)',
        }} className="tw-w-4 tw-h-2.5 tw-absolute -tw-top-0.5 tw-transform tw-translate-x-[-50%]" />
      )}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
