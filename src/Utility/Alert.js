import toast from "react-hot-toast"

export default function Alert(order, text) {
  return toast.custom(() => (
    <div
      className={`bg-white border-b-3 ${order === 'error' ? 'border-red-500' : 'border-green-500'} shadow-lg flex overflow-hidden`}>
      {/* icon & text */}
      <div className="flex items-start px-3 py-2">
        {/* icon */}
        <div className="flex-shrink-0 pt-0.5 pl-3">
          <svg className={`size-9 ${order === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            <use href={`${order === 'error' ? '#x-circle' : '#check-circle'}`}></use>
          </svg>
        </div>
        {/* text */}
        <div className="ml-3 flex-1">
          <p className="text-sm font-danaBold text-gray-900">
            {order === 'error' ? 'خطا' : 'موفق'}
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