import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Footer from "@/components/modules/Footer/Footer";
import AuthContext from "@/context/authContext";

export default function App({ Component, pageProps }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const login = (token) => {
    setToken(token)
    localStorage.setItem('user', JSON.stringify({ token }))
  }
  const logout = () => {
    setToken(null)
    setUserInfo({})
    localStorage.removeItem('user')
  }


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      token,
      userInfo,
      login,
      logout
    }}>
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
