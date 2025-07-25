import Link from "next/link";
import * as motion from "motion/react-client"
import AuthContext from "@/context/authContext";
import { useContext } from "react";

export default function HeaderButtons() {

  const authContext = useContext(AuthContext)

  return (
    <div className="flex items-center justify-between gap-4">
      {/* search button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="hidden lg:inline"
      >
        <Link href="/">
          <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary">
            <use href="#magnifying-glass-circle"></use>
          </svg>
        </Link>
      </motion.div>
      {/* basket button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href="/">
          <svg className="size-7 cursor-pointer text-white lg:text-dark-primary">
            <use href="#shopping-bag"></use>
          </svg>
        </Link>
      </motion.div>
      {/* user button */}
      <div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        {
          authContext.isLoggedIn ? (
            <Link href="/user-dashboard">
              <svg className="size-7.5 cursor-pointer text-white lg:text-dark-primary">
                <use href="#user-circle"></use>
              </svg>
            </Link>
          ) : (
            <Link href={"/auth"} className="flex-center gap-2 btn btn-primary btn-xs py-1.5 px-2.5 2xs:px-2">
              <span className="text-xs 2xs:text-sm">ورود | ثبت نام</span>
              <svg className="size-7.5 cursor-pointer text-white hidden 2xs:block">
                <use href="#arrow-left-end-on-rectangle"></use>
              </svg>
            </Link>
          )
        }
      </div>
    </div>
  );
}
