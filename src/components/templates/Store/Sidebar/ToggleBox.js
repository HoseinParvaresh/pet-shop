export default function ToggleBox(Props) {
  return (
    <div className='hidden md:block space-y-6'>
      {
        Props.items.map((item) => (
          <div key={item.id} className="h-17 bg-white rounded-xl p-5">
            <div className="flex items-center justify-between">
              <span className="font-danaBold"> {item.title} </span>
              <label className="toggle">
                <input className="toggle__input" type="checkbox" name={item.inputName} value="yes" />
                <span className="toggle__marker"></span>
              </label>
            </div>
          </div>
        ))
      }
    </div>
  )
}