import { useNavigate } from "@tanstack/react-router"
import Button from "../components/ActionComp/Button"

export default function NotFound() {
    const navigate=useNavigate()
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <p>404 this page is under development please visit other pages</p>
        <Button style={"px-4 py-2 rounded-md bg-blue-600 text-white font-bold"} text={"home"} handleSubmit={()=>navigate({to:"/home"})} type={"button"}/>
    </div>
  )
}
