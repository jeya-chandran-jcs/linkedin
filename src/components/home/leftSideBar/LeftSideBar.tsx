import { Box } from "@mui/material";
import ProfileLeft from "./componentsLeftBar/ProfileLeft";
import ProfileViewer from "./componentsLeftBar/ProfileViewer";
import ProfileLeftAd from "./componentsLeftBar/ProfileLeftAd";
import Resources from "../../../utility/Resources";

export default function LeftSideBar() {
  return (
     <Box sx={{width:"15%",display:"flex",flexDirection:'column',gap:"0.6rem",position:"sticky",top:"1rem", alignSelf:"flex-start"}}>
          {/* sx={{
    width: "15%",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    position: "sticky",
    top: "1.6rem", // matches your page paddingY
    alignSelf: "flex-start",
    height: "fit-content"
  }} */}

      <ProfileLeft />
      <ProfileViewer />
      <ProfileLeftAd />
      <Box sx={{width:"50vw"}}>
        <Resources />
      </Box>
    </Box>
  )
}
