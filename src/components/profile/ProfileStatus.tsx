import { Box, Container, Typography } from "@mui/material";
import type { User } from "firebase/auth";

import MuiButton from "../ActionComp/MuiButton";
import ProfileStatusFooter from "./ProfileStatusFooter";
import CertificateLogo from "../../utility/CertificateLogo";

type AuthProfileProps = {
  authUser: User | null;
};

export default function ProfileStatus({ authUser }: AuthProfileProps) {
  console.log(authUser);
  return (
    <Container
      sx={{
        width: "100%",
        marginTop: "10vh",
        display: "flex",
        flexDirection: "column",
        padding:"1rem"
      }}
      disableGutters
      maxWidth={false}
    >
      {/* Main content section: left & right */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {/* Left content box */}
        <Box
          sx={{
            backgroundColor: "white",
            width: "65%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "flex-start",
            // padding: "0 10px",
          }}
        >
          {/* head section */}
          <Box sx={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
            <Typography variant="h6" component="h6">
              {authUser?.displayName}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              He / Him
            </Typography>
            <MuiButton
              type={"button"}
              text={""}
              variant={"outlined"}
              fullWidth={false}
              color={"info"}
              size={"small"}
              children={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Add a verification badge</p>
                </Box>
              }
              sx={{
                border: "2px dashed #1976d2",
                color: "#1976d2",
                borderRadius: "25px",
                textTransform: "none",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  color: "darkblue",
                  border: "2px dashed #1565c0",
                },
              }}
            />
          </Box>

          {/* middle section */}
          <Typography variant="body1" component="p" sx={{ textWrap: "wrap" }}>
            Full Stack Developer | MERN Stack | Enthusiast of Bootstrap &
            Responsive Design
          </Typography>
          <Box>
            <Typography
              color="text.secondary"
              variant="body2"
              component="p"
            >
              Bengaluru, Karnataka, India •
              <Typography
                component="a"
                variant="body1"
                href="#"
                color="primary"
                sx={{
                  fontWeight: "600",
                  paddingLeft: "0.3rem",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Contact info
              </Typography>
            </Typography>
          </Box>

          <Typography
            color="primary"
            variant="body2"
            component="a"
            sx={{
              fontWeight: "900",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Portfolio
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Typography>
          <Typography
            color="primary"
            variant="body2"
            component="a"
            sx={{ fontWeight: "900" }}
          >
            49 connections
          </Typography>
        </Box>

        {/* Right box: only aligned with the name-to-connection area */}
        <Box
          sx={{
            width: "35%",
            padding: "10px",
            display:"flex",
            // justifyContent:"flex-start",
            // alignItems:"flex-start",
            gap:"1rem"
          }}
        >
          <CertificateLogo height={50} width={85}/>
          <Typography component="a" variant="body2" sx={{fontWeight:"500"}} >GUVI Geek Networks, IIT-M Incubated Company</Typography>
        </Box>
      </Box>

      {/* Footer section that spans full width */}
      <Box sx={{ backgroundColor: "white",  }}>
        <ProfileStatusFooter />
      </Box>
    </Container>
  );
}
