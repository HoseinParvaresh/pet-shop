export default function TextareaInput({label,placeholder}) {
    return (
        <div>
            <label className="inline-block font-danaBold text-sm mb-2 md:mb-3"> {label} </label>
            <textarea className="w-full min-h-30 placeholder:text-slate-500 text-gray-900 bg-white text-sm p-3.5 outline-none rounded" placeholder={placeholder} id="text" name="text" required=""></textarea>
        </div>
    );
}