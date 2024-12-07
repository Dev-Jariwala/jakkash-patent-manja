import * as React from "react"
import { Check, PlusCircle } from "lucide-react"
import { cn } from "../../lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Separator } from "./separator"
import { ScrollArea } from "./scroll-area"

export function DataTableFacetedFilter({ column, title, options }) {
    const facets = column?.getFacetedUniqueValues()
    const selectedValues = new Set(column?.getFilterValue())

    const sortedOptions = [...options].sort((a, b) => {
        const aSelected = selectedValues.has(a.value);
        const bSelected = selectedValues.has(b.value);
        return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
    });

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="tw-h-8 tw-border-dashed">
                    <PlusCircle className="tw-mr-2 tw-h-4 tw-w-4" />
                    {title}
                    {selectedValues?.size > 0 && (
                        <>
                            <Separator orientation="vertical" className="tw-mx-2 tw-h-4" />
                            <Badge
                                variant="secondary"
                                className="tw-rounded-sm tw-px-1 tw-font-normal lg:tw-hidden"
                            >
                                {selectedValues.size}
                            </Badge>
                            <div className="tw-hidden tw-space-x-1 lg:tw-flex">
                                {selectedValues.size > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="tw-rounded-sm tw-px-1 tw-font-normal"
                                    >
                                        {selectedValues.size} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) => selectedValues.has(option.value))
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="tw-rounded-sm tw-px-1 tw-font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="tw-w-[200px] tw-p-0 tw-text-xs md:tw-text-sm" align="start" style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
                <Command>
                    <CommandInput placeholder={title} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            <ScrollArea className="tw-h-56">
                                {sortedOptions.map((option) => {
                                    const isSelected = selectedValues.has(option.value)
                                    return (
                                        <CommandItem
                                            key={option.value}
                                            onSelect={() => {
                                                if (isSelected) {
                                                    selectedValues.delete(option.value)
                                                } else {
                                                    selectedValues.add(option.value)
                                                }
                                                const filterValues = Array.from(selectedValues)
                                                column?.setFilterValue(
                                                    filterValues.length ? filterValues : undefined
                                                )
                                            }}
                                        >
                                            <div
                                                className={cn(
                                                    "tw-mr-2 flex tw-h-4 tw-w-4 tw-items-center tw-justify-center tw-rounded-sm tw-border tw-border-primary",
                                                    isSelected
                                                        ? "tw-bg-primary tw-text-primary-foreground"
                                                        : "tw-opacity-50 [&_svg]:tw-invisible"
                                                )}
                                            >
                                                <Check className={cn("tw-h-4 tw-w-4")} />
                                            </div>
                                            {option.icon && (
                                                <option.icon className="tw-mr-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                                            )}
                                            <span>{option.label}</span>
                                            {facets?.get(option.value) && (
                                                <span className="tw-ml-auto tw-rounded-full tw-bg-indigo-200 tw-flex tw-h-4 tw-w-4 tw-items-center tw-justify-center tw-font-mono tw-text-xs">
                                                    {facets.get(option.value)}
                                                </span>
                                            )}
                                        </CommandItem>
                                    )
                                })}
                            </ScrollArea>
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className="tw-justify-center tw-text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}