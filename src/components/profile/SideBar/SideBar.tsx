import { Box } from "@mui/material";
// import Languages from "../profileList/Languages";
import AmazonAdd from "./AmazonAdd";
import Viewers from "./Viewers";
import { peopleSugg, viewers } from "../../../utility/viewers";
import PictureAd from "./PictureAd";

export default function SideBar() {
  return (
    <Box component="section"
      sx={{
        // minHeight:"100vh",
        width: "18%",
        // backgroundColor: "gray",
        borderRadius: "8px",
        // padding: "1rem"
        display:"flex",
        flexDirection:"column",
        gap:"0.7rem"
      }}
    >
      {/* <Languages /> */}

      <AmazonAdd />

      <Viewers adViewers={viewers}/>

      <Viewers adViewers={peopleSugg} />

      <PictureAd />
    </Box>
  );
}
