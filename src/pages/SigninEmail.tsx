
import { useNavigate } from '@tanstack/react-router'
import LinkedInLogo from '../components/base/LinkedInLogo'
import googleLogin from '../utility/googleLogin'
import GoogleLoginButton from '../utility/GoogleLoginButton'
import Or from '../utility/Or'
import { useMemo, useState } from 'react'
import {TextField} from '@mui/material'
import {Box} from '@mui/material'
import MuiButton from '../components/ActionComp/MuiButton'
import type { MockDataProps } from '../types/mockDataApi'
import googleAuthLogin from '../utility/api/googleAuthLogin'
import { FirebaseError } from 'firebase/app'

type SignInProps=Pick<MockDataProps , "email" | "password">


export default function SigninEmail() {
    const [data,setData]=useState<SignInProps>({email:"",password:""})
    const navigate=useNavigate()
    
    const handleLogin=async()=>{
        try{    
            await googleLogin()
            navigate({to:"/home"})
        }
        catch(err)
        {
           if (err instanceof FirebaseError) {
             if ((err.code) === "auth/popup-closed-by-user") {
            alert("You closed the sign-in popup before completing login.");
           } else {
            console.error("error while login with email and Pass", err);
            alert("Login failed: " + err.message);
    }
  }
        }
    }
    console.log("sign in email running")

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
      
        const {name,value}=e.target

        setData((prev)=>({...prev,[name]:value}))
    }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const result = await googleAuthLogin({ email: data.email, password: data.password });
    console.log(result)
    if (result) navigate({ to: "/home" });
    else console.error("error in sign in with only email and p");
  }
  catch (err: unknown) {
    if (err instanceof Error) {
      console.error("error in signin withe mail only", err.message);
      return err.message;
    } else {
      console.error("error in sign in with email onlu ", err);
      return err;
    }
  }
}; 

    const muiButtonSx = useMemo(() => ({
  backgroundColor: "#0a66c2",
  color: "#fff",
  borderRadius: "999px",
  fontWeight: "500",
  textTransform: 'none',
  paddingY: 1.2,
  paddingX: 2,
  fontSize: '1rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#004182',
    boxShadow: 'none'
  }
}), [])

  return (
    <main className='min-h-screen w-full'>
        <div className='w-[90%]  flex justify-start mt-4 mx-auto'>
            <LinkedInLogo />
        </div>

        <div className='  flex flex-col justify-center items-center min-h-[80vh] '>
         
            <form className='border border-gray-100 shadow-xl p-4 w-full max-w-sm flex flex-col gap-3 ' onSubmit={handleSubmit}>            
                <h1 className='text-3xl font-medium text-gray-800'>Sign in</h1>

                <GoogleLoginButton handleLogin={handleLogin} />
                
                <Or />
                
    
     <Box  
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '100%',
          marginX:"auto",
        },
      }}>
      <TextField name="email" label="Email or Phone" variant="standard" value={data.email } onChange={handleChange} fullWidth InputProps={{disableUnderline: true}}
        sx={{
          backgroundColor: 'white',
          px: 1.5,
          py: 0.5, 
          border: '1px solid black',
          borderRadius: '6px',

          // Label default
          '& label': {
            color: '#666',
            fontSize: '1rem',
            transform: 'translate(14px, 14px) scale(1)', // moved closer
            transition: 'all 0.2s ease-in-out',
          },
          // Label when focused or filled
          '& label.Mui-focused, & label.MuiFormLabel-filled': {
            transform: 'translate(14px, 4px) scale(0.75)', // float higher
            color: '#666',
          },

          // Input box
          '& .MuiInputBase-input': {
            padding: '4px 0 2px',
            fontSize: '1rem',
            color: '#333',
          },

          // Focus border color
          '&:focus-within': {
            borderColor: '#0c67c2ff',
            border:"2px solid #0c67c2ff",
            transition:" transition: 'all 0.5s ease-in-out"
          },
        }}
      />
    </Box>

     <Box  
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '100%',
          marginX:"auto",
        },
      }}>
      <TextField name="password" label="Password" variant="standard" value={data.password} onChange={handleChange}  fullWidth InputProps={{disableUnderline: true}}
        sx={{
          backgroundColor: 'white',
          px: 1.5,
          py: 0.5, 
          border: '1px solid black',
          borderRadius: '6px',

          // Label default
          '& label': {
            color: '#666',
            fontSize: '1rem',
            transform: 'translate(14px, 14px) scale(1)', 
            transition: 'all 0.2s ease-in-out',
          },
          // Label when focused or filled
          '& label.Mui-focused, & label.MuiFormLabel-filled': {
            transform: 'translate(14px, 4px) scale(0.75)', 
            color: '#666',
          },

          // Input box
          '& .MuiInputBase-input': {
            padding: '4px 0 2px',
            fontSize: '1rem',
            color: '#333',
          },

          // Focus border color
          '&:focus-within': {
            borderColor: '#0c67c2ff',
            border:"2px solid #0c67c2ff",
            transition:" transition: 'all 0.5s ease-in-out"
          },
        }}
      />
    </Box>

            <p className='text-blue-700 font-medium'>Forgot Password?</p>        

            {/* <Button variant='contained' type="submit" fullWidth sx={{
                backgroundColor:"#0a66c2",
                color:"#fff",
                borderRadius:"999px",
                fontWeight:"500",
                 textTransform: 'none',             
                paddingY: 1.2,                     
                 paddingX: 2,                      
                fontSize: '1rem',                  
                boxShadow: 'none',                 
                '&:hover': {
                backgroundColor: '#004182',      
                boxShadow: 'none'
            }}}>
            Sign In</Button> */}
           <MuiButton
              variant='contained'
              type="submit"
              fullWidth
              text="Sign In"
              sx={muiButtonSx}
          />
            </form>
            <p className='text-gray-800 mt-6'>New to LinkedIn? <a className='text-blue-600 cursor-pointer' href="/sign-up">Join now</a> </p> 
        </div>
            
    </main>
  )
}


