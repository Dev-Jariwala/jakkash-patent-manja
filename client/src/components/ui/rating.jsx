import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Star } from "lucide-react"

import { cn } from "../../lib/utils"


const RatingItem = React.forwardRef(({ className, value, selectedValue, Icon = Star, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        "tw-aspect-square tw-fill-transparent tw-px-1 tw-text-primary tw-ring-offset-background focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>svg]:tw-stroke-yellow-500",
        props["aria-readonly"] && "tw-pointer-events-none",
        selectedValue >= Number(value) && "[&>svg]:tw-fill-yellow-500",
        className
      )}
      {...props}
    >
      <Icon className="tw-size-6 tw-fill-transparent tw-stroke-transparent tw-stroke-[1.5]" />
    </RadioGroupPrimitive.Item>
  )
})

RatingItem.displayName = RadioGroupPrimitive.Item.displayName


const RatingGroup = React.forwardRef(
  (
    {
      className,
      Icon,
      ratingSteps = 5,
      customLabel,
      readonly = false,
      showLabel = true,
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(
      Number(props.defaultValue) || 0
    )

    return (
      <RadioGroupPrimitive.Root
        className={cn(
          "tw-flex tw-items-center",
          props.disabled && "tw-pointer-events-none",
          className
        )}
        {...props}
        ref={ref}
        aria-readonly={readonly}
        onValueChange={(value) => {
          if (readonly) return
          setSelectedValue(Number(value))
          props.onValueChange && props.onValueChange(value)
        }}
        tabIndex={readonly ? -1 : 0}
      >
        {Array.from({ length: ratingSteps }, (_, i) => i + 1).map((value) => (
          <RatingItem
            key={value}
            value={value.toString()}
            Icon={Icon}
            selectedValue={selectedValue}
            aria-readonly={readonly}
          />
        ))}
       {showLabel && <p className={cn("tw-ml-2", !customLabel && "tw-w-14")}>
          {customLabel ? customLabel : `(${selectedValue} / ${ratingSteps})`}
        </p>}
      </RadioGroupPrimitive.Root>
    )
  }
)
RatingGroup.displayName = RadioGroupPrimitive.Root.displayName

export { RatingGroup, RatingItem }