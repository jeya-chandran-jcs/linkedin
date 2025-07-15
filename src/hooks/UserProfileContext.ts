import { createContext, useContext } from "react";
import type { MockDataProps } from "../types/mockDataApi";

export const UserProfileContext=createContext<MockDataProps | null>(null)

export const useUserProfile=()=>{
    const context=useContext(UserProfileContext)
    if(!context)  throw new Error("useUserProfile must be used within UserProfileProvider")

    return context
}