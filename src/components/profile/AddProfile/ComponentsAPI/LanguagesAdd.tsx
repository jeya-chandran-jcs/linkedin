import type { NavigationProps } from "../../../../types/action";
import { languageData } from "../../../../utility/componentsApiEnhanceProfile/languageData";
import ArrayController from "./ArrayController";

export default function LanguagesAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <ArrayController formStructure={languageData} title={"Add Languages"} keyMessage={"language"} 
    goToNext={goToNext} goToPrev={goToPrev} hasPrev={hasPrev} hasNext={hasNext}
    />
  )
}
