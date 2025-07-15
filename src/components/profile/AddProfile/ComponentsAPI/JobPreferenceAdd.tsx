import { Box, TextField, Typography } from "@mui/material";
import { jobPreferenceData } from "../../../../utility/componentsApiEnhanceProfile/jobPreferencesData";
import { useState } from "react";
import MuiButton from "../../../ActionComp/MuiButton";
import TextFieldMui from "../../../ActionComp/TextFieldMui";

type JobPreferenceAddProps = {
    onClick: () => void
}

type JobPreferenceFormProps = {
    jobTitle: string[];
    locationType: string[];
    locationsSite: string[];
    noticePeriod: string;
    expectAnnSalary: string;
    startDate: string;
    employmentTypes: string;
    visibility: string;
}

export default function JobPreferenceAdd({ onClick }: JobPreferenceAddProps) {
    const [jobPreference, setJobPreference] = useState<JobPreferenceFormProps>({
        jobTitle: [],
        locationType: [],
        locationsSite: [],
        noticePeriod: "",
        expectAnnSalary: "",
        startDate: "",
        employmentTypes: "",
        visibility: "",
    });
    const [show, setShow] = useState<{ [key:string]: boolean }>({})
    const [inputValue,setInputValue]=useState<{[key:string]:string}>({})


    const handleShow = (key: string) => {
      setShow((prev)=>({...prev,[key]:true}))
      setInputValue((prev)=>({...prev,[key]:""}))
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>,key:string)=>{
        setInputValue((prev)=>({...prev,[key]:e.target.value}))
        
    }

    const handleInputChange=(e,key)=>{

    }
    return (
        <Box sx={{ width: "100%", backgroundColor: "white", border: "1px solid gray", borderRadius: "8px", }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid lightgray", padding: "0.7rem" }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Edit job preferences</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-x font-bold text-lg text-gray-600" onClick={onClick}></a>
                </Box>
            </Box>

            <Typography component="p" variant="body2" color={"textSecondary"} sx={{ padding: "0.8rem 0 0.8rem 1rem" }}>* Indicates required</Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingX: "1.5rem", marginBottom: "0", height: "60vh", overflowY: "auto", }}>
                {jobPreferenceData.header &&
                    jobPreferenceData.header.map((item, index) =>{
                        const key=item.key as keyof JobPreferenceFormProps
                        const placehodler=item.placeHolder ?? "Add item"
                        
                        return(
                           <Box key={index} sx={{ mb: 2 }}>
                                <Typography fontWeight={500}>{item.label}</Typography>
                                {jobPreference[key].length>0 && 
                                (
                                     <Box sx={{ mt: 1, mb: 1 }}>
                                     {jobPreference[key].map((val, i) => (
                                     <Typography key={i} variant="body2">• {val}</Typography>
                                     ))}
                                     </Box>
                                )}

                                {!show[item.key] && 
                                (
                                   <MuiButton type={"button"} variant={"outlined"} size={"small"} onClick={() => handleShow(item.key)}
                                      sx={{ borderRadius: "15px", padding: "0.3rem 0.6rem", border: "1.8px solid #0A66C2", fontSize: "13px", fontWeight: "600" }}
                                      ><i className="fa-solid fa-plus px-1"></i>{item?.placeHolder}
                                   </MuiButton>  
                                )
                                }

                                {show[item.key] && 
                                (
                                    <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeHolder}
                                        value={inputValue[item.key] || ""}
                                        handleChange={(e)=>handleInputChange(e,item.key)}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {

                                                borderRadius: "4px",
                                                fontSize: '14px',
                                                backgroundColor: '#fff',
                                                padding: '4px 2px',
                                                '& input, & textarea': {
                                                    padding: "6px 10px",
                                                    fontFamily: 'inherit',
                                                    fontSize: "14px",
                                                    lineHeight: 1.5,
                                                },
                                                '& fieldset': {
                                                    border: "1.5px solid #808080"
                                                },
                                                '&:hover fieldset': {
                                                    border: '2px solid black',
                                                },
                                                '&.Mui-focused fieldset': {

                                                    border: '2px solid black',
                                                }
                                            }
                                        }}

                                    /> 
                                )
                                }
                           </Box>
                        )
                    }
                        
                )
                }
            </Box>
        </Box>
    )
}
