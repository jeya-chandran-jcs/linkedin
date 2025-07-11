import { Typography } from '@mui/material'
import Pen from './Pen'


type MovablePen={
    position?:'absolute' | 'relative' | 'fixed' | 'sticky';
    top?:string,
    left?:string,
    right?:string,
    bottom?:string,
    color?:string,
    bgColor?:string,
    hoverBg?:string,
    onClick?:()=>void
}

export default function MovalbleIcon({top,left,right,bottom,position,color,bgColor,hoverBg,onClick}:MovablePen) {
  return (
                  <Typography component="p" variant='body1' onClick={onClick}  sx={{position,top,left,right,bottom,color,backgroundColor:bgColor, width:"2rem",height:"2rem",display:"flex",justifyContent:"center",alignItems:'center',borderRadius:"50%",'&:hover':{color:"black", backgroundColor: hoverBg,},transition:"all 0.3s ease-in-out"}}>
                    <Pen symbol={"pencil"}/>
                  </Typography>
  )
} 
