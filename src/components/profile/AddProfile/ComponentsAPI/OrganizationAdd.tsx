import { organizationData } from "../../../../utility/componentsApiEnhanceProfile/organizationData";
import FormController from "./FromController";

export default function OrganizationAdd() {
  return (
    <FormController formStructure={organizationData} title={"Add Organization"}/>
  )
}
