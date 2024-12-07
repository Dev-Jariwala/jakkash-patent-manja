import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { ScrollArea } from "./scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  const handleCalendarChange = (_value, _e) => {
    const _event = {
      target: {
        value: String(_value),
      },
    };
    _e(_event);
  };
  const { selected } = props

  return (
    (<DayPicker
      defaultMonth={selected ? new Date(selected) : new Date()}
      style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}
      showOutsideDays={showOutsideDays}
      className={cn("tw-p-3", className)}
      classNames={{
        months: "tw-flex tw-flex-col sm:tw-flex-row tw-space-y-4 sm:tw-space-x-4 sm:tw-space-y-0",
        month: "tw-space-y-4",
        caption_start: "is-start",
        caption_between: "is-between",
        caption_end: "is-end",
        caption: "tw-flex tw-justify-center tw-pt-1 tw-relative tw-items-center tw-gap-1",
        caption_label: "tw-flex tw-h-7 tw-text-sm tw-font-medium tw-justify-center tw-items-center tw-grow [.is-multiple_&]:tw-flex",
        caption_dropdowns: "tw-flex tw-justify-center tw-gap-1 tw-grow tw-dropdowns tw-pl-8 tw-pr-9",
        multiple_months: "tw-is-multiple",
        vhidden: "tw-hidden [.is-between_&]:tw-flex [.is-end_&]:tw-flex [.is-start.is-end_&]:tw-hidden",
        nav: "tw-space-x-1 tw-flex tw-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 tw-opacity-50 hover:tw-opacity-100"
        ),
        nav_button_previous: "tw-absolute tw-left-1",
        nav_button_next: "tw-absolute tw-right-1",
        table: "tw-w-full border-collapse tw-space-y-1",
        head_row: "tw-flex tw-text-center",
        head_cell:
          "tw-text-muted-foreground tw-rounded-md tw-w-9 tw-font-normal tw-text-[0.8rem]",
        row: "tw-flex tw-w-full tw-mt-2",
        cell: "tw-h-9 tw-w-9 tw-text-center tw-text-sm tw-p-0 tw-relative [&:has([aria-selected])]:tw-bg-accent first:[&:has([aria-selected])]:tw-rounded-l-md last:[&:has([aria-selected])]:tw-rounded-r-md focus-within:tw-relative focus-within:tw-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "tw-h-9 tw-w-9 tw-p-0 tw-font-normal aria-selected:tw-opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "tw-bg-indigo-500 tw-text-primary-foreground hover:!tw-bg-indigo-500 hover:!tw-text-primary-foreground focus:tw-bg-indigo-500 focus:tw-text-primary-foreground",
        day_today: "tw-bg-accent tw-text-accent-foreground !tw-font-bold tw-underline",
        day_outside:
          "day-outside tw-text-muted-foreground tw-opacity-50 aria-selected:tw-bg-accent/50 aria-selected:tw-text-muted-foreground aria-selected:tw-opacity-30",
        day_disabled: "tw-text-muted-foreground tw-opacity-50",
        day_range_middle:
          "aria-selected:tw-bg-accent aria-selected:tw-text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="tw-h-4 tw-w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="tw-h-4 tw-w-4" />,
        Dropdown: function (props) {
          return (
            <Select
              {...props}
              onValueChange={value => {
                if (props.onChange) {
                  handleCalendarChange(value, props.onChange);
                }
              }}
              value={props.value}
            >
              <SelectTrigger className={cn(buttonVariants({ variant: "ghost" }), "focus:tw-ring-0 tw-pl-2 tw-pr-1 tw-py-2 tw-h-7 tw-w-fit tw-font-medium [.is-between_&]:tw-hidden [.is-end_&]:tw-hidden [.is-start.is-end_&]:tw-flex")}>
                <SelectValue placeholder={props?.caption}>{props?.caption}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="tw-h-80">
                  {props?.children &&
                    React.Children.map(props.children, child => (
                      <SelectItem value={child.props?.value}>
                        {child.props?.children}
                      </SelectItem>
                    ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }