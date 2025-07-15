import type { NavigationProps } from "../../../../types/action";
import { experienceSupportEdited } from "../../../../utility/componentsApiEnhanceProfile/Experience";
import FormController from "./controller/FromController";


export default function ExperienceAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
    return (
       <FormController formStructure={experienceSupportEdited} title={"Add Experience"} keyMessage={"experience"}
       goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}
       />
    )
}
