import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Select from "react-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BreadCrum from "@/components/breadcrum/BreadCrum";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MutationError from "@/components/Errors/MutationError";
import QueryError from "@/components/Errors/QueryError";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createPurchase, getPurchaseById, updatePurchase } from "@/services/purchases";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
const schema = yup.object().shape({
    purchase_date: yup.date().required("Purchase Date is required").typeError("Purchase Date is required"),
    invoice_no: yup.string().required("Invoice Number is required"),
    supplier_name: yup.string().required("Supplier Name is required"),
    item_description: yup.string(),
    rate: yup.number().min(0, 'Rate must be at least 0').required("Rate is required").typeError("Rate is required"),
    quantity: yup.number().min(0, 'Quantity must be at least 0').required("Quantity is required").typeError("Quantity is required"),
});

const PurchaseForm = () => {
    const [activeCollection] = useLocalStorage("activeCollection", null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const formType = location.pathname.split("/")[2];
    const [searchParams] = useSearchParams();
    const purchase_id = searchParams.get("purchase_id");
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            purchase_date: "",
            invoice_no: "",
            supplier_name: "",
            item_description: "",
            rate: "",
            quantity: "",
        },
    });

    const { data: purchase, isLoading, isError, error, } = useQuery({
        queryKey: ["purchases", activeCollection, purchase_id],
        queryFn: async () => {
            const res = await getPurchaseById({ activeCollection, purchase_id });
            return res.data.purchase;
        },
        enabled: !!activeCollection && !!purchase_id && formType === "update",
    });

    const createPurchaseMutation = useMutation({
        mutationFn: createPurchase,
        onSuccess: () => {
            navigate("/purchases");
            queryClient.invalidateQueries(["purchases", activeCollection]);
        },
    });
    const updatePurchaseMutation = useMutation({
        mutationFn: updatePurchase,
        onSuccess: () => {
            navigate("/purchases");
            queryClient.invalidateQueries(["purchases", activeCollection]);
        },
    });
    const onSubmit = async (data) => {
        if (formType === "new") {
            createPurchaseMutation.mutate({ data, collection_id: activeCollection });
        } else if (formType === "update") {
            updatePurchaseMutation.mutate({ data, collection_id: activeCollection, purchase_id });
        }
    };
    useEffect(() => {
        if (purchase && purchase?.collection_id === activeCollection) {
            console.log(purchase);
            form.reset({
                purchase_date: purchase?.purchase_date,
                invoice_no: purchase?.invoice_no,
                supplier_name: purchase?.supplier_name,
                item_description: purchase?.item_description,
                rate: purchase?.rate,
                quantity: purchase?.quantity
            });
        }
    }, [purchase, purchase_id, activeCollection]);

    if (purchase && purchase?.collection_id !== activeCollection) {
        return (
            <div className="tw-text-center tw-text-xl tw-text-red-500 tw-font-medium">
                This purchase does not belong to this collection.
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
                            { path: "/purchases", label: "Purchases" },
                            {
                                path: `/purchase/${formType}?purchase_id=${purchase_id}`,
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
                            name="purchase_date"
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
                            name="invoice_no"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Invoice No <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup></FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="supplier_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Supplier Name <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup></FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rate <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup></FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity <sup className="tw-text-red-500 tw-text-base -tw-top-0">*</sup></FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="item_description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Item Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="tw-bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="tw-w-full tw-mt-5">
                        <MutationError mutation={createPurchaseMutation} />
                        {isError && !isLoading && (
                            <QueryError className={"tw-mb-5"} error={error} />
                        )}
                        <Button variant="" className="tw-bg-indigo-500 hover:tw-bg-indigo-600" type="submit">
                            {purchase_id && formType === "update" ? "Update" : "Create"}{" "}
                            Purchase
                        </Button>
                    </div>
                </form>{" "}
            </Form>
        </div>
    );
};

export default PurchaseForm;
