import { Box } from "@mui/material";
import SideBar from "../components/profile/SideBar";
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
        padding: "2rem 0 0 0",
      }}
    >
    <ProfileContent />
      <SideBar />
    </Box>
  );
}
