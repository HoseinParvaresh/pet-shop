import { BiSolidCommentX } from "react-icons/bi";

export default function NoComment() {
    return (
        <div>
            <div className="w-full flex-center flex-col p-5 rounded-xl bg-white">
                <BiSolidCommentX className="size-15 text-primary"/>
                <p className='text-dark-primary'> هنوز هیچ نظری ثبت نشده </p>
            </div>
        </div>
    )
}
