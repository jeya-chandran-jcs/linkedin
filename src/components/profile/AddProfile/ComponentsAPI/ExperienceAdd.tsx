import { experienceSupportEdited } from "../../../../utility/componentsApiEnhanceProfile/Experience";
import FormController from "./FromController";


export default function ExperienceAdd() {
    return (
       <FormController formStructure={experienceSupportEdited} title={"Add Experience"}/>
    )
}
