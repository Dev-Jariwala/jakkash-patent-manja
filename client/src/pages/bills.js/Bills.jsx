import BreadCrum from "@/components/breadcrum/BreadCrum";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import BillsTable from "./components/BillsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bills = () => {
    const navigate = useNavigate();
    const { billType } = useParams();

    const handleTabChange = (tab) => {
        navigate(`/bills/${tab}`);
    }
    return (
        <div className="">
            <div className="tw-flex tw-items-center tw-justify-between tw-px-5 tw-border-b tw-border-gray-200 tw-py-3 tw-mb-3">
                <div className="tw-text-xl tw-text-gray-700 tw-font-semibold">
                    <BreadCrum
                        path={[
                            { path: "/", label: "Dashboard" },
                            { path: "/bills", label: "Bills" },
                        ]}
                    />
                </div>
                <Button
                    variant="indigo"
                    size="sm"
                    onClick={() => navigate(`/bills/new?bill_type=${billType}`)}
                >
                    <Plus className="tw-size-4" />
                    <div className="">New {billType} bill</div>
                </Button>
            </div>
            <Tabs value={billType} onValueChange={handleTabChange}>
                <TabsList className='tw-w-1/2 tw-gap-2 tw-border-b tw-pb-0 tw-border-gray-300'>
                    <TabsTrigger className='tw-border-b-2 tw-w-1/2 tw-border-transparent data-[state=active]:tw-rounded-none data-[state=active]:tw-border-b-indigo-500' variant='sliding' value="retail">Retail Bills</TabsTrigger>
                    <TabsTrigger className='tw-border-b-2 tw-w-1/2 tw-border-transparent data-[state=active]:tw-rounded-none data-[state=active]:tw-border-b-indigo-500' variant='sliding' value="wholesale">Wholesale Bills</TabsTrigger>
                </TabsList>
                <TabsContent value={billType} >
                    <BillsTable />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Bills;
