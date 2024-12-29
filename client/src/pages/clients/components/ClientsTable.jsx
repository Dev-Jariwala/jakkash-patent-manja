import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";
import { useDebounce, useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { getStocksByCollectionId } from "@/services/stocks";
import { getClients } from "@/services/clients";


const columnHelper = createColumnHelper();
const columnsDef = [
    columnHelper.accessor("name", {
        header: "Client Name",
    }),
    columnHelper.accessor("mobile", {
        header: "Mobile",
    }),
    columnHelper.accessor("address", {
        header: "Address",
    }),
];

// eslint-disable-next-line react/prop-types
const ClientsTable = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 300);

    const { data: clientsData, error: clientsDataError } = useQuery({
        queryKey: ["clients", pagination, debouncedSearch],
        queryFn: async () => {
            const response = await getClients({ pagination, debouncedSearch });
            return response.data;
        },
        placeholderData: keepPreviousData,
    });

    const data = useMemo(() => clientsData?.clients ?? [], [clientsData]);
    const columns = useMemo(() => columnsDef, []);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        rowCount: clientsData?.totalClients ?? -1,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
    });

    useEffect(() => {
        if (clientsDataError) {
            toast.error(`Error getting bills`)
        }
    }, [clientsDataError])

    return (
        <>
            <div className="tw-flex tw-items-center tw-justify-between tw-px-4">
                <div className="tw-flex tw-items-center tw-space-x-4">
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search product name..."
                        className="tw-w-56"
                    />
                </div>
            </div>
            <ScrollArea className="tw-w-full tw-overflow-y-auto">
                <div className="tw-mt-3">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow className="tw-border-t" key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className="tw-text-slate-700 tw-whitespace-nowrap"
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                    {/* <TableHead>Actions</TableHead> */}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="hover:tw-bg-gray-100"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                        {/* <TableCell className="tw-flex tw-items-center tw-space-x-2">
                                            <Link
                                                to={`/stocks/update?stock_id=${row.original?.stock_id}`}
                                                className="hover:tw-bg-gray-200 tw-rounded-full tw-size-8 tw-flex tw-items-center tw-justify-center"
                                            >
                                                <Pencil size={16} className="tw-text-green-500" />
                                            </Link>
                                        </TableCell> */}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                <div className="">{table.getRowCount()} Clients</div>
                <div className="tw-flex tw-items-center tw-space-x-2 ">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <MdKeyboardDoubleArrowLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <IoIosArrowBack />
                    </Button>
                    <Button variant="outline">{pagination.pageIndex + 1}</Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <IoIosArrowForward />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <MdKeyboardDoubleArrowRight />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ClientsTable;
