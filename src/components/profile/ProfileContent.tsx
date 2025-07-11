import {Box} from '@mui/material'

import ProfileUser from './profileList/ProfileUser';
import ProfileAdd from './profileList/ProfileAdd';
import Languages from './profileList/Languages';
import Skills from './profileList/Skills';
import Projects from './profileList/Projects';
import License_Certification from './profileList/License_Certification';
import Experience from './profileList/Experience';
import Education from './profileList/Education';
import About from './profileList/About';
import { useQuery } from '@tanstack/react-query';
import getData from '../../utility/api/getData';
import { API } from '../../global';
import getCurrentUserId from '../../utility/getCurrentUserId';


export default function ProfileContent() {
  
  const {data}=useQuery({
    queryKey:["all users"],
    queryFn:()=>getData({API,message:"GET"})
  })
  if(!data) return
  console.log("sef")
  const user=getCurrentUserId(data)
  console.log(user)

  
  return (
   <Box
  sx={{
    maxWidth: "800px", 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flexGrow: 1,
    // marginY:"1rem"
  }}
>
  <ProfileUser />
  <About />
  <ProfileAdd />
  <Education />
  <Experience />
  <Skills />
   <Projects />
   <License_Certification />
  <Languages />
</Box>
  )
}
