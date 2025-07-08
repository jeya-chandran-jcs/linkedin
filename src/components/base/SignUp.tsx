import {  useState } from "react";
import Input from "../ActionComp/Input";
import LinkedInLogo from "./LinkedInLogo";
import Button from "../ActionComp/Button";
import GoogleLoginButton from "../../utility/GoogleLoginButton";
import googleLogin from "../../utility/googleLogin";
import { useNavigate } from "@tanstack/react-router";
import Or from "../../utility/Or";
import type { MockDataProps } from "../../types/mockDataApi";
import googleRegister from "../../utility/api/googleRegister";
import isUserExist from "../../utility/api/isUserExist";

type SignUpProps = Pick<MockDataProps, "name" | "email" | "password">

export default function SignUp() {
    const [data, setData] = useState<SignUpProps>({ name: "", email: "", password: "" })
    const [exist,setExist]=useState<boolean | null>(null)
    const navigate = useNavigate()
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }


    const handleLogin = async () => {
        console.log("inside login")
        try {
            const user = await googleLogin()
            console.log("regiestered successfully", user)
            navigate({ to: "/home" })
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                console.error("google sign up error", err)
                alert("register failed")
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            const isEMailExist=await isUserExist(data.email)
            setExist(isEMailExist)

            if(isEMailExist)
            {
                console.log(isEMailExist,"exist")
                alert("user already exist")
                return
            }
            e.preventDefault()
            const user = await googleRegister({ name: data.name, email: data.email, password: data.password })
            console.log("user registered succesfully ingoogle", user)
            if(!exist) navigate({ to: "/home" })
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                console.error("error in sign up page manual register err.message", err.message)
                return err.message
            }
            else {
                console.error("error in sign up page manual register err string", err)
                return err
            }
        }
    }
    return (
        <main className="min-h-screen w-full bg-[#f2f1f0ff] ">
            <div className="w-[60%] pt-8  mx-auto  ">
                <div className="w-full flex flex-start"><LinkedInLogo /></div>
            </div>

            <h1 className="text-3xl text-gray-800 font-small text-center">Make the most of your professional life</h1>

            <form className="w-full max-w-sm mx-auto bg-white mt-10 flex flex-col p-6 rounded-md gap-3" onSubmit={handleSubmit}>

                <div>
                    <label className="text-gray-800 font-small">Name</label>
                    <Input value={data.name ?? ""} name={"name"} type={"text"} id={"name"} handleChange={handleChange} placeHolder={"Name"} style={"border border-gray-700 w-full px-3 py-1 text-gray-800 font-small rounded-md mt-1"} />
                </div>

                <div>
                    <label className="text-gray-800 font-small">Email or Phone number</label>
                    <Input value={data.email} name={"email"} type={"text"} id={"email"} handleChange={handleChange} placeHolder={"Email"} style={"border border-gray-700 w-full px-3 py-1 text-gray-800 font-small rounded-md mt-1"} />
                </div>

                <div>
                    <label className="text-gray-800 font-small">Password</label>
                    <Input value={data.password} name={"password"} type={"password"} id={"password"} handleChange={handleChange} placeHolder={"Password 6+ characters"} style={"border border-gray-700 w-full px-3 py-1 text-gray-800 font-small rounded-md mt-1"} />
                </div>

                <div className="mt-2">
                    <p className="text-center text-gray-600 text-xs">By clicking Agree & Join or Continue, you agree to the LinkedIn <span className="text-blue-600">User Agreement</span>, <span className="text-blue-600">Privacy Policy</span>, and <span className="text-blue-600">Cookie Policy</span>.</p>
                </div>

                <Button type={"submit"} text={"Agree & join"} style={"bg-blue-700 mt-2 rounded-3xl text-white font-medium py-3 px-3 hover:bg-blue-900"} />

                {exist && <p className="text-red-500">User already exist with email please use anotherone</p>}

                <Or />

                <GoogleLoginButton handleLogin={handleLogin} />

                <p className="text-gray-800 text-center my-2">Already on Linkedin? <a className="text-blue-600 hover:underline" href="/login">Sign in</a></p>
            </form>

            <p className="text-center mt-4 text-sm">Looking to create a page for a business? <span className="text-blue-700">Get help</span></p>

        </main>
    )
}
