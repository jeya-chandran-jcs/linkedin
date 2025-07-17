import { Box, Typography } from "@mui/material";

export default function RightSIdeBarTip() {

    return (
        <Box
            sx={{
                borderRadius: "8px",
                //   flexGrow: 1,
                width: "100%",
                border: "1px solid gray",
                position: 'relative',
                overflow: "visible",
                backgroundColor: "white",
                display:"flex",
                flexDirection:"column",
                gap:"0.4rem",
                paddingY:"0.6rem"

            }}>

            <Box sx={{display:"flex",gap:"0.7rem",alignItems:"center",paddingX:"1.5rem",'&:hover >p':{textDecoration:"underline",cursor:"pointer"}}}>
                <Typography sx={{fontSize:"0.8rem",padding:"0.3rem", backgroundColor:"#f5e2c8",color:"#8d5944",fontWeight:"600",borderRadius:"4px"}} >Tip</Typography>
                <Typography sx={{fontSize:"1rem",fontWeight:"600"}}color="textSecondary" >Try Linkedin on the windows App</Typography>
            </Box>

           

        </Box>

    )
}
