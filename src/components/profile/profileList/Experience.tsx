import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";


export default function Experience() {
   const userEducation=useUserProfile()
      const educationList=userEducation.experience.slice(0,2)
  
      console.log("from education",userEducation.experience)
     
      const message="Experience"
     
      const fieldSet={
          title:"title",
          subTitle:"company",
          duration:"true",
          description:"description"
      }
      return (
         <CommonForm commonStructure={fieldSet} message={message} data={educationList}/>
      )
}
