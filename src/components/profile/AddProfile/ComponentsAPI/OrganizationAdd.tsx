import type { NavigationProps } from "../../../../types/action";
import { organizationData } from "../../../../utility/componentsApiEnhanceProfile/organizationData";
import FormController from "./controller/FromController";

export default function OrganizationAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <FormController formStructure={organizationData} title={"Add Organization"} keyMessage={"organization"}
    goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}
    />
  )
}
