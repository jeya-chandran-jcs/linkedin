import { Box, Divider, Stack, Typography } from "@mui/material";


export default function Projects() {
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
            <Typography variant="h6" component="h6" sx={{fontWeight:"600",fontSize:"1.1rem",color:"#212121"}}>Projects</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
                <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
                <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
            </Box> 
        </Box>

         <Stack spacing={2}>
                <Box display={"flex"} flexDirection={"column"} gap={"0.6rem"}>
                    <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.1rem"}}>Car Care Plus - Car Service App (MERN)</Typography>
                    <Typography variant="body2" component="p" color="text.secondary">Developed a car service application, Car Care Plus, enabling clients to view a comprehensive list of car issues and select required services. Key features include:</Typography>
                </Box>

                <Divider />

                <Box display={"flex"} flexDirection={"column"} gap={"0.6rem"}>
                    <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.1rem"}}>Employee Management System (MERN - TypeScript, Next.js)</Typography>
                    <Typography variant="body2" component="p" color="text.secondary">Developed an Employee Management System, a role-based platform for task management and work tracking...</Typography>
                </Box>
         </Stack>
    </Box>
  )
}
