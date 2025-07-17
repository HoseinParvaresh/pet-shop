import RecentUserItem from "./RecentUserItem";
import { RecentUsersData } from "@/Utility/Constants";
export default function RecentUsers() {
    return (
        <div className="p-4 bg-white rounded-lg w-full">
            <p className="text-sm font-danaBold mb-3">آخرین کاربران</p>
            <div className=" last:border-none">
                {
                    RecentUsersData.map((data) => (
                        <RecentUserItem key={data.id} {...data} />
                    ))
                }
            </div>
        </div>
    );
}