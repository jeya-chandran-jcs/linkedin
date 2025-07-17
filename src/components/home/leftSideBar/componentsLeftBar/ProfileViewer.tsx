import { Box, Typography } from "@mui/material";

export default function ProfileViewer() {

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

            <Box sx={{display:"flex",justifyContent:"space-between",paddingX:"1.5rem",'&:hover >p':{textDecoration:"underline",cursor:"pointer"}}}>
                <Typography sx={{fontSize:"0.8rem"}}>Profile Viewer</Typography>
                <Typography sx={{fontSize:"0.8rem"}} color="primary">2</Typography>
            </Box>

            <Box sx={{display:"flex",justifyContent:"space-between",paddingX:"1.5rem",'&:hover >p':{textDecoration:"underline",cursor:"pointer"}}}>
                <Typography sx={{fontSize:"0.8rem"}}>Profile impressions</Typography>
                <Typography sx={{fontSize:"0.8rem"}} color="primary">8</Typography>
            </Box>

        </Box>

    )
}
