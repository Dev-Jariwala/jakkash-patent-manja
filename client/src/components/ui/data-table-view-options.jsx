import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// import { Table } from "@tanstack/react-table"
import { Button } from "./button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./dropdown-menu"
import { Settings2 } from "lucide-react"


export function DataTableViewOptions({
    table,
    headers,
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="tw-ml-auto tw-h-8 lg:tw-flex"
                >
                    <Settings2 className="tw-mr-2 tw-h-4 tw-w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* {console.log(table.getAllColumns())} */}
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            // typeof column.accessorFn !== "undefined" && 
                            column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="tw-capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {/* {typeof column?.columnDef?.header === "string" ? column?.columnDef?.header : column?.id} */}
                                {headers ? headers[column.id] : column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}