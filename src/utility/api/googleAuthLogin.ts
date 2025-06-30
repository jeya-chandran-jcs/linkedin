import type { MockDataProps } from "../../types/mockDataApi"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/google"

type SignInProps=Pick<MockDataProps , "email" | "password">

export default async function googleAuthLogin({email,password}:SignInProps) {
    try{
        const userCredentidal=await signInWithEmailAndPassword(auth,email,password)
        const user=userCredentidal.user

        const token=await user.getIdToken()

        console.log("login successfully",user)

        localStorage.setItem("user",JSON.stringify({
            name:user.displayName,
            email:user.email,
            token:token,
            uid:user.uid
        }))

        return user
    }
    catch(err:unknown)
    {
        if(err instanceof Error)
        {
            console.error("error while login manual checking user with email and password",err.message)
            return err.message
        }
        else
        {
            console.error("error while login manual checking user with email and password string",err)
            return err
        }
    }

}
