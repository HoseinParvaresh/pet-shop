export default function ShowMoreButton() {
    return (
        <button type="button" className="show-more btn btn-xl btn-primary w-full sm:w-auto mt-10 mx-auto">
            مشاهده بیشتر
            <svg className="show-more__icon w-6 h-6">
                <use href="#chevron-down"></use>
            </svg>
            <svg className="show-more__loading hidden w-6 h-6 animate-spin animate-reverse">
                <use href="#refresh"></use>
            </svg>
        </button>
    );
}