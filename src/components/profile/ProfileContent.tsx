import {Box} from '@mui/material'

import ProfileUser from './ProfileUser';
import ProfileAdd from './ProfileAdd';
import Languages from './Languages';
import Skills from './Skills';
import Projects from './Projects';
import License_Certification from './License_Certification';
import Experience from './Experience';
import Education from './Education';
import About from './About';


export default function ProfileContent() {
  
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
  <ProfileAdd />
  <Languages />
  <Skills />
  <Projects />
  <License_Certification />
  <Experience />
  <Education />
  <About />
</Box>
  )
}
