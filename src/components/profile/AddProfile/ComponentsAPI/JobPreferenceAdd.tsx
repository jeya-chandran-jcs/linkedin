import { Box, FormControlLabel, Radio, Typography, RadioGroup } from "@mui/material";
import { jobPreferenceData, type FooterValues } from "../../../../utility/componentsApiEnhanceProfile/jobPreferencesData";
import React, { useState } from "react";
import MuiButton from "../../../ActionComp/MuiButton";
import TextFieldMui from "../../../ActionComp/TextFieldMui";
import LocationHelper from "../../../../utility/locationHelper/LocationHelper";
import { useParams } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postData from "../../../../utility/api/postData";
import { API } from "../../../../global";
import type { JobPreferenceFormProps } from "../../../../types/mockDataApi";

type JobPreferenceAddProps = {
    onClick: () => void
}


type ArrayFieldKeys = 'jobTitle' | 'locationType' | 'locationsSite';

export default function JobPreferenceAdd({ onClick }: JobPreferenceAddProps) {
    const [jobPreference, setJobPreference] = useState<JobPreferenceFormProps>({
        jobTitle: [],
        locationType: [],
        locationsSite: [],
        noticePeriod: "",
        expectAnnSalary: "",
        startDate: "",
        employmentTypes: [],
        visibility: "",
    });
    const [show, setShow] = useState<{ [key: string]: boolean }>({
        locationType: true
    })
    const [inputValue, setInputValue] = useState<{ [key: string]: string }>({})
    const {id}=useParams({from:"/user-profile/$id"})
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationFn:(jobPreference:JobPreferenceFormProps)=>postData({API:`${API}/${id}`,method:"PUT",data:{jobPreference}}),
        onSuccess:(data)=>{
            console.log(data)
            queryClient.invalidateQueries({queryKey:['single users']})
            alert("data successfully added")
            onClick()
        },
        onError:(err)=>{
            console.error(err)
        }
    })

    const handleShow = (key: string) => {
        setShow((prev) => ({ ...prev, [key]: true }))
        setInputValue((prev) => ({ ...prev, [key]: "" }))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setInputValue((prev) => ({ ...prev, [key]: e.target.value }))

    }

    const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>, key: string) => {
        if (e.key === "Enter" && inputValue[key]?.trim()) {
            const value = inputValue[key].trim();
            if (['jobTitle', 'locationType', 'locationsSite'].includes(key)) {
                setJobPreference((prev) => ({
                    ...prev,
                    [key]: [...(prev[key as ArrayFieldKeys] as string[]), value],
                }));
            }
            setInputValue((prev) => ({ ...prev, [key]: "" }));
            setShow((prev) => ({ ...prev, [key]: false }));
        }
    };



    const handleCheckBoxToggle = (key: keyof JobPreferenceFormProps, value: string) => {
        if (!Array.isArray(jobPreference[key])) return
        const current = jobPreference[key] as string[]
        const updated = current.includes(value) ?
            current.filter((v) => v !== value) : [...current, value]


        setJobPreference((prev) => ({ ...prev, [key]: updated }))
    }

    const handleSubmit = () => {
        mutation.mutate(jobPreference)
    }
    return (
        <Box sx={{ width: "100%", backgroundColor: "white", border: "1px solid gray", borderRadius: "8px", }}>

            {/* header nav */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid lightgray", padding: "0.7rem" }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Edit job preferences</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-x font-bold text-lg text-gray-600" onClick={onClick}></a>
                </Box>
            </Box>
            <Typography component="p" variant="body2" color={"textSecondary"} sx={{ padding: "0.8rem 0 0.8rem 1rem" }}>* Indicates required</Typography>

            {/* body content */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingX: "1.5rem", marginBottom: "0", height: "60vh", overflowY: "auto", }}>
                {jobPreferenceData.header &&
                    jobPreferenceData.header.map((item, index) => {
                        const key = item.key as keyof JobPreferenceFormProps
                        // const placehodler = item.placeHolder ?? "Add item"
                        console.log(item.key)
                        return (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography fontWeight={500} color={"textSecondary"}>{item.label}</Typography>
                                {item.key !== "locationType" && jobPreference[key].length > 0 &&
                                    (
                                        // values after enter
                                        <Box sx={{ my: 2, display: "flex", flexWrap: "wrap", gap: "0.5rem", }}>
                                            {Array.isArray(jobPreference[key]) &&
                                                (jobPreference[key] as string[]).map((val, i) => (
                                                    <Box key={i} sx={{ display: "flex", alignItems: "center", backgroundColor: "#007a5a", borderRadius: "20px", padding: "0.4rem 0.6rem", gap: "0.4rem" }}>
                                                        <Typography sx={{ color: "white", fontWeight: 600 }}>{val}</Typography>
                                                        <i className="fa-solid fa-xmark text-white cursor-pointer"
                                                            onClick={() => {
                                                                setJobPreference((prev) => ({
                                                                    ...prev,
                                                                    [key]: Array.isArray(prev[key]) ? (prev[key] as string[]).filter((_, index) => index !== i) : prev[key]
                                                                }));
                                                            }}
                                                        ></i>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    )
                                }
                                {/* add button */}
                                {!show[item.key] &&
                                    (
                                        item.key !== "locationType" &&
                                        <MuiButton type={"button"} variant={"outlined"} size={"small"} onClick={() => handleShow(item.key)}
                                            sx={{ borderRadius: "15px", padding: "0.3rem 0.8rem", border: "1.8px solid #0A66C2", fontSize: "13px", fontWeight: "600" }}
                                        ><i className="fa-solid fa-plus px-1"></i>{item?.placeHolder}
                                        </MuiButton>
                                    )
                                }
                                {/* add button input */}
                                {show[item.key] &&
                                    (
                                        item.key === "locationsSite" ? (
                                            <LocationHelper key={item.key} name={item.key} value={inputValue[item.key] || ""}
                                                placeHolder={item.placeHolder} onChange={(val) => setInputValue((prev) => ({ ...prev, [item.key]: val }))}
                                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleInputChange(e, item.key)}
                                            />
                                        )
                                            :
                                            item.key === "locationType" ?
                                                (
                                                    <Box sx={{ display: "flex", flexWrap: 'wrap', gap: "1rem", mt: 1 }}>
                                                        {item.values?.map((locationType, index) => {
                                                            const isSelected = jobPreference.locationType.includes(locationType)
                                                            return (
                                                                <Box key={index} onClick={() => handleCheckBoxToggle(item.key as keyof JobPreferenceFormProps, locationType)}
                                                                    sx={{
                                                                        display: "flex", alignItems: "center", gap: "0.3rem", backgroundColor: isSelected ? "#007a5a" : "white",
                                                                        border: isSelected ? "" : "1px solid darkgray", padding: "0.2rem 0.7rem", borderRadius: "20px"
                                                                    }}
                                                                >
                                                                    <Typography sx={{ color: isSelected ? "white" : "black", fontWeight: "600" }}>{locationType}</Typography>
                                                                    <i className={` fa-solid ${isSelected ? "fa-check" : "fa-plus"} font-semibold ${isSelected ? "text-white" : "text-black"}`}></i>
                                                                </Box>
                                                            )
                                                        })}
                                                    </Box>
                                                )
                                                :
                                                (
                                                    <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeHolder}
                                                        value={inputValue[item.key] || ""}
                                                        handleChange={(e) => handleChange(e, item.key)} onKeyDown={(e) => (handleInputChange(e, key))}
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
                                    )
                                }
                            </Box>
                        )
                    }

                    )
                }

                {jobPreferenceData?.body &&
                    jobPreferenceData.body?.map((item, index) => (
                        <Box key={index} sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Typography color={"textSecondary"}>{item.label}</Typography>
                            {item.type === "text" &&
                                <TextFieldMui name={item.key} type={item.type} placeHolder={item.placeHolder} fullWidth={true} variant={"outlined"}
                                    value={jobPreference[item.key as keyof JobPreferenceFormProps] as string}
                                    handleChange={(e) =>
                                        setJobPreference((prev) => ({
                                            ...prev,
                                            [item.key]: e.target.value,
                                        }))
                                    }
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
                            }

                            {item.type === "radio" && (
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <RadioGroup
                                        value={jobPreference[item.key as keyof JobPreferenceFormProps]}
                                        onChange={(e) =>
                                            setJobPreference((prev) => ({
                                                ...prev,
                                                [item.key]: e.target.value,
                                            }))
                                        }
                                        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginX: "8px" }}
                                    >
                                        {item.values?.map((val, i) => (
                                            <FormControlLabel
                                                key={i}
                                                value={val}
                                                control={
                                                    <Radio
                                                        disableRipple
                                                        sx={{
                                                            p: 0,
                                                            m: 0,
                                                            color: "black",
                                                            "&.Mui-checked": {
                                                                color: "green",
                                                                border: "1px solid green",
                                                            },
                                                            "& .MuiSvgIcon-root": {
                                                                borderRadius: "50%",
                                                                border: "1.5px solid #ccc",

                                                            },
                                                        }}
                                                    />
                                                }
                                                label={<Typography sx={{ color: "#000", fontSize: "14px", paddingLeft: "10px" }}>{val}</Typography>}
                                            />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            )}

                        </Box>
                    ))
                }

                {jobPreferenceData.footer &&
                    jobPreferenceData.footer.map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography color={"textSecondary"}>{item.label}</Typography>
                            {item.type === "checkBox" ?
                                <Box sx={{ display: "flex", flexWrap: 'wrap', gap: "1rem", mt: 1 }}>
                                    {(item.values as string[])?.map((employmentType, index) => {
                                        const isSelected = jobPreference.employmentTypes.includes(employmentType)
                                        return (
                                            <Box key={index} onClick={() => handleCheckBoxToggle(item.key as keyof JobPreferenceFormProps, employmentType)}
                                                sx={{
                                                    display: "flex", alignItems: "center", gap: "0.3rem", backgroundColor: isSelected ? "#007a5a" : "white",
                                                    border: isSelected ? "" : "1px solid darkgray", padding: "0.2rem 0.7rem", borderRadius: "20px"
                                                }}
                                            >
                                                <Typography sx={{ color: isSelected ? "white" : "black", fontWeight: "600" }}>{employmentType}</Typography>
                                                <i className={` fa-solid ${isSelected ? "fa-check" : "fa-plus"} font-semibold ${isSelected ? "text-white" : "text-black"}`}></i>
                                            </Box>
                                        )
                                    })}
                                </Box>
                                :
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <RadioGroup
                                        value={jobPreference.visibility}
                                        onChange={(e) =>
                                            setJobPreference((prev) => ({
                                                ...prev,
                                                visibility: e.target.value,
                                            }))
                                        }
                                        sx={{ display: "flex", flexDirection: "column", gap: "1rem", ml: 1 ,paddingY:"0.3rem"}}
                                    >
                                        {(item.values as FooterValues[])?.map((val, i) => (
                                            <FormControlLabel
                                                key={i}
                                                value={val.title}
                                                control={
                                                    <Radio
                                                        disableRipple
                                                        sx={{
                                                            p: 0,
                                                            color: "black",
                                                            "&.Mui-checked": {
                                                                color: "green",
                                                                border: "1px solid green",
                                                            },
                                                            "& .MuiSvgIcon-root": {
                                                                borderRadius: "50%",
                                                                border: "1.5px solid #ccc",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <Box sx={{ ml: 1 }}>
                                                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                                                            {val.title}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "13px", color: "#555" }}>
                                                            {val.subTitle}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "12px", color: "#888", mt: 0.5 }}>
                                                            {val.description}
                                                        </Typography>
                                                    </Box>
                                                }
                                                sx={{
                                                    alignItems: "flex-start",
                                                    m: 0,
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            }
                        </Box>
                    ))
                }
            </Box>

            <Box sx={{
                padding: "1rem",
                borderTop: "1px solid lightgray",
                display: "flex",
                justifyContent: "end",
                alignItems: "center"
            }}>
                <MuiButton
                    text={"Save"}
                    type={"button"}
                    variant={"contained"}
                    color={"primary"} // Already blue
                    sx={{ borderRadius: "25px", padding: "4px 20px" }}
                    onClick={handleSubmit}
                />
            </Box>
        </Box>
    )
}
