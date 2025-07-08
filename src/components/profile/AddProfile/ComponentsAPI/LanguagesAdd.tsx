import { languageData } from "../../../../utility/componentsApiEnhanceProfile/languageData";
import ArrayController from "./ArrayController";

export default function LanguagesAdd() {
  return (
    <ArrayController formStructure={languageData} title={"Add Languages"} keyMessage={"language"}/>
  )
}
