import { Box, Typography } from "@mui/material";
import MuiButton from "../../../../../ActionComp/MuiButton";

export default function AddPostImageModal() {
  return (
    <Box sx={{paddingY:"1rem",backgroundColor: "#f8fdff"}}>
      <Box sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center",gap:"1rem"}}>
        <Box component={"img"} src="postimage3.webp" sx={{ width: "150px", height: "200px", objectFit: "cover", backgroundColor: "white" }} alt="poast" />
        <Typography component={"h5"} variant="h5">Select files to begin</Typography>
        <Typography component={"p"} variant="subtitle2" color="textSecondary">Share images or a single video in your post.</Typography>
        <MuiButton type={"submit"} variant="contained" text="Upload From Computer" size="medium" fullWidth={false} sx={{borderRadius:"15px",boxShadow:"none",padding:"4px 12px"}}/>
      </Box>
    </Box>
  )
}
