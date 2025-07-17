import { createContext } from "react";
import { type User } from "firebase/auth";

export const AuthContext=createContext<{user:User | null, logOut: ()=>Promise<void> ,apiUid:string | null}>({
    user:null,
    logOut:async ()=>{},
    apiUid:null
})



 