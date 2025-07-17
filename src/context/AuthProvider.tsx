import { onAuthStateChanged, signOut, type User } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../config/google"
import { AuthContext } from "./AuthContext"
import { useQuery } from "@tanstack/react-query"
import getData from "../utility/api/getData"
import { API } from "../global"
import type { MockDataProps } from "../types/mockDataApi"

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [apiUid, setApiUid] = useState<string | null>(null)
    console.log("auth provider running")

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
        })

        return () => unSubscribe()
    }, [])

    const logOut = () => signOut(auth)

    const { data } = useQuery({
        queryKey: ["context api"],
        queryFn: () => getData({ API, message: "GET" })
    })

    useEffect(() => {
         if (!data) return
        if (data && user) {
            const loggedInUser = data.find((owner: MockDataProps) => owner.uid === user?.uid);
            setApiUid(loggedInUser?.id || null);
        }
        console.log("auth useeffect running")
    },[data,user])
   

    

    return (
        <AuthContext.Provider value={{ user, logOut, apiUid }}>
            {children}
        </AuthContext.Provider>
    )
}