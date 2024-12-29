/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { getAnalytics } from "@/services/analytics";
import { useQuery } from "@tanstack/react-query"
import { useLocalStorage } from "@uidotdev/usehooks"
import { DollarSign, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Analytics = () => {
    const [activeCollection] = useLocalStorage("activeCollection");
    const { data: analytics, isLoading, error } = useQuery({
        queryKey: ["analytics", activeCollection],
        queryFn: async () => {
            const response = await getAnalytics({ collection_id: activeCollection });
            return response.data;
        }
    });
    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);
    return (
        <main className="tw-container tw-mx-auto tw-px-6 tw-py-8">
            {/* <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-6">Dashboard Overview</h1> */}

            {/* Metrics Overview */}
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
                <MetricCard title="Total Investment" value={analytics?.totalPurchaseAmount} icon={<DollarSign size={24} />} trend="up" percentage="5.3%" />
                <MetricCard title="Retail Sales" value={analytics?.totalRetailSalesAmount} icon={<ShoppingBag size={24} />} trend="down" percentage="2.1%" />
                <MetricCard title="Wholesale Sales" value={analytics?.totalWholesaleSalesAmount} icon={<Package size={24} />} trend="up" percentage="7.8%" />
                <MetricCard title="Total Profit" value={(analytics?.totalRetailSalesAmount + analytics?.totalWholesaleSalesAmount) - analytics?.totalPurchaseAmount} icon={<TrendingUp size={24} />} trend="up" percentage="3.2%" />
            </div>
        </main>
    )
}

function MetricCard({ title, value = 0, icon, trend, percentage }) {
    const animatedValue = useCountUp(value);

    return (
        <Card className="tw-transition-all tw-duration-300 tw-ease-in-out tw-transform hover:tw-scale-105 hover:tw-shadow-lg tw-border">
            <CardContent className="tw-flex tw-items-center tw-p-6">
                <div className="tw-mr-4 tw-rounded-full tw-p-3 tw-bg-indigo-100 tw-text-indigo-600 tw-transition-all tw-duration-300 tw-ease-in-out tw-transform group-hover:tw-scale-110">
                    {icon}
                </div>
                <div>
                    <p className="tw-text-sm tw-font-medium tw-text-gray-500">{title}</p>
                    <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900">
                        ₹{animatedValue?.toLocaleString()}
                    </h3>
                    <p className={`tw-text-sm ${trend === 'up' ? 'tw-text-green-600' : 'tw-text-red-600'}`}>
                        {trend === 'up' ? '↑' : '↓'} {percentage}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

function useCountUp(end, duration = 500) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [end, duration]);

    return count;
}

export default Analytics