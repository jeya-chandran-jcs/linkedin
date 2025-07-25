// import { Box, Stack, Typography } from "@mui/material";
// import CertificateLogo from "../../../utility/CertificateLogo";
import { useUserProfile } from "../../../hooks/UserProfileContext";
import CommonForm from "./commonForm.tsx/CommonForm";
import type { AuthProps } from "./ProfileUser";


export default function License_Certification({auth}:AuthProps) {
  const userEducation=useUserProfile()
       const educationList=userEducation.certification.slice(0,2)
   
       
      
       const message="License & Certifications"
       const apiKey="license"
       const fieldSet={
           title:"name",
           subTitle:"issuingOrganization",
           duration:"true",
           description:"credentialURL"
       }
       return (
          <CommonForm commonStructure={fieldSet} message={message} data={educationList} apiKey={apiKey} auth={auth}/>
       )
}
