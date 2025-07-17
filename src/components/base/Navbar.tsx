import { signOut } from "firebase/auth";
import LinkedInLogo from "./LinkedInLogo";
import { auth } from "../../config/google";
import { Link, useNavigate } from "@tanstack/react-router";
import MuiButton from "../ActionComp/MuiButton";

export default function Navbar() {
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try{
        const result =await signOut(auth)
        console.log("logout result",result)
        localStorage.removeItem("user")
      
      navigate({to:"/login"})
    }
    catch(err:unknown)
    {
      if(err instanceof Error)
      {
        console.error("error while loglout",err)
      }
    }
  }

  return (
    <div className="w-full px-4 py-2 bg-white flex justify-around">
        <LinkedInLogo />
        <Link to="/home"><MuiButton type={"button"} variant={"outlined"} size={"small"} sx={{border:"none",fontSize:"1.6rem"}}><i className="fa-solid fa-house"></i></MuiButton></Link>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold" onClick={handleLogout}>{auth ? "logout" : "login"}</button>
    </div>
  )
}
