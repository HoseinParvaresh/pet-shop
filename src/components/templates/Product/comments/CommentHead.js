import { useState } from 'react'

export default function CommentHead() {

    const [commentForm, setCommentForm] = useState('hidden')

    const newComment = () => {
        commentForm === 'hidden' ?
            setCommentForm('') :
            setCommentForm('hidden')
    }

    return (
        <>
            {/*  Comment Head */}
            <div className="flex items-center justify-between mb-6 sm:mb-7">
                <div className="flex items-center gap-x-3 relative">
                    <svg className="inline-block text-amber-400 w-7 h-7 md:w-9 md:h-9">
                        <use href="#chat-bubble-left-right-fill"></use>
                    </svg>
                    <div className="font-MorabbaBold text-xl md:text-2xl">نظرات</div>
                </div>
                {/* New Comment Button */}
                <button className="btn btn-primary btn-xs 3xs:px-4 3xs:py-2.5 3xs:text-sm" onClick={newComment} type="button">
                    ایجاد نظر جدید
                    <svg className="size-5">
                        <use href="#chat-bubble-bottom-center-text"></use>
                    </svg>
                </button>
            </div>
            {/*  Comment Form  */}
            <div className={`mb-10 ${commentForm}`}>
                <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
                    <div className="flex-center p-1.5 border border-gray-100 rounded-full">
                        <div className="flex-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 rounded-full">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500">
                                <use href="#user-mini"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>mmmd</span>
                        <span className="text-sm opacity-70">ثبت نظر جدید</span>
                    </div>
                </div>
                <textarea rows="6" className="w-full outline-none block p-4.5 md:p-4 bg-gray-100 text-gray-900 placeholder:text-slate-500/70 text-sm rounded-xl" placeholder="نظر خود را بنویسید ..."></textarea>
                <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
                    <button onClick={newComment} className="flex-grow sm:grow-0 sm:w-36 btn btn-outline btn-sm">لغو</button>
                    <button className="flex-grow sm:grow-0 sm:w-36 btn btn-primary btn-sm">ارسال</button>
                </div>
            </div>
        </>
    )
}
