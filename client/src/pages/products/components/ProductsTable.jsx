import { useAuth } from "@/hooks/authProvider";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { useMemo, useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";
import { Chip } from "@/components/ui/chip";

const columnHelper = createColumnHelper();
const columnsDef = [
  columnHelper.accessor("product_name", {
    header: "Product Name",
  }),
  columnHelper.accessor("retail_price", {
    header: "Retail Price",
  }),
  columnHelper.accessor("wholesale_price", {
    header: "Wholesale Price",
  }),
  columnHelper.accessor("stock_in_hand", {
    header: "Stock In Hand",
  }),
  columnHelper.accessor("total_stock", {
    header: "Total Stock",
  }),
  columnHelper.accessor("is_labour", {
    header: "Category",
    cell: (info) => {
      return (
        <Chip
          variant={"light"}
          border={"none"}
          size={"xs"}
          color={info.getValue() === 0 ? "indigo" : "gray"}
          className={''}
        >
          {info.getValue() ? "Labour" : "Product"}
        </Chip>
      );
    },
  }),
];

const ProductsTable = () => {
  const { activeCollection } = useAuth();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  const debouncedSetSearchQuery = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSetSearchQuery(searchQuery);
  }, [searchQuery, debouncedSetSearchQuery]);

  const { data: productData } = useQuery({
    queryKey: ["products", activeCollection, pagination, debouncedQuery],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}products/by_collection_id/${
          activeCollection.value
        }?page=${pagination.pageIndex + 1}&limit=${
          pagination.pageSize
        }&search=${debouncedQuery}`,
        params: {
          pageIndex: pagination.pageIndex,
          pageSize: pagination.pageSize,
        },
      });
      return response.data;
    },
    placeholderData: keepPreviousData,
    enabled: !!activeCollection?.value,
  });

  const data = useMemo(() => productData?.products ?? [], [productData]);
  const columns = useMemo(() => columnsDef, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    rowCount: productData?.totalProducts ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  return (
    <>
      <div className="tw-flex tw-items-center tw-justify-between tw-px-4">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search product name..."
          className="tw-max-w-64"
        />
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
                  <TableHead>Actions</TableHead>
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
                    <TableCell className="tw-flex tw-items-center tw-space-x-2">
                      <Link
                        to={`/products/update?product_id=${row.original?.product_id}`}
                        className="hover:tw-bg-gray-200 tw-rounded-full tw-size-8 tw-flex tw-items-center tw-justify-center"
                      >
                        <Pencil size={16} className="tw-text-green-500" />
                      </Link>
                    </TableCell>
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
        <div className="">{table.getRowCount()} Products</div>
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

export default ProductsTable;
