import { API } from "../../global";
import type { MockDataProps } from "../../types/mockDataApi";
import getData from "./getData";


export default async function isUserExist(email:string | null) {
    const user=await getData({API,message:"GET"})

    const isExist=user.find((userName:MockDataProps)=>userName.email===email)

    if(isExist)
        return true
    else 
        return false
}
