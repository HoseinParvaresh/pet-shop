import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "@/components/modules/Footer/Footer";
import AuthContext from "@/context/authContext";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <AuthContext.Provider>
      <div className="font-dana">
        <ParallaxProvider>
          <Svg />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ParallaxProvider>
      </div>
    </AuthContext.Provider>
  );
}
