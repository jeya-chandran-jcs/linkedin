import { skillsData } from "../../../../utility/componentsApiEnhanceProfile/SkillData";
import ArrayController from "./ArrayController";

export default function SkillsAdd() {
  return (
    <ArrayController formStructure={skillsData} title={"ADD Skills"} keyMessage={"skill"}/>
  )
}
