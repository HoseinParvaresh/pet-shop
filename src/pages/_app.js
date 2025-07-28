import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "@/components/modules/Footer/Footer";
import AuthProvider from "@/context/authContext";
export default function App({ Component, pageProps, router }) {

  const noLayoutRoutes = ['/user-dashboard', '/admin-dashboard']
  const isNoLayout = noLayoutRoutes.includes(router.pathname)

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  return (
    <AuthProvider>
      <div className="font-dana">
        <Svg />
        {!isNoLayout && <Header />}
        <Component {...pageProps} />
        {!isNoLayout && <Footer />}
      </div >
    </AuthProvider >
  );
}
