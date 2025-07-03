


import { Box, Divider, Stack, Typography } from "@mui/material";
import CertificateLogo from "../../../../utility/CertificateLogo";


export default function EducationAdd() {
    return (
        <Box sx={{
            borderRadius: "8px",
            width: "100%",
            border: "1px solid #D3D3D3",
            position: 'relative',
            overflow: "clip",
            padding: '1rem',
            display: "flex",
            flexDirection: "column",
            gap: "1.3rem",
                      backgroundColor:"white"
        }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Education</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
                    <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
                </Box>
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column" ,gap:"1rem"}}>
                <Box sx={{ display: "flex", alignItems: "start", gap: "1rem", }}>
                    <CertificateLogo height={50} width={80} />
                    <Stack spacing={0}>
                        <Typography variant="body1" component="h6" sx={{ fontWeight: "500", fontSize: "1.2rem" }}>Guvi Geek Networks, IIT- M Incubated Company</Typography>
                        <Typography variant="body2" component="p" >Certification Full Stack Development</Typography>
                        <Typography variant="body1" component="h6" color="text.secondary">Sep 2023 - dec 2023</Typography>
                        <Typography variant="body2" component="p" color="text.secondary">Activities and societies: -Developed a Tic Tac Toe game using React as part of hands-on learning.
                            -Created a URL shortening mini-project, applying full stack development skills.</Typography>
                    </Stack>
                </Box>
                <Divider />

                <Box sx={{ display: "flex", alignItems: "start", gap: "1rem", }}>
                    <CertificateLogo height={50} width={80} />
                    <Stack spacing={0}>
                        <Typography variant="body1" component="h6" sx={{ fontWeight: "500", fontSize: "1.2rem" }}>Ultra Arts & Science college</Typography>
                        <Typography variant="body2" component="p" >Msc Computer Science</Typography>
                        <Typography variant="body1" component="h6" color="text.secondary">june 2021 - apr 2023</Typography>
                        <Typography variant="body2" component="p" color="text.secondary">Activities and societies: -Developed a Tic Tac Toe game using React as part of hands-on learning.
                            -Created a URL shortening mini-project, applying full stack development skills.</Typography>
                    </Stack>
                </Box>

            </Box>
        </Box>
    )
}
