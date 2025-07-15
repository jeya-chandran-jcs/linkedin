
import { useUserProfile } from "../../../hooks/UserProfileContext";
import type { EducationProps } from "../../../types/mockDataApi";
import CommonForm from "./commonForm.tsx/CommonForm";

export type EducationProp={
    education:EducationProps[]
}

export default function Education() {
    const userEducation=useUserProfile()
    const educationList=userEducation.education.slice(0,2)
   
    const message="Education"
   
    const fieldSet={
        title:"school",
        subTitle:"degree",
        duration:"true",
        description:"description"
    }
    return (
       <CommonForm commonStructure={fieldSet} message={message} data={educationList}/>
    )
}