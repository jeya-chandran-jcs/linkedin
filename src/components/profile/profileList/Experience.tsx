import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";
import type { AuthProps } from "./ProfileUser";


export default function Experience({auth}:AuthProps) {
   const userEducation=useUserProfile()
      const educationList=userEducation.experience.slice(0,2)
  
     
      const message="Experience"
      const apiKey="experience"
      const fieldSet={
          title:"title",
          subTitle:"company",
          duration:"true",
          description:"description"
      }
      return (
         <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey} auth={auth}/>
      )
}
