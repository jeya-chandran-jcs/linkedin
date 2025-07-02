import { Box, Divider, Stack, Typography } from "@mui/material";


export default function Skills() {
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
            <Typography variant="h6" component="h6" sx={{fontWeight:"600",fontSize:"1.1rem",color:"#212121"}}>Skills</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
                <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
                <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
            </Box> 
        </Box>

         <Stack spacing={2}>
            <Typography variant="body2" component="h6" sx={{fontWeight:"500",fontSize:"1rem"}}>Pre-Deployment Testing</Typography>
                <Divider />
            <Typography variant="body2" component="h6" sx={{fontWeight:"500",fontSize:"1rem"}}>Task completion</Typography>
         </Stack>
    </Box>
  )
}
