import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";

export default function PostSort() {
    const [sort,setSort]=useState<boolean>(false)
  return (
    <Box sx={{width:"100%",display:"flex",alignItems:"center",gap:"0.5rem"}}>
        <Divider sx={{width:"80%",backgroundColor:"lightgray",height:"1px"}}/>
        <Typography> sort by: </Typography>
        
    </Box>
  )
}
