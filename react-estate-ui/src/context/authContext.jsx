import { createContext, useEffect, useState } from "react"
export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('userinfo')||null 
    ))

    const updateUser =(data)=>{
        setCurrentUser(data);
    }


    useEffect( function updateLocalStorage(){
        localStorage.setItem('userinfo', JSON.stringify(currentUser))
    },[currentUser])
    return(
        <AuthContext.Provider value={{currentUser,updateUser}} >
            {children}
        </AuthContext.Provider>
    )
}