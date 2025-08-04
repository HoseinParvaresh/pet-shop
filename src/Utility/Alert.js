import toast from "react-hot-toast"
import { HiCheckCircle } from "react-icons/hi2";
import { HiInformationCircle } from "react-icons/hi2";
import { HiXCircle } from "react-icons/hi2";

export default function Alert(order, text) {

  const orderColor = {
    error: 'text-red-500',
    info: 'text-sky-500',
    success: 'text-green-500',
  };
  const orderText = {
    error: 'خطا',
    info: 'اعلان',
    success: 'موفق',
  }
  const orderIcon = {
    error: <HiXCircle/>,
    info: <HiInformationCircle/>,
    success: <HiCheckCircle/>,
  }

  return toast.custom(() => (
    <div
      className={`bg-white border-b-3 ${orderColor[order]} shadow-lg flex overflow-hidden`}>
      {/* icon & text */}
      <div className="flex items-start px-3 py-2">
        {/* icon */}
        <div className="flex-shrink-0 pt-0.5 pl-3">
          <div className={`*:size-9 ${orderColor[order]}`}>
            {orderIcon[order]}
          </div>
        </div>
        {/* text */}
        <div className="ml-3 flex-1">
          <p className="text-sm font-danaBold text-gray-900">
            {orderText[order]}
          </p>
          <p className="mt-1 text-[13px] text-gray-700">
            {text}
          </p>
        </div>
      </div>
    </div>
  ),
    {
      duration: 1500,
      position: 'top-right',
    })
}