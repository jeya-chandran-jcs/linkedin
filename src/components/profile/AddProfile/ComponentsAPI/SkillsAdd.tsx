import { skillsData } from "../../../../utility/componentsApiEnhanceProfile/SkillData";
import FormController from "./FromController";

export default function SkillsAdd() {
  return (
    <FormController formStructure={skillsData} title={"ADD Skills"}/>
  )
}
