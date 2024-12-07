import * as React from "react"
import { Calendar } from "lucide-react"
import { format } from "date-fns"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"
import MonthSelecter from "./month-selecter"


export default function MonthPicker({ currentMonth, onMonthChange, className, placeholder, selecterClassName, variant }) {
    return (
        <Popover style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
            <PopoverTrigger asChild>
                <Button
                    variant={variant || "outline"}
                    className={cn("tw-min-w-48 tw-justify-start tw-gap-2", className, !currentMonth && "tw-text-muted-foreground")}
                >
                    <Calendar className="tw-size-4" />
                    {currentMonth ? format(currentMonth, "MMMM yyyy") : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="tw-w-full p-0" style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
                <MonthSelecter currentMonth={currentMonth} onMonthChange={onMonthChange} className={selecterClassName} />
            </PopoverContent>
        </Popover>
    )
}