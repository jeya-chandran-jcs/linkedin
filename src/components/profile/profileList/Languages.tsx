import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";
import type { AuthProps } from "./ProfileUser";


export default function Languages({auth}:AuthProps) {
      const userEducation=useUserProfile()
        const educationList=userEducation.language.slice(0,2)
       
        const message="Language"
        const apiKey="languages"
        const fieldSet={
            title:"languageName",
            subTitle:"proficiencyLevel",
        }
        return (
           <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey} auth={auth}/>
        )
}
