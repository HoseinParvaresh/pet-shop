import { createContext, useEffect, useState, useCallback,useContext } from "react";
import apiRequests from "@/Services/Axios/Configs/Configs";


export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userInfos: null,
    login: () => { },
    logout: () => { }
})
export default function AuthProvider({ children }) {

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
        const localStorageData = JSON.parse(localStorage.getItem("user"))
        if (localStorageData) {
            apiRequests.get("/users/profile/", {
                headers: {
                    Authorization: `Bearer ${localStorageData.token}`
                }
            }).then(res => {
                setToken(localStorageData.token)
                setIsLoggedIn(true)
                setUserInfos(res.data.data)
            }).catch(res => {
                console.log(res);
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
            {children}
        </AuthContext.Provider>
    );
}