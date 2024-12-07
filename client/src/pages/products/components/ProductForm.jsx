import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Select from "react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BreadCrum from "@/components/breadcrum/BreadCrum";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/authProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProduct,
  getProductById,
  updateProductById,
} from "@/services/products";
import MutationError from "@/components/Errors/MutationError";
import QueryError from "@/components/Errors/QueryError";
const schema = yup.object().shape({
  collection_id: yup.string().required("Collection ID is required"),
  product_name: yup.string().required("Product Name is required"),
  wholesale_price: yup
    .number()
    .required("Wholesale Price is required")
    .positive("Wholesale Price must be positive")
    .typeError("Wholesale Price is required"),
  retail_price: yup
    .number()
    .required("Retail Price is required")
    .positive("Retail Price must be positive")
    .typeError("Retail Price is required"),
  is_labour: yup
    .string()
    .oneOf(["0", "1"], "Select a category")
    .typeError("Select a category"),
});

const ProductForm = () => {
  const { activeCollection } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const formType = location.pathname.split("/")[2];
  const [searchParams] = useSearchParams();
  const product_id = searchParams.get("product_id");
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      collection_id: activeCollection?.value || null,
      product_name: "",
      retail_price: "",
      wholesale_price: "",
      is_labour: 0,
    },
  });
  useEffect(() => {
    form.setValue("collection_id", activeCollection?.value || "");
  }, [activeCollection]);
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", activeCollection, product_id],
    queryFn: async () => {
      const res = await getProductById(product_id);
      return res.data.product;
    },
    enabled: !!product_id && formType === "update",
  });
  useEffect(() => {
    if (product && product?.collection_id === activeCollection?.value) {
      form.reset({
        collection_id: activeCollection?.value || null,
        product_name: product?.product_name,
        retail_price: product?.retail_price,
        wholesale_price: product?.wholesale_price,
        is_labour: product?.is_labour,
      });
    }
  }, [product, product_id]);
  const createProductMutation = useMutation({
    mutationKey: ["products"],
    mutationFn: async (data) => {
      return await createProduct(data);
    },
    onSuccess: () => {
      navigate("/products");
      queryClient.invalidateQueries(["products", activeCollection]);
    },
  });
  const updateProductMutation = useMutation({
    mutationKey: ["products"],
    mutationFn: async (data) => {
      return await updateProductById(data);
    },
    onSuccess: () => {
      navigate("/products");
      queryClient.invalidateQueries(["products", activeCollection]);
    },
  });
  const onSubmit = async (data) => {
    if (formType === "new") {
      createProductMutation.mutate({
        ...data,
        collection_id: activeCollection?.value,
      });
    } else if (formType === "update") {
      updateProductMutation.mutate({
        product_id,
        ...data,
      });
    }
  };
  if (product && product?.collection_id !== activeCollection?.value) {
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
              { path: "/products", label: "Products" },
              {
                path: `/products/${formType}?product_id=${product_id}`,
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
            {activeCollection && (
              <FormField
                control={form.control}
                name="collection_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection</FormLabel>
                    <FormControl>
                      <Select value={field.value} disabled>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Collection" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={activeCollection?.value}>
                            {activeCollection?.label}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wholesale_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wholesale Price</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retail_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retail Price</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_labour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={String(field.value)}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Collection" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Product</SelectItem>
                        <SelectItem value="1">Labour</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="tw-w-full tw-mt-5">
            <MutationError mutation={createProductMutation} />
            {isError && !isLoading && (
              <QueryError className={"tw-mb-5"} error={error} />
            )}
            <Button variant="" className="tw-bg-indigo-500 hover:tw-bg-indigo-600" type="submit">
              {product_id && formType === "update" ? "Update" : "Create"}{" "}
              Product
            </Button>
          </div>
        </form>{" "}
      </Form>
    </div>
  );
};

export default ProductForm;
