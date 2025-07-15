
import FormController from "./controller/FromController";
import { license_certification } from "../../../../utility/componentsApiEnhanceProfile/licence_certification";
import type { NavigationProps } from "../../../../types/action";


export default function CertificationAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  // keyMessage={"language"}
    return (
      <FormController formStructure={license_certification} title={"Add License & Certification"} keyMessage={"certification"} 
      goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}
      />
    )
}
