import DashboardSectionHeader from "@/components/modules/Dashboard/DashboardSectionHeader";
import TopProductItem from "./TopProductItem";
export default function TopProductsList() {


    const chartDataVisit = [
        { "فروش": 15000 },
        { "فروش": 25000 },
        { "فروش": 20000 },
        { "فروش": 30000 },
        { "فروش": 45000 },
        { "فروش": 32000 },
    ]

    const Products = [
        {id:1,title:"ظرف غذای حیوانات",price:168000,image:"/images/p-1.png",sale:345,data:chartDataVisit},
        {id:2,title:"ظرف غذای حیوانات",price:168000,image:"/images/p-1.png",sale:345,data:chartDataVisit},
        {id:3,title:"ظرف غذای حیوانات",price:168000,image:"/images/p-1.png",sale:345,data:chartDataVisit},
    ]

    return (
        <div className="flex flex-col gap-6 p-4 w-full rounded-lg bg-white max-h-122 overflow-y-scroll">
            <DashboardSectionHeader title={"پرفروش محصولات"} subtitle={" در 30 روز گذشته"} />
            <div className="flex flex-col gap-4">
                {
                    Products.map((product) => (
                        <TopProductItem key={product.id} {...product}/>
                    ))
                }

            </div>
        </div>
    );
}