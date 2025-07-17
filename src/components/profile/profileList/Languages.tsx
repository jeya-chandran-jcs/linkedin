import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";


export default function Languages() {
      const userEducation=useUserProfile()
        const educationList=userEducation.language.slice(0,2)
       
        const message="Language"
        const apiKey="languages"
        const fieldSet={
            title:"languageName",
            subTitle:"proficiencyLevel",
        }
        return (
           <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey}/>
        )
//   return (
//     <Box sx={{
//           borderRadius: "8px",
//           width:"100%",
//           border:"1px solid #D3D3D3",    
//           position:'relative',
//           overflow:"clip",
//           padding:'1rem',
//           display:"flex",
//           flexDirection:"column",
//           gap:"1.3rem",
//           backgroundColor:"white"
//     }}>
//         <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//             <Typography variant="h6" component="p" sx={{fontWeight:"600",fontSize:"1.1rem",color:"#212121"}}>Languages</Typography>
//             <Box sx={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
//                 <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href="#"></a>
//                 <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
//             </Box> 
//         </Box>

//          <Stack spacing={2}>
//                 <Box>
//                     <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.1rem"}}>English</Typography>
//                     <Typography variant="body2" component="p" color="text.secondary">Professional working proficiency</Typography>
//                 </Box>

//                 <Divider />

//                 <Box>
//                     <Typography variant="body1" component="h6" sx={{fontWeight:"500",fontSize:"1.1rem"}}>Tamil</Typography>
//                     <Typography variant="body2" component="p" color="text.secondary">Professional working proficiency</Typography>
//                 </Box>
//          </Stack>
//     </Box>
//   )
}
