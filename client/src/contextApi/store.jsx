import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({children}) =>{



    const [auth,setAuth] = useState({
        user:null
    })

    useEffect(()=>{
        const data = localStorage.getItem("activeUser")
        const parseData = JSON.parse(data)
        setAuth(prev=>({...prev,user:parseData}))
        //eslint-disable-next-line


    },[])

    return <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext)