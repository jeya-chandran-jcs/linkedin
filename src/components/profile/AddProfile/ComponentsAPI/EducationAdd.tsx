import { educationSupportEdited } from "../../../../utility/componentsApiEnhanceProfile/EducationData";
import FormController from "./FromController";


export default function EducationAdd() {
  return (
    <FormController formStructure={educationSupportEdited} title={"Add Education"} />
  )
}




