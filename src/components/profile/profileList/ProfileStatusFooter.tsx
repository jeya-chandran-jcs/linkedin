import { Box, ClickAwayListener, Typography } from "@mui/material";
import MuiButton from "../../ActionComp/MuiButton";
import { OpenTo, type PaperUtilityOpenToProps } from "../../../utility/paper";
import { useRef, useState } from "react";
import Paper from "../../base/Paper";
import EnhanceProfileCard from "../../../utility/EnhanceProfileCard";
import Resources from "../../../utility/Resources";
import AddProfile from "../AddProfile/AddProfile";
import Pen from "../../../utility/icons/Pen";

type ShowProps={
    openTo:boolean,
    enhanceProfile:boolean,
    resources:boolean,
    addProfile:boolean
}

export default function ProfileStatusFooter() {
    const [show,setShow]=useState<ShowProps>({openTo:false,enhanceProfile:false,resources:false,addProfile:false})
    // const [enhanceProfile,setEnhanceProfile]=useState<boolean>(false)
    
    const buttonRef={
        opento:useRef<HTMLButtonElement | null>(null),
        enhanceProfile:useRef<HTMLButtonElement | null>(null),
        resources:useRef<HTMLButtonElement | null>(null),
        addProfile:useRef<HTMLButtonElement | null>(null)
    }


    const handleShow=(key: keyof typeof show)=>{
        setShow((prev)=>({
            openTo:false,
            enhanceProfile:false,
            resources:false,
            addProfile:false,
            [key]: !prev[key]
        }))
    }

    const handleRef=(e:MouseEvent | TouchEvent)=>{
        for(const key in buttonRef)
        {
            const ref=buttonRef[key as keyof typeof buttonRef]
            if(ref.current && e.target instanceof Node && ref.current.contains(e.target))
            {
                return
            }
        }
        setShow({openTo:false,enhanceProfile:false,resources:false,addProfile:false})
    }

    // const handleClose=()=>{

    // }

  return (
    <ClickAwayListener  onClickAway={handleRef}>
    <Box sx={{display:"flex",flexDirection:"column",gap:"5px",marginY:"8px"}}>
        

        <Box sx={{display:"flex",gap:"8px",position:"relative",overflow:"visible",}}>
            <MuiButton text={"open to"}  type={"button"} variant={"contained"} color={"primary"}  size={"medium"} onClick={()=>handleShow("openTo")} ref={buttonRef.opento}
            sx={{
                color:"#fff",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.5,
                fontSize:"1rem",
                '&:hover':{
                    backgroundColor: '#004182',
                }
            }}
            />
            {show.openTo && (
                <Box
                 sx={{
                    position:"absolute",
                    top:"100%",
                    left: 0,
                    zIndex: 1,
                    mt: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    backgroundColor: "white",
                    padding: "1rem",
                    boxShadow: 3,
                    borderRadius: "10px",
                    width: "300px",
                  
                }}
                >
                    {OpenTo.map((items:PaperUtilityOpenToProps,index:number)=>(
                        <Paper key={index} title={items.title} desc={items.desc}  onClick={()=>{
                            alert(`item clicked , ${items.title}`)
                            setShow({openTo:false,enhanceProfile:false,resources:false,addProfile:false})
                            
                        }}/>
                    ))}
                </Box>
            )}
             <MuiButton text={"Add Profile Section"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} onClick={()=>handleShow("addProfile")} ref={buttonRef.addProfile}
            sx={{
                // color:"#fff",
                
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                '&:hover': {
                    backgroundColor: '#D0E3F8', 
                    color: '#004182',
                    border :"2px solid #004182",
                    borderColor: '#004182',    
                 }
                }}
            />
              {show.addProfile && (
                <Box   onClick={() => setShow({ openTo: false, enhanceProfile: false, resources: false,addProfile:false })} 
                       sx={{position:"fixed",top:0,left:0,backgroundColor:"rgba(0,0,0,0.4)",zIndex:"9999",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"flex-start",paddingTop:"3rem"}}
                >
                    <Box sx={{backgroundColor:"white",width:"30%",borderRadius:"8px",display:"flex"}}  onClick={(e) => e.stopPropagation()}>
                        <AddProfile onClick={()=>setShow({ openTo: false, enhanceProfile: false, resources: false,addProfile:false })}/>
                    </Box>
                </Box>
            )}
             <MuiButton text={"Enhance Profile"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} onClick={()=>handleShow("enhanceProfile")} ref={buttonRef.enhanceProfile}
            sx={{
                // color:"#fff",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                '&:hover': {
                    backgroundColor: '#D0E3F8', 
                    color: '#004182',
                    border :"2px solid #004182",
                    borderColor: '#004182',    
                 }
                }}  
            />
                 {show.enhanceProfile && (
                <Box   onClick={() => setShow({ openTo: false, enhanceProfile: false, resources: false,addProfile:false })} 
                       sx={{position:"fixed",top:0,left:0,backgroundColor:"rgba(0,0,0,0.4)",zIndex:"9999",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"flex-start",paddingTop:"3rem"}}
                >
                    <Box sx={{backgroundColor:"white",width:"30%",borderRadius:"8px",display:"flex"}}  onClick={(e) => e.stopPropagation()}>
                        <EnhanceProfileCard onClick={()=>setShow({ openTo: false, enhanceProfile: false, resources: false,addProfile:false })}/>
                    </Box>
                </Box>
            )}
             <MuiButton text={"Resources"}  type={"button"} variant={"outlined"}  size={"small"} onClick={()=>handleShow("resources")} ref={buttonRef.resources}
            sx={{
                 color:"gray",
                fontWeight:"900",
                borderRadius:"19px",
                textTransform:"none",
                paddingX:2,
                paddingY:0.3,
                fontSize:"1rem",
                border:"2px solid gray",
                '&:hover': {
                    backgroundColor: '#f0f0f0', 
                    color: 'black',
                    border :"2px solid black",
                    borderColor: 'black',    
                 }
                }}
            />
            {show.resources && (
                <Box sx={{position:"absolute",top:"100%",paddingTop:"0.5rem",left:"24vw",width:"100%",zIndex:"1"}}>
                    <Resources onClick={()=>setShow({openTo:false,enhanceProfile:false,resources:false,addProfile:false})}/>
                </Box>
            )}
        </Box>
        <Box sx={{backgroundColor:"#D6E7F3",width:"80%",borderRadius:"8px",padding:"0.7rem 0.9rem",display:"flex",marginY:"1rem",flexDirection:"column",gap:"0.2rem"}}> 
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="body1" component="p">Open to work</Typography>
                   <Pen symbol="pencil"/>
            </Box>
            <Typography variant="body2" sx={{textWrap:"wrap"}}>Full-stack Developer, Frontend Developer, Back End Developer and Software Developer roles,</Typography>
            <Typography variant="body2" component="a" color="primary" sx={{fontWeight:"bold"}}>Show details</Typography>
        </Box>
    </Box>
    </ClickAwayListener>

  )
}
