import Logo from "./Logo";

export default function Header() {
    return (
        <div className="w-full h-25 bg-secondary px-25 mx-auto flex items-center justify-between py-1">
            {/* logo */}
            <Logo/>
            {/* menu */}
            <div>
                menu
            </div>
            {/* buttons */}
            <div>
                buttons
            </div>
        </div>
    );
}