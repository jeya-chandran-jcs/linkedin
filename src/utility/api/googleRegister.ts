import type { MockDataProps } from "../../types/mockDataApi";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../../config/google";
import postData from "./postData";
import { API } from "../../global";


type RegisterProps=Pick<MockDataProps ,"name"| "email" | "password">

export default async function googleRegister({name,email,password}:RegisterProps) {

    try{
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        
        if(auth.currentUser)
        {
            await updateProfile(auth.currentUser,{
                displayName:name
            })
        }

        const user=userCredential.user

        console.log("registered user successful from google register utility",user)

        const registerAPI={
            uid:user.uid,
            name:name,
            email:email,
            password:password

        }
        const postDataINMock=await postData({API,method:"POST",data:registerAPI})
        console.log("data posted in google register with " , postDataINMock)
        
        const token=await user.getIdToken()
        return {
           uid: user.uid,
            name:user.displayName,
            email:user.email,
            token
        }
    }    
    catch(err:unknown)
    {
        if(err instanceof Error)
        {
            console.error("error while manual regiter",err.message)
            return err.message
        }
        else{
            console.error("error while manual register string",err)
            return err
        }
    } 
}
