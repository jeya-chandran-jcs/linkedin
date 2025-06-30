import type { MockDataProps } from "../../types/mockDataApi";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../../config/google";


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

        console.log("registered user",user)
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
