import { Box, Typography } from "@mui/material";
import MuiButton from "../ActionComp/MuiButton";


export default function ProfileStatusFooter() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"5px",marginY:"8px"}}>
        <Box sx={{display:"flex",gap:"8px"}}>
            <MuiButton text={"open to"}  type={"button"} variant={"contained"} color={"primary"}  size={"medium"}
            sx={{
                color:"#fff",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.5,
                fontSize:"1rem",
                '&:hover':{
                    backgroundColor: '#004182',
                }
            }}
            />
             <MuiButton text={"Add Profile Section"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} 
            sx={{
                // color:"#fff",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                '&:hover': {
                    backgroundColor: '#D0E3F8', 
                    color: '#004182',
                    border :"2px solid #004182",
                    borderColor: '#004182',    
                 }
                }}
            />
             <MuiButton text={"Enhance Profile"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} 
            sx={{
                // color:"#fff",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                '&:hover': {
                    backgroundColor: '#D0E3F8', 
                    color: '#004182',
                    border :"2px solid #004182",
                    borderColor: '#004182',    
                 }
                }}
            />
             <MuiButton text={"Resources"}  type={"button"} variant={"outlined"}  size={"small"} 
            sx={{
                 color:"gray",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                border:"2px solid gray",
                '&:hover': {
                    backgroundColor: '#f0f0f0', 
                    color: 'black',
                    border :"2px solid black",
                    borderColor: 'black',    
                 }
                }}
            />
        </Box>
        <Box sx={{backgroundColor:"#D6E7F3",width:"80%",borderRadius:"8px",padding:"0.7rem 0.9rem",display:"flex",marginY:"1rem",flexDirection:"column",gap:"0.2rem"}}> 
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="body1" component="p">Open to work</Typography>
                <i className="fa-solid fa-pencil"></i>
            </Box>
            <Typography variant="body2" sx={{textWrap:"wrap"}}>Full-stack Developer, Frontend Developer, Back End Developer and Software Developer roles,</Typography>
            <Typography variant="body2" component="a" color="primary" sx={{fontWeight:"bold"}}>Show details</Typography>
        </Box>
    </Box>
  )
}
