import { Box, Stack, Typography } from "@mui/material";


export default function About() {
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
                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>About</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
                    <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
                </Box>
            </Box>


            <Box sx={{ display: "flex", alignItems: "start", gap: "1rem", }}>
                <Stack spacing={0}>
                    <Typography variant="body2" component="p" >🎯 Impacting users one line of code at a time! Hello, I’m Jeya Chandran S, a Full Stack Developer from Madurai, Tamil Nadu, specializing in the MERN stack.

                        With a BCA and MSc in Computer Science, along with a Full Stack MERN Developer certification from IIT Madras</Typography>

                </Stack>
            </Box>
        </Box>
    )
}
