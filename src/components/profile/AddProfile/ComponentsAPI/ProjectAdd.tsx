import type { NavigationProps } from "../../../../types/action";
import { projectData } from "../../../../utility/componentsApiEnhanceProfile/projectData";
import FormController from "./FromController";

export default function ProjectAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <FormController formStructure={projectData} title={"Add Projects"} keyMessage={"projects"}
    goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}
    />
  )
}
