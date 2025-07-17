import { Box, Typography } from "@mui/material";

const resourceItems=[
    {icon:<i className="fa-solid fa-share-from-square"></i>, name:"Send profile in a message"},
    {icon:<i className="fa-solid fa-download"></i>, name:"Save to PDF"},
    {icon:<i className="fa-solid fa-bookmark"></i>, name:"Saved Items"},
    {icon:<i className="fa-solid fa-table-columns"></i>, name:"Activity"},
    {icon:<i className="fa-solid fa-circle-info"></i>, name:"About this profile"},
]

type ResourcesProps={
    onClick?:()=>void
}

export default function Resources({onClick}:ResourcesProps) {
  return (
    <Box onClick={onClick} sx={{backgroundColor:"white", border:"1px solid #D3D3D3", borderRadius:"8px",boxShadow:4,width:"30%",display:"flex",flexDirection:"column",overflow:"clip"}}>
        {resourceItems.map((item,index)=>(
            <Box key={index} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%","&:hover": { backgroundColor: '#F3F6F9'}, padding:"0.7rem"}}>
                <Typography component={"a"} variant="body2" color={"#424242"} sx={{width:"20%",fontSize:"1.1rem"}}>{item.icon}</Typography>
                <Typography component={"p"} variant="body2" sx={{textAlign:"left",width:"80%"}} color={"text.secondary"}>{item.name}</Typography>
            </Box>
        ))}
    </Box>
  )
}
