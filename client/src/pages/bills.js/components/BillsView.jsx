import BillPDF2 from "@/components/bill-pdf/BillPDF2";
import { getBillById } from "@/services/bills";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { toast } from "react-toastify";

const BillsView = () => {
    const [activeCollection] = useLocalStorage("activeCollection");
    const [searchParams, setSearchParams] = useSearchParams();
    const bill_id = searchParams.get("bill_id");
    const { data: bill, error, isLoading } = useQuery({
        queryKey: ["bills", activeCollection, bill_id],
        queryFn: async () => {
            const response = await getBillById({ collection_id: activeCollection, bill_id: bill_id });
            return { ...response.data?.bill, products: response.data?.billItems || [] };
        },
        enabled: !!bill_id && !!activeCollection,
    });
    useEffect(() => {
        if (error) {
            toast.error("Error fetching bill");
        }
    }, [error]);
    console.log({ bill });
    return (
        <div className="">
            <BillPDF2 bill={bill} />
        </div>
    )
}

export default BillsView