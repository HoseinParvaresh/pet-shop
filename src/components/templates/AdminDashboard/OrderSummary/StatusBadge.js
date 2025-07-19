import { MdAccessTime,MdCheckCircleOutline,MdCancel,MdErrorOutline  } from "react-icons/md";
import { FaSpinner,FaTruck } from "react-icons/fa";
import { HiArrowUturnLeft } from "react-icons/hi2";

const statusMap = {
    pending: {
        icon: MdAccessTime,
        color: "#FFC107",
        label: "در انتظار پرداخت",
    },
    processing: {
        icon: FaSpinner,
        color: "#2196F3",
        label: "در حال پردازش",
    },
    shipped: {
        icon: FaTruck,
        color: "#3F51B5",
        label: "ارسال شده",
    },
    delivered: {
        icon: MdCheckCircleOutline,
        color: "#4CAF50",
        label: "تحویل داده شده",
    },
    canceled: {
        icon: MdCancel,
        color: "#9E9E9E",
        label: "لغو شده",
    },
    returned: {
        icon: HiArrowUturnLeft,
        color: "#FF7043",
        label: "مرجوع شده",
    },
    failed: {
        icon: MdErrorOutline,
        color: "#F44336",
        label: "ناموفق",
    },
};

export default function StatusBadge({ status }) {
    const statusInfo = statusMap[status];

    if (!statusInfo) return null;

    const Icon = statusInfo.icon;

    return (
        <div style={{color:statusInfo.color}} className={`flex items-center gap-1`}>
            <Icon className="size-4.5" />
            <span className="font-danaBold">{statusInfo.label}</span>
        </div>
    );
}
