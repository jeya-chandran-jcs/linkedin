
import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";


export default function Projects() {
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
           <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey}/>
        )
  
}
