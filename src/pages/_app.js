import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    window.addEventListener('scroll',CustomScroll)
  }, [])

    function CustomScroll() {
      const scrollTop = window.scrollY - 100
      const documentHeight = document.body.clientHeight
      const windowHeight = window.innerHeight
  
      const scrollPercent = scrollTop / (documentHeight - windowHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
  
      document.querySelector("#cat-scroll").style.right = (scrollPercentRounded) + '%'
  }
  
  return (
      <div>
        <ParallaxProvider>
          <Svg/>
          <Header/>
          <img id="cat-scroll" className="fixed z-50 -right-20 top-0 w-20 hidden md:block" src="/images/cat-1.png" alt="cat-scroll" />
          {/* <div id="scroll" className="h-1 bg-primary fixed z-50 top-0"></div> */}
          <div className="font-dana">
            <Component {...pageProps} />
          </div>
        </ParallaxProvider>
      </div>
  );
}
