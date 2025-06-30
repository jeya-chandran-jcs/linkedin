import Button from "../components/ActionComp/Button";
import type { GoogleLoginButtonIconProps } from "../types/action";


export default function GoogleLoginButton({handleLogin}:GoogleLoginButtonIconProps) {


  return (

    <Button style={"w-full border border-gray-400 rounded-3xl flex justify-center shadow-md mt-2 hover:bg-gray-100 px-4 py-3 text-gray-800 text-sm font-medium gap-4 items-center"}
        handleSubmit={handleLogin} type={"button"} text={``}>
          <GoogleIcon />  Continue with Google
    </Button>
  )
}

function GoogleIcon(){
    return(
        <img src="assets/google.png" alt="Google" className="w-6 h-5 object-contain" />
    )
}