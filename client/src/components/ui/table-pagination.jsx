import React from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import { cn } from "../../lib/utils";

import { Button } from "./button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";

const pageOptions = [10, 25, 50, 100];

function Pagination({ table, maxPageNumbers = 5 }) {
    if (!table) return null;

    const pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex;

    let startPage = Math.max(0, pageIndex - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(pageCount - 1, startPage + maxPageNumbers - 1);

    if (pageIndex < Math.floor(maxPageNumbers / 2)) {
        endPage = Math.min(maxPageNumbers - 1, pageCount - 1);
    }
    if (pageIndex >= pageCount - Math.floor(maxPageNumbers / 2)) {
        startPage = Math.max(0, pageCount - maxPageNumbers);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="tw-flex tw-justify-center tw-space-x-1 sm:tw-space-x-2 tw-px-1 sm:tw-px-2">
            {startPage > 0 && (
                <>
                    <Button variant="outline" className='tw-px-1 sm:tw-px-2 tw-py-1 tw-text-xs sm:tw-text-sm' onClick={() => table.setPageIndex(0)}>1</Button>
                    {startPage > 1 && <span className="tw-text-xs sm:tw-text-sm">...</span>}
                </>
            )}
            {pages.map(page => (
                <Button
                    key={page}
                    variant="outline"
                    onClick={() => table.setPageIndex(page)}
                    className={cn('tw-px-1 sm:tw-px-2 tw-py-1 tw-transition-none tw-text-xs sm:tw-text-sm', {
                        'tw-font-bold tw-bg-indigo-500 tw-text-white tw-border-indigo-500 enabled:hover:tw-text-white enabled:hover:tw-bg-indigo-500 enabled:hover:tw-border-indigo-500': pageIndex === page
                    })}
                >
                    {page + 1}
                </Button>
            ))}
            {endPage < pageCount - 1 && (
                <>
                    {endPage < pageCount - 2 && <span className="tw-text-xs sm:tw-text-sm">...</span>}
                    <Button variant="outline" className='tw-px-1 sm:tw-px-2 tw-py-1 tw-text-xs sm:tw-text-sm' onClick={() => table.setPageIndex(pageCount - 1)}>{pageCount}</Button>
                </>
            )}
        </div>
    );
}

export function DataTablePagination({ table, count, customPerPageOptions }) {
    if (!table) return null;
    const perPageOptions = customPerPageOptions || pageOptions;

    return (
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-between tw-px-2 tw-pb-4 tw-space-y-2 sm:tw-space-y-0">
            <div className="tw-text-xs sm:tw-text-sm tw-text-muted-foreground tw-order-2 sm:tw-order-1">
                showing {
                    table?.getState().pagination.pageIndex * table?.getState().pagination.pageSize + 1
                } to {
                    table?.getState().pagination.pageIndex * table?.getState().pagination.pageSize + table?.getState().pagination.pageSize
                } of {count} rows
            </div>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-space-y-2 sm:tw-space-y-0 sm:tw-space-x-4 lg:tw-space-x-8 tw-order-1 sm:tw-order-2">
                <div className="tw-flex tw-items-center tw-space-x-2">
                    <p className="tw-text-xs sm:tw-text-sm tw-font-medium tw-m-0">Rows per page</p>
                    <Select
                        value={`${table?.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table?.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="tw-h-8 !tw-w-[60px] sm:!tw-w-[70px]">
                            <SelectValue placeholder={table?.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {perPageOptions.map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="tw-flex tw-items-center tw-space-x-1 sm:tw-space-x-2">
                    <div className="tw-hidden sm:tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-medium">
                        Page {table?.getState().pagination.pageIndex + 1} of{" "}
                        {table?.getPageCount()}
                    </div>
                    <Button
                        variant="outline"
                        className='tw-p-1'
                        onClick={() => table?.setPageIndex(0)}
                        disabled={!table?.getCanPreviousPage()}
                    >
                        <span className="tw-sr-only">Go to first page</span>
                        <ChevronsLeft size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        className='tw-p-1'
                        onClick={() => table?.previousPage()}
                        disabled={!table?.getCanPreviousPage()}
                    >
                        <span className="tw-sr-only">Go to previous page</span>
                        <ChevronLeft size={16} />
                    </Button>
                    <Pagination table={table} maxPageNumbers={3} />
                    <Button
                        variant="outline"
                        className='tw-p-1'
                        onClick={() => table?.nextPage()}
                        disabled={!table?.getCanNextPage()}
                    >
                        <span className="tw-sr-only">Go to next page</span>
                        <ChevronRight size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        className='tw-p-1'
                        onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
                        disabled={!table?.getCanNextPage()}
                    >
                        <span className="tw-sr-only">Go to last page</span>
                        <ChevronsRight size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}