import { Box, Typography } from "@mui/material";

export default function ProfileLeftAd() {

    return (
        <Box
            sx={{
                borderRadius: "8px",
                //   flexGrow: 1,
                width: "100%",
                border: "1px solid gray",
                position: 'relative',
                overflow: "visible",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                paddingY: "0.6rem"

            }}>

            <Typography fontSize={"0.7rem"} paddingX={"1.5rem"} color="textSecondary">Boost Your Job Search</Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", paddingX: "1.5rem", '&:hover >p': { textDecoration: "underline", cursor: "pointer" } }}>
                <Box sx={{display:"flex",alignItems:"center",gap:"0.3rem"}}>
                    <i className="fa-solid fa-note-sticky text-amber-600 "></i>
                    <Typography sx={{ fontSize: "0.8rem" }} >Try Premium for $0</Typography>

                </Box>
            </Box>

        </Box>

    )
}
