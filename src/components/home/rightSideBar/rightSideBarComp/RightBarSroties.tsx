import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { linkedInNews } from "../../../../utility/homeRightSideBar.ts/linkedinNews";
import { useState } from "react";
import MuiButton from "../../../ActionComp/MuiButton";

export default function RightBarStories() {
    const [show,setShow]=useState<boolean>(false)
    
    const trimNews=show ? linkedInNews.header : linkedInNews.header.slice(0,5) 
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
                display:"flex",
                flexDirection:"column",
                gap:"0.4rem",
                paddingY:"0.6rem"

            }}>

            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"1rem",}}>
                <Typography sx={{fontSize:"1.2rem"}}>{linkedInNews.title}</Typography>
                <i className="fa-solid fa-circle-info"></i>
            </Box>

            <Box sx={{display:"flex",paddingX:"1rem",flexDirection:"column",}}>
               <Typography color="textSecondary" variant="body1" component="p">{linkedInNews.subTitle}</Typography>

               <List disablePadding >
                    {trimNews.map((item,index)=>(
                        <ListItem key={index} disableGutters>
                            <ListItemText 
                                primary={
                                    <Typography variant="body2" component="p" fontWeight={600}>{item.desc}</Typography>
                                }
                                secondary={
                                    <Typography color="textSecondary" fontSize={"0.7rem"}>{item.time}</Typography>
                                }
                            />

                        </ListItem>
                    ))}
                    <MuiButton type={"button"} variant={"outlined"} size={"small"}  onClick={()=>setShow(!show)} text={"Show"}/>
               </List>
            </Box>

        </Box>

    )
}
