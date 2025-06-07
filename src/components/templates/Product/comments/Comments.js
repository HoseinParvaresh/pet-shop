import NoComment from './NoComment'
import CommentHead from './CommentHead'

export default function Comment(Props) {

    return (
        <div className="bg-secondary rounded-2xl p-4.5 sm:p-5">
            <CommentHead />
            {/* <!-- Comment List Container --> */}
            <div className="space-y-4.5 sm:space-y-5">
                {
                    // Props.comment.length > 0 ?
                    // <CommentList comments={Props.comment}/> :
                    <NoComment />
                }

                {/* <!-- Load more Button --> */}
                {/* <button type="button" className="show-more hidden button-xl button-primary w-full sm:w-auto mt-5 mx-auto">
                    مشاهده بیشتر
                    <svg className="show-more__icon w-6 h-6">
                        <use href="#chevron-down"></use>
                    </svg>
                    <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
                        <use href="#refresh"></use>
                    </svg>
                </button> */}
            </div>
        </div>
    )
}
