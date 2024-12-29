import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BreadCrum from "@/components/breadcrum/BreadCrum";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsByCollectionId } from "@/services/products";
import MutationError from "@/components/Errors/MutationError";
import QueryError from "@/components/Errors/QueryError";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createStock, getStockById, updateStockById } from "@/services/stocks";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import ReactSelect from "@/components/ui/react-select/react-select";
import { toast } from "react-toastify";

const schema = yup.object().shape({
    product_id: yup.string().required("Product ID is required").typeError("Product ID is required"),
    date: yup.date().required("Date is required").typeError("Date is required"),
    quantity: yup.number().min(0, "Quantity must be at least 0").required("Quantity is required").typeError("Quantity is required"),
});

const StocksForm = () => {
    const [activeCollection] = useLocalStorage("activeCollection", null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const formType = location.pathname.split("/")[2];
    const [searchParams] = useSearchParams();
    const stock_id = searchParams.get("stock_id");
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            product_id: "",
            date: "",
            quantity: "",
        },
    });

    const { data: stock, isLoading, isError, error, } = useQuery({
        queryKey: ["stock", activeCollection, stock_id],
        queryFn: async () => {
            const res = await getStockById({ collection_id: activeCollection, stock_id });
            return res.data.stock;
        },
        enabled: !!activeCollection && !!stock_id && formType === "update",
    });
    const { data: products, isLoading: isProductsLoading, error: productsError } = useQuery({
        queryKey: ["products", activeCollection],
        queryFn: async () => {
            const response = await getProductsByCollectionId({ activeCollection, pagination: { pageIndex: -2 } });
            return response.data?.products || [];
        },
        enabled: !!activeCollection,
    });
    const productsOptions = useMemo(() => products?.map(product => ({ label: product?.product_name, value: product?.product_id })) || [], [products]);

    const createStockMutation = useMutation({
        mutationFn: async (data) => {
            return await createStock({ product_id: data.product_id, collection_id: activeCollection, data });
        },
        onSuccess: () => {
            navigate("/stocks");
            queryClient.invalidateQueries(["stocks", activeCollection]);
            toast.success("Stock created successfully");
        },
        onError: () => {
            toast.error("Error creating stock");
        }
    });
    const updateStockMutation = useMutation({
        mutationFn: async (data) => {
            return await updateStockById({ collection_id: activeCollection, product_id: data.product_id, stock_id, data });
        },
        onSuccess: () => {
            navigate("/stocks");
            queryClient.invalidateQueries(["stocks", activeCollection]);
            toast.success("Stock updated successfully");
        },
        onError: () => {
            toast.error("Error updating stock");
        }
    });
    const onSubmit = async (data) => {
        console.log({ data });
        if (formType === "new") {
            createStockMutation.mutate(data);
        } else if (formType === "update") {
            updateStockMutation.mutate(data);
        }
    };
    useEffect(() => {
        if (stock && stock?.collection_id === activeCollection) {
            form.reset({
                product_id: stock?.product_id,
                date: stock?.date,
                quantity: stock?.quantity,
            });
        }
    }, [stock, activeCollection]);

    useEffect(() => {
        if (productsError) {
            toast.error("Error fetching products");
        }
    }, [productsError]);

    if (stock && stock?.collection_id !== activeCollection) {
        return (
            <div className="tw-text-center tw-text-xl tw-text-red-500 tw-font-medium">
                This product does not belong to this collection.
            </div>
        );
    }
    return (
        <div className="">
            <div className="tw-flex tw-items-center tw-justify-between tw-px-5 tw-border-b tw-border-gray-200 tw-py-4 tw-mb-3">
                <div className="tw-text-xl tw-text-gray-700 tw-font-semibold">
                    <BreadCrum
                        path={[
                            { path: "/", label: "Dashboard" },
                            { path: "/stocks", label: "Stocks" },
                            {
                                path: `/stocks/${formType}?stock_id=${stock_id}`,
                                label: `${formType}`,
                            },
                        ]}
                    />
                </div>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="tw-w-full tw-px-5"
                >
                    <div className=" tw-grid lg:tw-grid-cols-3 tw-gap-5">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="tw-flex tw-flex-col">
                                    <FormLabel>Date <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup></FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "tw-w-full tw-pl-3 tw-text-left tw-font-normal",
                                                        !field.value && "tw-text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="tw-ml-auto tw-h-4 tw-w-4 tw-opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="tw-w-auto tw-p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="product_id"
                            render={({ field }) => (
                                <FormItem className="tw-col-span-1">
                                    <FormLabel>
                                        Product <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup>
                                    </FormLabel>
                                    <FormControl>
                                        <ReactSelect
                                            options={productsOptions}
                                            placeholder=""
                                            value={productsOptions ? productsOptions.find((option) => option.value === field.value) : null}
                                            onChange={(e) => field.onChange(e.value)}
                                            onBlur={field.onBlur}
                                            isDisabled={formType === "update"}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>
                                        Quantity <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup>
                                    </FormLabel>
                                    <FormControl>
                                        <Input variant='ringShadow' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="tw-w-full tw-mt-5">
                        <MutationError mutation={createStockMutation} />
                        {isError && !isLoading && (
                            <QueryError className={"tw-mb-5"} error={error} />
                        )}
                        <Button variant="" className="tw-bg-indigo-500 hover:tw-bg-indigo-600" type="submit">
                            {stock_id && formType === "update" ? "Update" : "Create"}{" "}
                            Stock
                        </Button>
                    </div>
                </form>{" "}
            </Form>
        </div>
    );
};

export default StocksForm;
