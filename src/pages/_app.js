import "@/styles/globals.css";
import Header from "@/components/modules/Header/Header";
import Svg from "@/Utility/Svg";
import 'animate.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState,useContext } from "react";
import Footer from "@/components/modules/Footer/Footer";
import AuthContext from "@/context/authContext";
import apiRequests from "@/Services/Axios/Configs/Configs";
import { useCallback } from "react";


export default function App({ Component, pageProps }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState(null)

  const login = useCallback((userInfos, token) => {
    setToken(token)
    setIsLoggedIn(true)
    setUserInfos(userInfos)
    localStorage.setItem('user', JSON.stringify({ token }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"))
    if (localStorageData) {
      apiRequests.get("/users/profile/", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`
        }
      }).then(res => {
        console.log("app.js =>", res);
        setToken(localStorageData.token)
        setIsLoggedIn(true)
        setUserInfos(res.data.data)
      })
    }
  }, [login])

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      token,
      userInfos,
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
