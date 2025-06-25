export default function TextInput({label,placeholder}) {
    return (
        <div>
            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3">{label}</label>
            <input type="text" placeholder={placeholder} className="w-full h-13 placeholder:text-slate-500 text-gray-900 bg-white text-sm py-3.5 pr-3.5 pl-13 rounded outline-none" required="" />
        </div>
    );
}