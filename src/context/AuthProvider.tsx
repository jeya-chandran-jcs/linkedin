import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../config/google"
import { AuthContext } from "./AuthContext"

export function AuthProvider({children}:{children:React.ReactNode}){
    const [user,setUser]=useState<User | null>(null)
    console.log("auth provider running")
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(firebaseUser)=>{
            setUser(firebaseUser)
        })

        return ()=>unSubscribe()
    },[])

    const logOut=()=>signOut(auth)

    return(
        <AuthContext.Provider value={{user,logOut}}>
        {children}
        </AuthContext.Provider>
    )
}