import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BreadCrum from "@/components/breadcrum/BreadCrum";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; import { getProductsByCollectionId } from "@/services/products";
import MutationError from "@/components/Errors/MutationError";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactSelect from "@/components/ui/react-select/react-select";
import { Textarea } from "@/components/ui/textarea";
import { createBill, getBillById, getNextBillNo, updateBillById } from "@/services/bills";

const schema = yup.object().shape({
    bill_no: yup.number().required("Bill No is required").typeError("Bill No is required"),
    mobile: yup.number().required("Mobile is required").typeError("Mobile is required").test('len', 'Mobile must be exactly 10 digits', val => val.toString().length === 10),
    name: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    order_date: yup.date().required("Order Date is required").typeError("Order Date is required"),
    delivery_date: yup.date().required("Delivery Date is required").typeError("Delivery Date is required"),
    products: yup.array().of(
        yup.object().shape({
            product_id: yup.string().required("Product is required"),
            stock_in_hand: yup.number().required("Stock in hand is required").typeError("Stock in hand is required"),
            quantity: yup.number().optional().typeError("Quantity is required")
                .max(yup.ref('stock_in_hand'), `Quantity must be less than or equal to stock.`),
            price: yup.number().required("Price is required").typeError("Price is required"),
        })
    ),
    notes: yup.string().optional(),
    total_firki: yup.number().min(0, 'Total firki must be at least zero.').required("Total Firki is required").typeError("Total Firki is required"),
    sub_total: yup.number().min(1, 'Sub Total must be at least one.').required("Sub Total is required").typeError("Sub Total is required")
        .test('sum', 'Sub Total must be equal to Discount + Advance + Total Due', function (value) {
            const { discount, advance, total_due, products } = this.parent;
            const estimatedSubTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
            return value === (discount + advance + total_due) && value === estimatedSubTotal;
        }),
    discount: yup.number().min(0, 'Discount must be at least zero.').required("Discount is required").typeError("Discount is required")
        .test('sum', 'Discount + Advance + Total Due must be equal to Sub Total', function (value) {
            const { sub_total, advance, total_due } = this.parent;
            return sub_total === (value + advance + total_due);
        }),
    advance: yup.number().min(0, 'Advance must be at least zero.').required("Advance is required").typeError("Advance is required")
        .test('sum', 'Discount + Advance + Total Due must be equal to Sub Total', function (value) {
            const { sub_total, discount, total_due } = this.parent;
            return sub_total === (discount + value + total_due);
        }),
    total_due: yup.number().min(0, 'Total Due must be at least zero.').required("Total Due is required").typeError("Total Due is required")
        .test('sum', 'Discount + Advance + Total Due must be equal to Sub Total', function (value) {
            const { sub_total, discount, advance } = this.parent;
            return sub_total === (discount + advance + value);
        }),
});

const BillsForm = () => {
    const { bill_id } = useParams();
    const [activeCollection] = useLocalStorage("activeCollection", null);
    const [searchParams] = useSearchParams();
    const billType = searchParams.get("bill_type");
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const formType = location.pathname.split("/")[2];
    // const bill_id = searchParams.get("bill_id");
    const form = useForm({
        mode: "onChange", // Validate as the user types
        reValidateMode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {
            bill_no: null,
            mobile: "",
            name: "",
            address: "",
            order_date: "",
            delivery_date: "",
            products: [],
            notes: "",
            total_firki: "",
            sub_total: 0,
            discount: 0,
            advance: 0,
            total_due: 0,
        },
    });
    const { data: bill, isLoading: isBillLoading, error: billError } = useQuery({
        queryKey: ["bill", activeCollection, bill_id],
        queryFn: async () => {
            const response = await getBillById({ collection_id: activeCollection, bill_id });
            return { ...response.data?.bill, bill_items: response.data?.billItems } || {};
        },
        enabled: !!activeCollection && !!bill_id,
    });
    const { data: products, isLoading: isProductsLoading, error: productsError } = useQuery({
        queryKey: ["products", activeCollection],
        queryFn: async () => {
            const response = await getProductsByCollectionId({ activeCollection, pagination: { pageIndex: -2 } });
            return response.data?.products || [];
        },
        enabled: !!activeCollection,
    });
    const { data: nextBillNo, isLoading: isNextBillNoLoading, error: nextBillNoError } = useQuery({
        queryKey: ["nextBillNo", activeCollection],
        queryFn: async () => {
            const response = await getNextBillNo({ collection_id: activeCollection, bill_type: billType });
            return response.data?.bill_no;
        },
        enabled: !!activeCollection,
    });
    const productsOptions = useMemo(() => products?.filter(product => product?.[`${billType}_price`] > 0)?.map(product => ({ label: product?.product_name, value: product?.product_id })) || [], [products]);

    const createBillMutation = useMutation({
        mutationFn: createBill,
        onSuccess: (res) => {
            navigate(`/bills/view?bill_id=${res.data?.bill?.bill_id}`);
            queryClient.invalidateQueries(["bills", activeCollection]);
            toast.success("Bill created successfully");
        },
        onError: (error) => {
            toast.error(`Error creating bill: ${error.message}`);
        },
    });

    const updateBillMutation = useMutation({
        mutationFn: updateBillById,
        onSuccess: (res) => {
            navigate(`/bills/view?bill_id=${res.data?.bill?.bill_id}`);
            queryClient.invalidateQueries(["bills", activeCollection]);
            toast.success("Bill updated successfully");
        },
        onError: (error) => {
            toast.error(`Error updating bill: ${error.message}`);
        },
    })

    const onSubmit = async (data) => {
        const filteredProducts = data.products.filter(product => product.quantity > 0);
        data.bill_items = filteredProducts;
        data.bill_no = nextBillNo;
        data.bill_type = billType;
        data.mobile = data.mobile.toString();
        // console.log({ data });
        if (formType === "new") {
            createBillMutation.mutate({ collection_id: activeCollection, data });
        } else {
            console.log({ data });
            // updateBillMutation.mutate({ collection_id: activeCollection, bill_id, data });
        }
    };

    const handleNumberInputChange = (e, field) => {
        const value = e.target.value.replace(/\D/g, '');
        field.onChange(value);
        return value;
    };

    useEffect(() => {
        form.setValue('products', products?.filter(product => product?.[`${billType}_price`] > 0)?.map(product => ({ product_id: product?.product_id, is_labour: product?.is_labour, quantity: 0, price: product[`${billType}_price`], stock_in_hand: product?.stock_in_hand, total: 0 })) || []);
    }, [products, billType]);

    useEffect(() => {
        if (formType === 'update' && bill) {
            form.setValue('bill_no', bill.bill_no);
            form.setValue('mobile', bill.mobile);
            form.setValue('name', bill.name);
            form.setValue('address', bill.address);
            form.setValue('order_date', new Date(bill.order_date));
            form.setValue('delivery_date', new Date(bill.delivery_date));
            form.setValue('products', products?.filter(product => product?.[`${bill.bill_type}_price`] > 0)?.map(product => {
                console.log({ product, bill });
                const billItem = bill.bill_items.find(item => item.product_id === product.product_id);
                return {
                    product_id: product.product_id,
                    stock_in_hand: product.stock_in_hand,
                    is_labour: product?.is_labour,
                    price: product[`${bill.bill_type}_price`],
                    quantity: billItem?.quantity || 0,
                    total: billItem?.total || 0,
                };
            }) || []);
            form.setValue('notes', bill.notes);
            form.setValue('total_firki', bill.total_firki);
            form.setValue('sub_total', bill.sub_total);
            form.setValue('discount', bill.discount);
            form.setValue('advance', bill.advance);
            form.setValue('total_due', bill.total_due);
        }
    }, [bill, formType, products]);

    useEffect(() => {
        form.setValue('bill_no', nextBillNo);
        form.trigger('bill_no');
    }, [nextBillNo, form]);

    useEffect(() => {
        if (productsError) {
            toast.error(`Error getting products: ${productsError.message}`);
        }
        if (nextBillNoError) {
            toast.error(`Error getting next bill no: ${nextBillNoError.message}`);
        }
        if (billError) {
            toast.error(`Error getting bill: ${billError.message}`);
        }
    }, [productsError, nextBillNoError, billError]);
    return (
        <>
            {isProductsLoading || isNextBillNoLoading ?
                <div className="tw-flex tw-items-center tw-justify-center tw-h-96">
                    ...loading
                </div> :
                <div className="">
                    <div className="tw-flex tw-items-center tw-justify-between tw-px-5 tw-border-b tw-border-gray-200 tw-py-4 tw-mb-3">
                        <div className="tw-text-xl tw-text-gray-700 tw-font-semibold">
                            <BreadCrum
                                path={[
                                    { path: "/", label: "Dashboard" },
                                    { path: "/bills", label: "Bills" },
                                    {
                                        path: `/bills/${billType}`,
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
                            <div className="tw-grid lg:tw-grid-cols-3 tw-gap-5">
                                <div className="">
                                    <FormField
                                        control={form.control}
                                        name="bill_no"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Bill No</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} disabled />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className=" tw-grid lg:tw-grid-cols-3 tw-gap-5 tw-mt-5">
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mobile</FormLabel>
                                            <FormControl>
                                                <Input className="" {...field} onChange={(e) => handleNumberInputChange(e, field)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input className="" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input className="" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="order_date"
                                    render={({ field }) => (
                                        <FormItem className="tw-flex tw-flex-col">
                                            <FormLabel>Date</FormLabel>
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
                                    name="delivery_date"
                                    render={({ field }) => (
                                        <FormItem className="tw-flex tw-flex-col">
                                            <FormLabel>Delivery Date</FormLabel>
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
                            </div>
                            <div className="tw-mt-5">
                                <div className="tw-grid tw-gap-4 tw-mt-2">
                                    <div className="tw-grid tw-grid-cols-5 tw-gap-5 tw-bg-gray-200 tw-py-3 tw-px-5">
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-700">Product</div>
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-700">Stock in Hand</div>
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-700">Price</div>
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-700">Quantity</div>
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-700">Total</div>
                                    </div>
                                    {form.watch('products')?.map((product, index) => (
                                        <div key={product?.product_id} className="tw-grid tw-grid-cols-5 tw-gap-3 tw-border-t tw-pt-4">
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.product_id`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <ReactSelect
                                                                options={productsOptions}
                                                                placeholder=""
                                                                value={productsOptions ? productsOptions?.find((option) => option?.value === field?.value) : null}
                                                                isDisabled
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.stock_in_hand`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className="tw-w-full"
                                                                {...field}
                                                                disabled
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.price`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className="tw-w-full"
                                                                {...field}
                                                                disabled
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.quantity`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            {form.watch(`products.${index}.stock_in_hand`) > 0 ? <Input
                                                                className="tw-w-full"
                                                                {...field}
                                                                onChange={e => {
                                                                    const quantity = handleNumberInputChange(e, field);
                                                                    form.setValue(`products.${index}.total`, quantity * form.watch(`products.${index}.price`))
                                                                    const sub_total = form.watch('products')?.reduce((acc, product) => acc + product.price * product.quantity, 0) || 0;
                                                                    form.setValue('sub_total', sub_total);
                                                                    form.setValue('total_due', sub_total - form.watch('discount') - form.watch('advance'));
                                                                    form.trigger(['sub_total', 'total_due', 'discount', 'advance']);
                                                                }}
                                                            /> : <Input
                                                                className="tw-w-full"
                                                                value="Out of Stock"
                                                                disabled
                                                            />}
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`products.${index}.total`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            {<Input
                                                                className="tw-w-full"
                                                                {...field}
                                                                disabled
                                                            />}
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className=" tw-grid tw-grid-cols-5 tw-gap-3 tw-mt-5">
                                <div className="tw-col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="notes"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Notes</FormLabel>
                                                <FormControl>
                                                    <Textarea className="tw-bg-white" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="tw-flex tw-items-center " onClick={() => {
                                    // here we need to find the total quantity of all products and set it to total_firki
                                    const total_firki = form.watch('products')?.reduce((acc, product) => acc + parseInt(product.quantity), 0) || 0;
                                    form.setValue('total_firki', total_firki);
                                    form.trigger(['total_firki']);
                                }}>
                                    <Button variant="" className="tw-bg-indigo-500 hover:tw-bg-indigo-600" type="button">Calculate</Button>
                                </div>
                            </div>
                            <div className="tw-grid tw-grid-cols-5 tw-gap-3 tw-mt-5">
                                <div className="tw-col-span-3">

                                </div>
                                <div className="">
                                    <FormField
                                        control={form.control}
                                        name="total_firki"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Total Firki</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} onChange={(e) => handleNumberInputChange(e, field)} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="">
                                    <FormField
                                        control={form.control}
                                        name="sub_total"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Sub Total</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} disabled />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="tw-grid tw-grid-cols-5 tw-gap-5 tw-mt-5">
                                <div className="tw-col-span-4"></div>
                                <div className="tw-space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="discount"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Discount</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} onChange={
                                                        e => {
                                                            const discount = handleNumberInputChange(e, field);
                                                            form.setValue('total_due', form.watch('sub_total') - discount - form.watch('advance'));
                                                            form.trigger(['total_due', 'sub_total', 'advance', 'discount']);
                                                        }
                                                    } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="advance"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Advance</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} onChange={
                                                        e => {
                                                            const advance = handleNumberInputChange(e, field);
                                                            form.setValue('total_due', form.watch('sub_total') - form.watch('discount') - advance);
                                                            form.trigger(['total_due', 'sub_total', 'advance', 'discount']);
                                                        }
                                                    } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="total_due"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Total Due</FormLabel>
                                                <FormControl>
                                                    <Input className="" {...field} disabled />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="tw-w-full tw-mt-5 tw-flex tw-items-center tw-justify-center tw-col-span-5">
                                <MutationError mutation={createBillMutation} />
                                <Button variant="" className="tw-bg-indigo-500 hover:tw-bg-indigo-600" type="submit">
                                    {formType === "update" ? "Update" : "Create"}{" "}
                                    Bill
                                </Button>
                            </div>
                        </form>{" "}
                    </Form>
                </div>}
        </>
    );
};

export default BillsForm;
