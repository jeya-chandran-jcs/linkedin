import { Box, Typography, type SelectChangeEvent } from "@mui/material";
import TextFieldMui from "../../../../ActionComp/TextFieldMui";
import React, { useState } from "react";
import MuiButton from "../../../../ActionComp/MuiButton";
import type { FromStructureGrouped } from "../../../../../utility/componentsApiEnhanceProfile/AddProfileSupport";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getData from "../../../../../utility/api/getData";
import { API } from "../../../../../global";
import type { MockDataProps } from "../../../../../types/mockDataApi";
import postData from "../../../../../utility/api/postData";
import getCurrentUserId from "../../../../../utility/getCurrentUserId";
import MuiSelect from "../../../../ActionComp/MuiSelect";


type ArrayControllerProps = {
    [key: string]: string
}

type ArrayStructureGrouped = {
    formStructure: FromStructureGrouped,
    title: string,
    keyMessage: keyof MockDataProps,
    goToNext?: () => void,
    goToPrev?: () => void,
    hasNext?: boolean,
    hasPrev?: boolean
}



export default function ArrayController({ formStructure, title, keyMessage, goToNext, goToPrev, hasNext, hasPrev }: ArrayStructureGrouped) {
    // const [formValues, setfromValues] = useState<ArrayControllerProps[]>([])
    const [level, setLevel] = useState<ArrayControllerProps>({})
    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ["array data"],
        queryFn: () => getData({ API, message: "GET" })
    })

    const mutation = useMutation({
        mutationFn: (newSkill: ArrayControllerProps[]) => postData({ API: `${API}/${user?.id}`, method: "PUT", data: { [keyMessage]: newSkill } }),
        onSuccess: (data) => {
            console.log("data added successfully", data)
            alert("data successfully added")
            queryClient.invalidateQueries({ queryKey: ["array data"] });
        },
        onError: (err) => {
            console.log("something went wrong", err)
            console.error(err)
        }
    })

    if (!data) return

    const user = getCurrentUserId(data)



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLevel((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target
        setLevel((prev) => ({ ...prev, [name]: String(value) }))
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const allFields = [
            ...(formStructure.header?.fields || []),
            ...(formStructure.footer?.fields || [])
        ];
        const isAnyFieldEmpty = allFields.some((field) => {
            const value = level[field.key];
            return !value || value.trim() === "";
        });
        if (isAnyFieldEmpty) {
            return alert("Please fill all fields");
        }

        const existingValue: ArrayControllerProps[] = (user?.[keyMessage] as ArrayControllerProps[]) || []
        const updatedArray = [...existingValue, level]
        // setfromValues(updatedArray)
        mutation.mutate(updatedArray)
        setLevel({})
    }


    return (
        <Box sx={{
            borderRadius: "8px",
            width: "82%",
            marginX: "auto",
            border: "1px solid #D3D3D3",
            position: 'relative',
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "1.3rem",
            backgroundColor: "white"
        }}>
            {/* header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #D3D3D3", padding: "1rem" }}>
                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>{title}</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-x font-bold text-lg text-gray-600" href="../"></a>

                </Box>
            </Box>
            <Typography color="text.secondary" variant="subtitle2" component="p" sx={{ mt: 0.2, paddingX: "1rem" }} fontSize={"0.8rem"}>* Indicates required</Typography>


            {/* body */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingX: "1.5rem", marginBottom: "0", height: "60vh", overflowY: "auto", }}>
                {formStructure.header && formStructure.header.fields.length > 0 &&
                    formStructure.header.fields.map((item, index) => (
                        <Box key={index}>
                            <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

                            <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
                                value={level[item.key] || ""}
                                handleChange={handleInputChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {

                                        borderRadius: "4px",
                                        fontSize: '14px',
                                        backgroundColor: '#fff',
                                        padding: '4px 2px',
                                        '& input': {
                                            padding: "3px 10px"
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





                        </Box>
                    ))
                }




                {formStructure.footer && formStructure.footer.fields.length > 0 &&
                    (
                        formStructure.footer.fields.map((item, index) => (
                            <Box key={index}>
                                <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

                                <MuiSelect fullWidth={true} formSx={{ width: "100%", marginBottom: "10px" }} variant={"outlined"}
                                    name={item.key} displayEmpty={true} value={level[item.key] || ""} values={item.values as string[]}
                                    handleSelectChange={handleSelectChange} placeHolder={item.placeholder}
                                    selectSx={{
                                        fontSize: "14px",
                                        borderRadius: "4px",
                                        backgroundColor: "#fff",
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: "1.5px solid #808080",
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            border: '2px solid black',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            border: '2px solid black',
                                        },
                                        '& .MuiSelect-select': {
                                            padding: "6px 10px",
                                        },
                                    }}
                                />

                            </Box>

                        ))
                    )
                }

                {Array.isArray(user?.[keyMessage]) && (user?.[keyMessage] as ArrayControllerProps[]).length > 0 ? (
                    (user?.[keyMessage] as ArrayControllerProps[]).map((item, index) => (
                        <Box key={index} sx={{ padding: "4px 8px", borderBottom: "1px solid #e0e0e0" }}>
                            {Object.entries(item).map(([key, value]) => (
                                <Typography key={key} sx={{ fontSize: "0.9rem", color: "#333" }}>
                                    <strong>{key}:</strong> {value}
                                </Typography>
                            ))}
                        </Box>
                    ))
                ) : (
                    <Typography sx={{ color: "gray" }}>Your added data will show up here.</Typography>
                )}
            </Box>
            {/* footer */}
            <Box sx={{
                padding: "1rem",
                borderTop: "1px solid lightgray",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {/* Left Side */}
                <Box sx={{ display: "flex", gap: 1 }}>
                    <MuiButton
                        text={"Previous"}
                        type={"button"}
                        variant={"outlined"}
                        color="primary" // Changed to blue
                        disabled={!hasPrev}
                        onClick={goToPrev}
                        sx={{ borderRadius: "25px", padding: "4px 16px" }}
                    />
                    <MuiButton
                        text={"Next"}
                        type={"button"}
                        variant={"outlined"}
                        color="primary" // Changed to blue
                        disabled={!hasNext}
                        onClick={goToNext}
                        sx={{ borderRadius: "25px", padding: "4px 16px" }}
                    />
                </Box>

                {/* Right Side */}
                <MuiButton
                    text={"Save"}
                    type={"button"}
                    variant={"contained"}
                    color={"primary"} // Already blue
                    sx={{ borderRadius: "25px", padding: "4px 24px" }}
                    onClick={handleSubmit}
                />
            </Box>


        </Box>
    )
}
