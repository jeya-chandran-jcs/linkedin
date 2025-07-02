import { Box, Stack, Typography } from "@mui/material";
import ExperienceLogo from "../../utility/ExperienceLogo";


export default function Experience() {
  return (
    <Box sx={{
          borderRadius: "8px",
          width:"100%",
          border:"1px solid #D3D3D3",    
          position:'relative',
          overflow:"clip",
          padding:'1rem',
          display:"flex",
          flexDirection:"column",
          gap:"1.3rem",
                    backgroundColor:"white"
    }}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography variant="h6" component="h6" sx={{fontWeight:"600",fontSize:"1.1rem",color:"#212121"}}>Experience</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
                <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
                <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
            </Box> 
        </Box>


         <Box sx={{display:"flex",alignItems:"start", gap:"1rem",}}>
            <ExperienceLogo height={50} width={55}/>
            <Stack spacing={0}>
                
                    <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.2rem"}}>Zen Class Full Stack Developer Program</Typography>
                    <Typography variant="body2" component="p" >HCL Guvi</Typography>
               
                    <Typography variant="body1" component="h6" color="text.secondary">Issued Jan 2024</Typography>
                    <Typography variant="body2" component="p" color="text.secondary">Credential ID #1hswe23l324frfe</Typography>
               
         </Stack>
         </Box>
    </Box>
  )
}
