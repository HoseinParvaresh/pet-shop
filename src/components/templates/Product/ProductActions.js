import { GoHeart } from "react-icons/go";
import { GoGitCompare } from "react-icons/go";

export default function ProductActions() {
    return (
        <div className='flex gap-4 items-center'>
            <a href="#" className='border border-gray-300 p-1 rounded-md'>
                <GoGitCompare className='size-5' />
            </a>
            <a href="#" className='border border-gray-300 p-1 rounded-md'>
                <GoHeart className='size-5' />
            </a>
            <a href="#" className='border border-gray-300 p-1 rounded-md'>
                <svg className="size-5">
                    <use href="#share"></use>
                </svg>
            </a>
        </div>
    );
}