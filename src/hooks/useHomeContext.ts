import { createContext,useContext } from "react";
import type { MockDataProps } from "../types/mockDataApi";

export const UserHomeContext=createContext<MockDataProps[] | null>(null)

export const useUserHomeContext=()=>{
    const context=useContext(UserHomeContext)
    if(!context) throw new Error("useHomeContext must be used within UserHomeProvider")

    return context
}