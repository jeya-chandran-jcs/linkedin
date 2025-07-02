
import { Avatar, Box, Stack, Typography } from "@mui/material";
import MuiButton from "../components/ActionComp/MuiButton";


const mapper=[{
    title:"Add a custom button across LinkedIn",
    desc:"Drive visits to your website, portfolio and more."
},
{
    title:"Use AI profile writing assistant",
    desc:"Make your profile standout with the help of AI.",
},{
    title:"Feature profile sections higher",
    desc:"Showcase key details in your featured section."
}
]

const images=[
  "./assets/smiling1.jpg",
  "./assets/smiling2.webp",
  "./assets/smiling3.webp"
]

type EnhancedProfileProps={
    onClick:()=>void
}
export default function EnhanceProfileCard({onClick}:EnhancedProfileProps) {
  return (
    <Box sx={{
          borderRadius: "8px",
          width:"100%",
          border:"1px solid #D3D3D3",    
          position:'relative',
          overflow:"clip",
          padding:'1.3rem',
          display:"flex",
          flexDirection:"column",
          gap:"1.3rem"
    }}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
            <Typography variant="h6" component="p" sx={{fontWeight:"600",fontSize:"1.1rem",color:"#212121"}}>Enhance your profile with Premium</Typography>
            <Box sx={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
                <a className="fa-solid fa-x font-bold text-lg text-gray-600" onClick={onClick}></a>
                
            </Box> 
        </Box>

         <Stack spacing={2}>
                {mapper.map((items,index)=>(
                    <Box key={index}>
                        <Typography variant="h6" component="h6" sx={{fontWeight:"500",fontSize:"1rem"}}>{items.title}</Typography>
                        <Typography variant="subtitle1" component="p" color="text.secondary" fontSize={"0.8rem"}>{items.desc}</Typography>
                    </Box>                
                ))}

                <Box sx={{display:"flex",alignItems:"center"}}>
                    {images.map((item,index)=>(
                     <Avatar   key={index} src={item}
                        sx={{
                            width: 32,
                            height: 32,
                            border: "2px solid white",
                            marginLeft: index === 0 ? 0 : -1.5, 
                            zIndex: images.length - index, 
                        }}
                    />
                ))}

                    <Typography variant="subtitle2" component="p" color="text.secondary" sx={{fontWeight:"200",fontSize:"0.8rem",marginLeft:"4px"}}>Adithya and millions of other members use Premium</Typography>
                </Box>
                 <MuiButton text={"Try Premium for $0"} type={"button"} variant={"contained"} size={"small"}
                                        sx={{
                                            backgroundColor:"#FFC875",
                                            color:"black",
                                            borderRadius:"25px",
                                            width: "fit-content",
                                            padding: "0.3rem 1rem",
                                            '&:hover':{
                                                backgroundColor:"#FFB347"
                                            }
                                        }}
                                    />

                <Typography color="text.secondary" variant="subtitle2" component="p" sx={{fontSize:"0.6rem"}}>1-month free trial. Cancel whenever. We’ll remind you 7 days before your trial ends.</Typography>
         </Stack>
    </Box>
  )
}
