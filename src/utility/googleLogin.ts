import {  signInWithPopup } from "firebase/auth";
import {auth} from "../config/google"
import { GoogleAuthProvider } from "firebase/auth";
import isUserExist from "./api/isUserExist";
import postData from "./api/postData";
import { API } from "../global";


export default async function googleLogin() {
    const providers=new GoogleAuthProvider()

    providers.setCustomParameters({
        prompt:"select_account"
    })



    try{
       
        const result= await signInWithPopup(auth,providers)
        const user=result.user
        const token =await user.getIdToken()

        console.log("user",user)
       console.log("token>>>>>>>>",token)
        localStorage.setItem("user",JSON.stringify({
            uid:user.uid,
            name:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
            token:token
        }))
        const isEmailExist=await isUserExist(user.email)
        if(!isEmailExist)
        {
            const registerApi={
                uid:user.uid,
                name:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }
            const postDataINMock=await postData({API,method:"POST",data:registerApi})
            console.log("user register in mock api login with google pop up",postDataINMock)
          
            const newUser=await isUserExist(user.email)
            if(newUser ) return newUser.id
            else return user
        }
        // else if(isEmailExist)
        // {

        // }
        return isEmailExist
    }
   catch (err: unknown) {
    if (err instanceof Error) {
        console.error("Google Sign-in Error:", err.message);
        throw err;
    } else {
        console.error("Unknown error during Google Sign-in:", err);
        throw err;
    }
}

}
