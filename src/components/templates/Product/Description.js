import { useState } from "react"

export default function Description() {

    const [productContent, setProductContent] = useState('max-h-[400px]')
    const [productContentShadow, setProductContentShadow] = useState('')
    const [btnContent, setBtnContent] = useState('مشاهده بیشتر مطلب')
    const [btnRotate, setBtnRotate] = useState('')
    const [showContent, setShowContent] = useState(false)

        const showFullContent = () => {
    
            if (showContent) {
                setProductContent('max-h-[400px]')
                setProductContentShadow('')
                setBtnContent('مشاهده بیشتر مطلب')
                setBtnRotate('')
                setShowContent(false)
            } else {
                setProductContent('max-h-full')
                setProductContentShadow('hidden')
                setBtnContent('مشاهده کمتر مطلب')
                setBtnRotate('rotate-180')
                setShowContent(true)
            }
        }
    return (
        <div className="bg-secondary rounded-2xl p-4.5 sm:p-5 mt-8">
            {/* title */}
            <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                <svg className="inline-block text-amber-400 w-7 h-7 md:w-9 md:h-9">
                    <use href="#document-text-fill"></use>
                </svg>
                <div className="font-MorabbaBold text-xl md:text-2xl">توضیحات</div>
            </div>
            {/* text */}
            <div className="relative overflow-hidden">
                <div className={`${productContent} text-dark-secondary dark:text-gray-300 child:leading-7 child:my-5`}>
                    {/* <Description items={Props.description}/> */}
                    <h2 className='font-danaBold text-dark-primary text-xl my-5'>Lorem ipsum dolor sit amet.</h2>
                    <p  className='leading-7 my-5 text-dark-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio!</p>
                    <p  className='leading-7 my-5 text-dark-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio!</p>
                    <p  className='leading-7 my-5 text-dark-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio!</p>
                   

                </div>
                <div className={`${productContentShadow} absolute bottom-0 right-0 left-0 h-[160px] bg-gradient-to-t from-secondary from-0% via-secondary/[55%] via-70% to-secondary/0 to-100%`}></div>
            </div>
            {/* btn */}
            <button type="button" className="btn btn-primary px-4 w-full sm:w-auto mx-auto mt-5" onClick={showFullContent}>
                <span> {btnContent} </span>
                <svg className={` w-6 h-6`}>
                    <use href="#chevron-down"></use>
                </svg>
            </button>
        </div>
    );
}