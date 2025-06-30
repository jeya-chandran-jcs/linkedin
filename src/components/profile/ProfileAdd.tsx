import { Avatar, Box, Typography } from "@mui/material";
import MuiButton from "../ActionComp/MuiButton";


export default function ProfileAdd() {
  return (
    <Box   sx={{
          borderRadius: "8px",
        //   flexGrow: 1,
          width:"100%",
          border:"1px solid #D3D3D3",    
          position:'relative',
          overflow:"clip",
          padding:'1rem'
        }}>
        <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.2rem"}}>Suggested For You</Typography>
        <Typography color="text.secondary"><i className="fa-solid fa-eye text-gray-500"></i>  Private To You</Typography>
        
        <Box sx={{border:"1px solid #D3D3D3",borderRadius:"8px",padding:"1rem",display:"flex",justifyContent:"space-between"}}>
            {/* <Box sx={{}}> */}
                <Avatar src="/assets/glitter.svg" alt="glitter logo" sx={{height:"20%",width:"8%"}}/>
                
                <Box sx={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                    <Typography variant="h6" component="h1">Stand out and build your credibility</Typography>
                    <Typography variant="body2" component="p" sx={{color:"#424242"}}>Enhance your profile with personalized AI tips and stand out for up to 2x as many opportunities.</Typography>
                    <MuiButton text={"Try Premium for $0"} type={"button"} variant={"contained"} size={"small"}
                        sx={{
                            backgroundColor:"#FFC875",
                            color:"black",
                            borderRadius:"25px",
                            width: "fit-content",
                            padding: "0.3rem 1rem",
                            '&:hover':{
                                backgroundColor:"#FFB347"
                            }
                        }}
                    />
                                <Typography variant="body2" component="p" color={"text.secondary"} sx={{textAlign:"" ,}}>1-month free trial. Cancel whenever. We’ll remind you 7 days before your trial ends.</Typography>
                </Box>

                <i className="fa-solid fa-x"></i>
            {/* </Box> */}


        </Box>
    </Box>
  )
}
