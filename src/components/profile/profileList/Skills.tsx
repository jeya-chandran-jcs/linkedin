import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";
import type { AuthProps } from "./ProfileUser";


export default function Skills({auth}:AuthProps) {
  const userEducation=useUserProfile()
         const educationList=userEducation.skill.slice(0,2)
     
         
        
         const message="Skills"
        const apiKey="skills"
         const fieldSet={
             title:"skills",
             subTitle:"skillLevel",
         }
         return (
            <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey} auth={auth}/>
         )
   
}
