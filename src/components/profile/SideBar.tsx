import { Box } from "@mui/material";

export default function SideBar() {
  return (
    <Box component="section"
      sx={{
        minHeight:"100vh",
        width: "20%",
        backgroundColor: "gray",
        borderRadius: "8px",
        padding: "1rem"
      }}
    >
      <p>Sidebar</p>
    </Box>
  );
}
