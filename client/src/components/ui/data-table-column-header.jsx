import {
    ArrowDown,
    ArrowUp,
    ChevronsUpDown,
    EyeOff
} from 'lucide-react'
// import { Column } from "@tanstack/react-table"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"

export function DataTableColumnHeader({
    column,
    title,
    className,
    titleClassName,
}) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("tw-flex tw-items-center tw-space-x-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="tw--ml-3 tw-h-8 data-[state=open]:tw-bg-accent"
                    >
                        <b className={cn(titleClassName)}>{title}</b>
                        {column.getIsSorted() === "desc" ? (
                            <ArrowDown className="tw-ml-2 tw-h-4 tw-w-4" />
                        ) : column.getIsSorted() === "asc" ? (
                            <ArrowUp className="tw-ml-2 tw-h-4 tw-w-4" />
                        ) : (
                            <ChevronsUpDown className="tw-ml-2 tw-h-4 tw-w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <ArrowUp className="tw-mr-2 tw-h-3.5 tw-w-3.5 tw-text-muted-foreground/70" />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <ArrowDown className="tw-mr-2 tw-h-3.5 tw-w-3.5 tw-text-muted-foreground/70" />
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                        <EyeOff className="tw-mr-2 tw-h-3.5 tw-w-3.5 tw-text-muted-foreground/70" />
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}