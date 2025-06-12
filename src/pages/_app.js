import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import { Toaster } from "react-hot-toast";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "@/components/modules/Footer/Footer";
import Image from "next/image";
import { customScroll } from "@/Utility/UtilityFunction";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    // window.addEventListener('scroll',() => {
    //   customScroll("#cat-scroll")
    // })
  }, [])

  return (
    <div className="font-dana">
      <div>
        <Toaster
          position="top-right" />
      </div>
      <ParallaxProvider>
        <Svg />
        <Header />
        {/* <Image width={160} height={10} id="cat-scroll" className="fixed z-50 -right-50 top-0 hidden xl:block" src="/images/cat-2.png" alt="cat-scroll"/> */}
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}
