
import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";
import type { AuthProps } from "./ProfileUser";


export default function Projects({auth}:AuthProps) {
  const userEducation=useUserProfile()
        const educationList=userEducation.projects.slice(0,2)
    
        
       
        const message="Projects"
        const apiKey="projects"
        const fieldSet={
            title:"projectName",
            subTitle:"associatedWith",
            duration:"duration",
            description:"description"
        }
        return (
           <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey} auth={auth}/>
        )
  
}
