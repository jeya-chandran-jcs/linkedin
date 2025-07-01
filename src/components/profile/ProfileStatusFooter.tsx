import { Box, ClickAwayListener, Typography } from "@mui/material";
import MuiButton from "../ActionComp/MuiButton";
import { OpenTo, type PaperUtilityOpenToProps } from "../../utility/paper";
import { useRef, useState } from "react";
import Paper from "../base/Paper";

console.log(OpenTo)

type ShowProps={
    openTo:boolean,
    enhanceProfile:boolean,
    resources:boolean
}

export default function ProfileStatusFooter() {
    const [show,setShow]=useState<ShowProps>({openTo:false,enhanceProfile:false,resources:false})
    // const [enhanceProfile,setEnhanceProfile]=useState<boolean>(false)
    
    const buttonRef={
        opento:useRef<HTMLButtonElement | null>(null),
        enhanceProfile:useRef<HTMLButtonElement | null>(null),
        resources:useRef<HTMLButtonElement | null>(null)
    }


    const handleShow=(key: keyof typeof show)=>{
        setShow((prev)=>({
            openTo:false,
            enhanceProfile:false,
            resources:false,
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
        setShow({openTo:false,enhanceProfile:false,resources:false})
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
                <Box sx={{
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
                  
                }}>
                    {OpenTo.map((items:PaperUtilityOpenToProps,index:number)=>(
                        <Paper key={index} title={items.title} desc={items.desc}  onClick={()=>{
                            alert(`item clicked , ${items.title}`)
                            setShow({openTo:false,enhanceProfile:false,resources:false})
                        }}/>
                    ))}
                </Box>
            )}
             <MuiButton text={"Add Profile Section"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} 
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
             <MuiButton text={"Enhance Profile"}  type={"button"} variant={"outlined"} color={"primary"}  size={"medium"} 
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
             <MuiButton text={"Resources"}  type={"button"} variant={"outlined"}  size={"small"} 
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
        </Box>
        <Box sx={{backgroundColor:"#D6E7F3",width:"80%",borderRadius:"8px",padding:"0.7rem 0.9rem",display:"flex",marginY:"1rem",flexDirection:"column",gap:"0.2rem"}}> 
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="body1" component="p">Open to work</Typography>
                <i className="fa-solid fa-pencil"></i>
            </Box>
            <Typography variant="body2" sx={{textWrap:"wrap"}}>Full-stack Developer, Frontend Developer, Back End Developer and Software Developer roles,</Typography>
            <Typography variant="body2" component="a" color="primary" sx={{fontWeight:"bold"}}>Show details</Typography>
        </Box>
    </Box>
    </ClickAwayListener>

  )
}
