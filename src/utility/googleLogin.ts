import {  signInWithPopup } from "firebase/auth";
import {auth} from "../config/google"
import { GoogleAuthProvider } from "firebase/auth";


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
        return user
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
