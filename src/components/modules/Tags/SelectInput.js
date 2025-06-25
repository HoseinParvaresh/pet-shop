export default function SelectInput({label,placeholder,selectItems}) {
    return (
        <div>
            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> {label}  </label>
            <select name="category" required="" className="w-full h-13 text-slate-500 bg-white text-sm p-3.5 border-l-[14px] border-l-transparent rounded outline-none">
                <option value={false}> {placeholder} </option>
                {
                    selectItems.map((item) => (
                        <option key={item.id} value={item.value}>{item.value}</option>
                    ))
                }
            </select>
        </div>
    );
}