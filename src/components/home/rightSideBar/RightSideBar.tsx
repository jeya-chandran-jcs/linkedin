import { Box } from "@mui/material";
import RightBarStories from "./rightSideBarComp/RightBarSroties";
import AmazonAdd from "../../profile/SideBar/AmazonAdd";
import RightSIdeBarTip from "./rightSideBarComp/RightSIdeBarTip";

export default function RightSideBar() {
  return (
    <Box sx={{width:"15%",display:"flex",flexDirection:'column',gap:"0.6rem"}}>
        <RightBarStories />
        <AmazonAdd />
         <RightSIdeBarTip />
    </Box>
  )
}
