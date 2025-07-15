import type { NavigationProps } from "../../../../types/action";
import { skillsData } from "../../../../utility/componentsApiEnhanceProfile/SkillData";
import ArrayController from "./controller/ArrayController";

export default function SkillsAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <ArrayController formStructure={skillsData} title={"ADD Skills"} keyMessage={"skill"}
      goToNext={goToNext} goToPrev={goToPrev} hasPrev={hasPrev} hasNext={hasNext}
    />
  )
}
