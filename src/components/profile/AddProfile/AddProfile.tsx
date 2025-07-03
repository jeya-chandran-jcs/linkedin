
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import MuiButton from "../../ActionComp/MuiButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addProfileCore,addProfileRecommended,addProfileAdditional } from "../../../utility/addProfile";
import { useState } from "react";



type EnhancedProfileProps = {
    onClick: () => void
}

const proficeAccordion=[
    {
        title:"Core",
        desc:"Start with the basics. Filling out these sections will help you be discovered by recruiters and people you may know",
        list:addProfileCore
    },
    {
        title:"Recommended",
        desc:"Completing these sections will increase your credibility and give you access to more opportunities",
        list:addProfileRecommended
    },
    {
        title:"Additional",
        desc:"Add even more personality to your profile. These sections will help you grow your network and build more relationships.",
        list:addProfileAdditional
    }
]

export default function AddProfile({ onClick }: EnhancedProfileProps) {
    const [expanded,setExpanded]=useState<string | false>(false)

    const handleExpand=(value:string | false)=>{
        setExpanded((prev)=>(
            prev===value ? false : value
        ))
    }

    return (
        <Box sx={{
            borderRadius: "8px",
            width: "100%",
            border: "1px solid #D3D3D3",
            position: 'relative',
            overflow: "clip",
            paddingTop: '1.3rem',
            display: "flex",
            flexDirection: "column",
        }}>
            {/* header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 1.3rem 0.7rem 1.3rem" }}>
                <Typography variant="body2" component="p" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Add To Profile</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-x font-bold text-lg text-gray-600" onClick={onClick}></a>

                </Box>
            </Box>

            <Divider />

            {/* body */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>

                {proficeAccordion.map((item,index)=>(
                     <Accordion disableGutters expanded={expanded===item.title}  onChange={()=>handleExpand(item.title)} sx={{my:0.2, boxShadow: "none", borderBottom: "1px solid lightgray", "&:before": { display: "none", }, }} key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header"
                        sx={{
                            minHeight: "48px",
                            "& .MuiAccordionSummary-content": {
                            },
                        }}>

                        <Typography variant="body1" component="h6" sx={{fontWeight:"600", fontSize: "0.95rem" }}>{item.title}</Typography>
                    </AccordionSummary>

                     <AccordionDetails  sx={{  pt:0.1 }}>
                        <Typography variant="subtitle2" component="p" sx={{fontSize:"0.9rem" ,color:"gray"}} >
                            {item.desc}
                        </Typography>

        
                        <List   sx={{margin:0}}>
                            {item.list.map((names, index)=>(
                                
                                <ListItem disableGutters sx={{py:0.5 , px:0, borderBottom:index !== item.list.length-1 && "1px solid #eee" }}>
                                    <ListItemText primary={names.name} primaryTypographyProps={{fontSize:"0.9rem",fontWeight:400,color:"#4B4B4B"}} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
                ))}

               
               
            </Box>


        </Box>
    )
}


