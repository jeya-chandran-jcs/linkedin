import { Box, Container, Typography } from "@mui/material";
import MuiButton from "../../ActionComp/MuiButton";
import ProfileStatusFooter from "./ProfileStatusFooter";
import CertificateLogo from "../../../utility/CertificateLogo";
import { Link, useParams } from "@tanstack/react-router";
import Pen from "../../../utility/icons/Pen";
import type { MockDataProps } from "../../../types/mockDataApi";


type AuthProfileProps = {
  authUser: MockDataProps;
  auth: boolean | null
};

export default function ProfileStatus({ authUser, auth }: AuthProfileProps) {
  const { id } = useParams({ from: "/user-profile/$id" })

  return (
    <Container
      sx={{
        width: "100%",
        marginTop: "6vh",
        display: "flex",
        flexDirection: "column",
        padding: "1rem"
      }}
      disableGutters
      maxWidth={false}
    >
      {/*  left & right */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {/* Left box */}
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
              {authUser?.name}
            </Typography>

            {authUser?.profileIntro?.pronouns &&
              <Typography variant="body2" component="p" color="text.secondary">
                {authUser?.profileIntro?.pronouns}
              </Typography>
            }

            {auth &&
              <MuiButton
              onClick={()=>console.log("void status")}
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
            }
          </Box>

          {/* middle */}
          {authUser?.profileIntro?.headline &&
            <Typography variant="body1" component="p" sx={{ textWrap: "wrap" }}>
              {authUser?.profileIntro?.headline}
            </Typography>
          }

          <Box>
            <Typography color="text.secondary" variant="body2" component="p">
              {(authUser?.profileIntro?.city && authUser?.profileIntro?.country) &&
                <>
                  {authUser?.profileIntro?.city} - {authUser?.profileIntro?.country}
                </>
              }

              <Link
                to={`/user-profile/${id}/edit/contact`}
                style={{
                  fontWeight: 600,
                  paddingLeft: "0.3rem",
                  color: "#1976d2",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Contact info
              </Link>
            </Typography>
          </Box>

          {authUser?.profileIntro?.link &&
            <Link to={authUser?.profileIntro?.link}>
              <Typography
                color="primary"
                variant="body2"
                sx={{
                  fontWeight: "900",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {authUser?.profileIntro?.linkText}
                <Pen symbol="arrow-up-right-from-square" />
              </Typography>
            </Link>
          }

          <Typography
            color="primary"
            variant="body2"
            component="a"
            sx={{ fontWeight: "900" }}
          >
            {authUser?.connections.length} connections
          </Typography>
        </Box>

        {/* Right box */}
        {authUser?.profileIntro?.higherEducation &&
          <Box
            sx={{
              width: "35%",
              padding: "10px",
              display: "flex",
              // justifyContent:"flex-start",
              // alignItems:"flex-start",
              gap: "1rem"
            }}
          >
            <CertificateLogo height={50} width={85} />
            <Typography component="a" variant="body2" sx={{ fontWeight: "500" }} >{authUser?.profileIntro?.higherEducation}</Typography>
          </Box>

        }
      </Box>

      {/* Footer  */}
      <Box sx={{ backgroundColor: "white", }}>
        <ProfileStatusFooter auth={auth}/>
      </Box>
    </Container>
  );
}
