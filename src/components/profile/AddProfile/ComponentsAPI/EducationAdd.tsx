import type { NavigationProps } from "../../../../types/action";
import { educationSupportEdited } from "../../../../utility/componentsApiEnhanceProfile/EducationData";
import FormController from "./controller/FromController";


export default function EducationAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <FormController formStructure={educationSupportEdited} title={"Add Education"} keyMessage={"education"}  goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}/>
  )
}




