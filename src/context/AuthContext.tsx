import { createContext } from "react";
import { type User } from "firebase/auth";

export const AuthContext=createContext<{user:User | null, logOut: ()=>Promise<void> }>({
    user:null,
    logOut:async ()=>{}
})

console.log("auth context running")


 