import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn/tabs"
import Transactions from "../Transactions/Transactions";
import OrderSummary from "../OrderSummary/OrderSummary";

export default function DataTables() {
    return (
        <Tabs defaultValue="transactions" className={"bg-white p-6 dir-rtl rounded-lg"}>
            <TabsList>
                <TabsTrigger value="transactions">تراکنش ها</TabsTrigger>
                <TabsTrigger value="orders">سفارشات</TabsTrigger>
            </TabsList>
            <TabsContent value="transactions">
                <Transactions />
            </TabsContent>
            <TabsContent value="orders">
                <OrderSummary />
            </TabsContent>
        </Tabs>
    );
}