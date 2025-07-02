import { Box, Typography } from "@mui/material";


export default function PictureAd() {
  return (
    <Box sx={{borderRadius:"8px",overflow:"hidden",position:"sticky",top:"2rem",transition:"transform 0.5s ease-in-out"}}>
        <Typography component="img" src="assets/linkedinadd.png"/>
    </Box>
  )
}
