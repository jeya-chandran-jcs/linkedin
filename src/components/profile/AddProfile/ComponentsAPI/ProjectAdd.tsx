import { projectData } from "../../../../utility/componentsApiEnhanceProfile/projectData";
import FormController from "./FromController";

export default function ProjectAdd() {
  return (
    <FormController formStructure={projectData} title={"Add Projects"} keyMessage={"projects"}/>
  )
}
