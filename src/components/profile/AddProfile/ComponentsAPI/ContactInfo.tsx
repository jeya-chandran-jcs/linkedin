import type { NavigationProps } from "../../../../types/action";
import { contactSupport } from "../../../../utility/componentsApiEnhanceProfile/contactData";
import FormController from "./controller/FromController";


export default function ContactInfo({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <FormController formStructure={contactSupport} title={"Add Contact"} keyMessage={"contact"}  goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}/>
  )
}




