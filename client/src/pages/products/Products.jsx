import ProductsTable from "./components/ProductsTable";
import BreadCrum from "@/components/breadcrum/BreadCrum";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="tw-flex tw-items-center tw-justify-between tw-px-5 tw-border-b tw-border-gray-200 tw-py-3 tw-mb-3">
        <div className="tw-text-xl tw-text-gray-700 tw-font-semibold">
          <BreadCrum
            path={[
              { path: "/", label: "Dashboard" },
              { path: "/products", label: "Products" },
            ]}
          />
        </div>
        <Button
          variant="indigo"
          size="sm"
          onClick={() => navigate("/products/new")}
          // to={"/products/new"}
        >
          <Plus className="tw-size-4" />
          <div className="">New Product</div>
        </Button>
      </div>
      <ProductsTable />
    </div>
  );
};

export default Products;
