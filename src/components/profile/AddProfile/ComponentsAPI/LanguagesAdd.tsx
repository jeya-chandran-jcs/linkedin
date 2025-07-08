import { languageData } from "../../../../utility/componentsApiEnhanceProfile/languageData";
import FormController from "./FromController";

export default function LanguagesAdd() {
  return (
    <FormController formStructure={languageData} title={"Add Languages"}/>
  )
}
