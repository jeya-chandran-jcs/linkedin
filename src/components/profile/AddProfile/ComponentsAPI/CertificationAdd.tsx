
import FormController from "./FromController";
import { license_certification } from "../../../../utility/componentsApiEnhanceProfile/licence_certification";


export default function CertificationAdd() {
    return (
      <FormController formStructure={license_certification} title={"Add License & Certification"}/>
    )
}
