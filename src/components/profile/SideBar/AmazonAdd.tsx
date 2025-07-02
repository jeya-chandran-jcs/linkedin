import { Box, Typography } from "@mui/material";
import MuiButton from "../../ActionComp/MuiButton";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/google";

export default function AmazonAdd() {
    const [name, setName] = useState<string | null>(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setName(user?.displayName ?? null)
        })

        return () => unSubscribe()
    }, [])


    return (
        <Box sx={{ width: "100%", border: "1px solid #D3D3D3", borderRadius: "8px", backgroundColor: "white", overflow: "hidden",boxShadow:1 }}>
            <Box sx={{ position: "relative", backgroundColor: "#e0f2e0", height: "6vh", display: "flex", justifyContent: "end", alignItems: "start", paddingX: "0.5rem" }}>
                <MuiButton text={"Promoted ..."} type={"button"} variant={"contained"} size={"small"}
                    sx={{ color: "#424242", backgroundColor: "#f5f5f5", borderRadius: "10px", marginTop: "5px", fontSize: "0.7rem" }} />
                <Box sx={{position:"absolute",left: "1rem",top: "30%",boxShadow:3,backgroundColor:"white",height:"7vh",width:'4vw',borderRadius:"8px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Box
                        component="img"
                        src="assets/amazonPay.jpg"
                        alt="amazon logo"
                        sx={{
                            
                            height: "90%",
                            width: "80%",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "white", padding:"2.3rem 1rem 1rem 1rem" ,display:"flex",flexDirection:"column",gap:"0.7rem"}}>
                <Typography variant="subtitle2" component="p" sx={{fontWeight:"400"}}>Amazon Pay India</Typography>
                <Typography variant="body2" component="p" color="text.seconary" sx={{fontSize:"0.8rem" ,color:"	#36454F"}}>{name} follow us to know more</Typography>
                <Typography variant="body2" component="p" color="text.seconary" sx={{fontSize:"0.7rem",color:"#696969"}}>Amazon Pay simplifies lives with seamless payment solutions.</Typography>
                <MuiButton type={"button"} variant={"outlined"} text={"Follow"} size={"medium"} color={"primary"} sx={{fontSize:"0.8rem",fontWeight:"600",border:"1.4px solid skyblue",borderRadius:"25px"}}/>
            </Box>
        </Box>
    )
}
