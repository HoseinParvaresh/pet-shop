import SidebarTitle from "./SidebarTitle"

export default function ToggleBox(Props) {
  return (
    <div className='flex space-y-6 flex-col items-center w-full'>
      <SidebarTitle title="فیلتر محصولات" />
      <div className="bg-secondary rounded-xl p-5 text-dark-primary w-full space-y-10">
        {
          Props.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <span className="font-danaBold"> {item.title} </span>
              <label className="toggle">
                <input className="toggle__input" type="checkbox" name={item.inputName} value="yes" />
                <span className="toggle__marker"></span>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  )
}