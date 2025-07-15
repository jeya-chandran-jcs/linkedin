import { useNavigate } from "@tanstack/react-router"
import googleLogin from "../../utility/googleLogin"
import GoogleLoginButton from "../../utility/GoogleLoginButton"
import Button from "../ActionComp/Button"

export default function Login() {
    const navigate=useNavigate()
    const handleLogin=async()=>{
        try{
            const loginResponse=await googleLogin()
            if(loginResponse) navigate({to:`/user-profile/${loginResponse}`})
        }
        catch(err)
        {
            console.error("google sign in error",err)
            alert("login failed")
        }
    }

    return (
        <main className="min-h-screen w-full flex justify-between items-center">

            {/* left side */}
            <section className="w-1/4 flex flex-col gap-4 items-center mx-auto">
                <h1 className="text-5xl text-gray-500 font-medium text-start w-full">Welcome to your</h1>
                <h1 className="text-5xl text-gray-500 font-medium text-start text-nowrap w-full">Professional Network</h1>

                <GoogleLoginButton handleLogin={handleLogin}/>

                <Button style={"w-full border border-gray-400 rounded-3xl flex justify-center shadow-md mt-2 hover:bg-gray-100 px-4 py-2 text-gray-600 font-medium gap-4 items-center"}
                    text={"Sign in with"} type={"button"} handleSubmit={()=>navigate({to:"/sign-in-email"})} children={<img src="assets/gmail.png" alt="Gmail" className="w-8 h-6 object-contain" />}/>

                <p className="text-sm text-gray-600 text-center mt-2">
                    By clicking Continue to join or sign in, you agree to LinkedIn’s <span className="text-blue-600">User Agreement, Privacy Policy,</span> and <span className="text-blue-600">Cookie Policy.</span>
                </p>

                <p className="text-gray-800 text-lg font-small mt-2">New to LinkedIn, <a className="text-blue-600 hover:underline" href="/sign-up">Join Now</a></p>
            </section>

            {/* right side */}
            <aside className="w-2/4 flex justify-center items-center">
                <img src="/assets/loginr.svg" className="w-[80%] h-auto object-contain" alt="icon" />
            </aside>
        </main>
    )
}
