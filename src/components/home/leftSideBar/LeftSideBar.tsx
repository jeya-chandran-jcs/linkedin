import { Box } from "@mui/material";
import ProfileLeft from "./componentsLeftBar/ProfileLeft";
import ProfileViewer from "./componentsLeftBar/ProfileViewer";
import ProfileLeftAd from "./componentsLeftBar/ProfileLeftAd";
import Resources from "../../../utility/Resources";

export default function LeftSideBar() {
  return (
     <Box sx={{width:"15%",display:"flex",flexDirection:'column',gap:"0.6rem"}}>
        
      <ProfileLeft />
      <ProfileViewer />
      <ProfileLeftAd />
      <Box sx={{width:"50vw"}}>
        <Resources />
      </Box>
    </Box>
  )
}
