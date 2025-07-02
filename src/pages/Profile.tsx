import { Box } from "@mui/material";
import SideBar from "../components/profile/SideBar/SideBar";
import ProfileContent from "../components/profile/ProfileContent";

export default function Profile() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent:"center",
        gap: "2rem",
        paddingY: "1.6rem",
        backgroundColor:"#f5f3f0ff"
      }}
    >
    <ProfileContent />
      <SideBar />
    </Box>
  );
}
