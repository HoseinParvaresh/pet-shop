import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Footer from "@/components/modules/Footer/Footer";
import AuthContext from "@/context/authContext";
import apiRequests from "@/Services/Axios/Configs/Configs";
import { useCallback } from "react";
import AuthProvider from "@/context/authContext";
export default function App({ Component, pageProps, router }) {



  const noLayoutRoutes = ['/user-dashboard','/admin-dashboard']
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
      </div>
    </AuthProvider>
  );
}
