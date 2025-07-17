import { Box, Typography } from '@mui/material'
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
import { useParams } from '@tanstack/react-router';
import { UserProfileContext} from '../../hooks/UserProfileContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';


export default function ProfileContent() {
  const { id } = useParams({ from: "/user-profile/$id" })

  const { data, error, isLoading } = useQuery({
    queryKey: ['single users'],
    queryFn: () => getData({ API: `${API}/${id}`, message: 'GET' }),
  });
  
  const auth=useSelector((state:RootState)=>state.store.auth)

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading profile data</Typography>;
  if (!data) return <Typography>User not found</Typography>;
  
  return (
    <UserProfileContext.Provider value={data}>
      <Box
        sx={{
          maxWidth:auth ? "800px" : "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexGrow: 1,
          // marginY:"1rem"
        }}
      >
        <ProfileUser auth={auth}/>
        <About auth={auth}/>
        <ProfileAdd />
        <Education  auth={auth}/>
        <Experience />
        <Skills />
        <Projects />
        <License_Certification />
        <Languages />
      </Box>
    </UserProfileContext.Provider>

  )
}
