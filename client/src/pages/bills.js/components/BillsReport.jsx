import ExportPDF from "@/components/bill-pdf/ExportPDF";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBillReport } from "@/services/bills";
import { PDFViewer } from "@react-pdf/renderer";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const headers = [
    { label: "Bill No.", key: "bill_no" },
    { label: "Name", key: "name" },
    { label: "Total Firki", key: "total_firki" },
];

const BillsReport = () => {
    const { billType } = useParams();
    const [activeCollection] = useLocalStorage("activeCollection");
    const [fromBillNo, setFromBillNo] = useState("");
    const [toBillNo, setToBillNo] = useState("");
    const [reportData, setReportData] = useState([]);

    const { mutate: fetchReport, isLoading: isReportLoading, error: reportError } = useMutation({
        mutationFn: async () => {
            const res = await getBillReport({
                collection_id: activeCollection,
                bill_type: billType,
                fromBillNo,
                toBillNo
            });
            return res.data?.bills || [];
        },
        onSuccess: (data) => {
            setReportData(data);
        },
        onError: (error) => {
            toast.error(error?.message || "An error occurred while fetching the report.");
        },
    });

    const handleGenerateReport = () => {
        if (!activeCollection || !billType || !fromBillNo || !toBillNo) {
            toast.error("Please provide all required inputs.");
            return;
        }
        fetchReport();
    };

    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-items-center">
            <div className="tw-flex tw-items-center tw-space-x-5 tw-w-[50%] tw-my-5">
                <div className="tw-space-y-2">
                    <Input
                        value={fromBillNo}
                        placeholder="From Bill No"
                        onChange={(e) => setFromBillNo(e.target.value)}
                    />
                </div>
                <div className="tw-space-y-2">
                    <Input
                        value={toBillNo}
                        placeholder="To Bill No"
                        onChange={(e) => setToBillNo(e.target.value)}
                    />
                </div>
                <Button onClick={handleGenerateReport}>
                    {isReportLoading ? "Generating..." : "Generate Report"}
                </Button>
            </div>
            {reportData.length > 0 && (
                <PDFViewer width="100%" height="550">
                    <ExportPDF
                        exportData={reportData}
                        headers={headers}
                        title={`${billType === "retail" ? "Retail" : "Wholesale"} Report`}
                    />
                </PDFViewer>
            )}
        </div>
    );
};

export default BillsReport;
