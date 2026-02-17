import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user,setUser] = useState(()=>{
        return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    });

    const login =(userData) =>{
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData))
    }
    const logOut = () =>{
        setUser(null);
        localStorage.removeItem("user");
    }
    return(
        <AuthContext.Provider value={{user,logOut,login}}>{children}</AuthContext.Provider>
    )
}