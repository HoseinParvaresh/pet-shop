
import { useState } from "react";
export default function ContactForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        console.log("message");
    }
    return (
        <div className="bg-gray-200 rounded-xl p-8 md:p-12.5">
            <p className="text-2xl md:text-3xl text-primary font-danaBold mb-12">نظر خود را ارسال کنید</p>
            <form action="#" className="space-y-4">
                <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="نام" className="text_input" required="" />
                <input name="name" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="ایمیل" className="text_input" required="" />
                <textarea className="textarea_input" value={message} onChange={e => setMessage(e.target.value)} placeholder="پیام" id="text" name="text" required=""></textarea>
                <button className="btn btn-primary w-full" onClick={sendMessage}> ارسال پیام </button>
            </form>
        </div>
    );
}