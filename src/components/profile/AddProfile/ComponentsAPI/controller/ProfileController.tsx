import { Box, Typography, type SelectChangeEvent } from "@mui/material";
import TextFieldMui from "../../../../ActionComp/TextFieldMui";
import React, { useEffect, useState } from "react";
import MuiButton from "../../../../ActionComp/MuiButton";
import type { FromStructureGrouped } from "../../../../../utility/componentsApiEnhanceProfile/AddProfileSupport";
import type { MockDataProps } from "../../../../../types/mockDataApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import getData from "../../../../../utility/api/getData";
import { API } from "../../../../../global";
import getCurrentUserId from "../../../../../utility/getCurrentUserId";
import postData from "../../../../../utility/api/postData";
import MuiSelect from "../../../../ActionComp/MuiSelect";
import { Link } from "@tanstack/react-router";


type FormController = {
    [key: string]: string
}
type FromControllerProps = {
    formStructure: FromStructureGrouped,
    title: string,
    keyMessage?: keyof MockDataProps,
    goToNext?: () => void,
    goToPrev?: () => void,
    hasNext?: boolean,
    hasPrev?: boolean
}

type GeoapifyFeature = {
    properties: {
        formatted: string;
    };
};

export default function ProfileController({ formStructure, title, keyMessage, goToNext, goToPrev, hasNext, hasPrev }: FromControllerProps) {
    const [formValues, setfromValues] = useState<FormController>({ pronouns: "He/Him" })
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [cityQuery, setCityQuery] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)

    const { data } = useQuery({
        queryKey: ["Form Controller profile"],
        queryFn: () => getData({ API, message: "GET" })
    })

    const mutation = useMutation({
        mutationFn: (newField: FormController) => postData({ API: `${API}/${user?.id}`, method: "PUT", data: { [keyMessage as string]: newField } }),
        onSuccess: (data) => {
            console.log("data added from form values", data)
            alert("data added")
        },
        onError: (err) => {
            console.log("something went wrong while adding form values", err)
            alert("failed")
        }
    })

    useEffect(() => {
        const delayBounce = setTimeout(() => {
            if (show && cityQuery.length > 2) {
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
                    cityQuery
                )}&limit=5&apiKey=5c6e66d0a7c441c2b30c6f7f7bb0932c`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("data suggestion features", data)
                        setSuggestions(data.features.map((f: GeoapifyFeature) => f.properties.formatted))
                    })
                    .catch((err) => console.log(err))
            }
        }, 500)
        return () => clearTimeout(delayBounce)
    }, [cityQuery])

    if (!data) return
    if (!keyMessage) {
        return
    }

    const user = getCurrentUserId(data)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setfromValues((prev) => ({ ...prev, [name]: value }))

        if (name === "city") {
            setCityQuery(value)
            setShow(true)
        }

    }

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target
        setfromValues((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const allFields = [
            ...(formStructure.header?.fields || []),
            ...(formStructure.footer?.fields || [])
        ]

        const isAnyFieldEmpty = allFields.some((field) => {
            const value = formValues[field.key]
            return !value || value.trim() === ""
        })

        if (isAnyFieldEmpty) {
            alert("please fill all the fields")
            return
        }
        mutation.mutate(formValues)
        console.log(formValues)
        setfromValues({})
    }


    return (
        <Box sx={{
            borderRadius: "8px",
            width: "82%",
            marginX: "auto",
            border: "1px solid #D3D3D3",
            // position: 'relative',
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

                            {item.values ?
                                <MuiSelect fullWidth={true} formSx={{ width: "100%", marginBottom: "10px" }} variant={"outlined"}
                                    name={item.key} displayEmpty={true} value={item.key ? formValues[item.key] ?? "" : ""}
                                    values={item.values as string[]}
                                    handleSelectChange={handleSelectChange} placeHolder={item.placeholder || "Please Choose"}
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

                                :
                                <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
                                    value={formValues[item.key] || ""}
                                    handleChange={handleChange}
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
                            }




                        </Box>
                    ))
                }

                {formStructure.body && formStructure.body.fields.length > 0 &&
                    (
                        formStructure.body.fields.map((item, index) => (
                            <Box key={index}>

                                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, }} >

                                    {/* Start Date */}
                                    {item.type === "suggestion" ?
                                        (
                                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5rem", width: "100%" }}>
                                                <Typography variant="h6" component="h6">{item.label}</Typography>
                                                <Link to={item.link}>
                                                    <Typography component="h6" variant="h6" color={"primary"} fontSize={"1rem"} >
                                                        <i className="fa-solid fa-plus mr-2 text-md"></i>
                                                        {item.placeholder}
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        )
                                        :
                                        <Box>
                                            <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>
                                            <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
                                                value={formValues[item.key] || ""}
                                                handleChange={handleChange}
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
                                    }
                                </Box>


                            </Box>
                        ))
                    )
                }

                {formStructure.location && formStructure.location.fields.length > 0 &&
                    (
                        formStructure.location.fields.map((item, index) => (
                            <Box key={index}>
                                {item.key === "city" ?
                                    (
                                        <>
                                            <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

                                            <TextFieldMui value={formValues[item.key] || ""} handleChange={handleChange} fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
                                                sx={{
                                                    position: "relative",
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

                                            {suggestions.length > 0 && (
                                                <Box sx={{

                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                    maxHeight: "150px",
                                                    overflowY: "auto",
                                                    backgroundColor: "#fff",
                                                    zIndex: 1000,

                                                    width: "100%",


                                                }}>
                                                    {suggestions.map((place, i) => (
                                                        <Box key={i} sx={{ padding: "8px", borderBottom: "1px solid #eee", cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" }, }}
                                                            onClick={() => {
                                                                setCityQuery(place)
                                                                setfromValues((prev) => ({ ...prev, city: place }))
                                                                setSuggestions([])
                                                                setShow(false)
                                                            }}


                                                        >
                                                            {place}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </>
                                    ) :
                                    <>
                                        <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

                                        <TextFieldMui value={formValues[item.key] || ""} handleChange={handleChange} fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder} multiLine={item.type === "textArea"} minRow={item.type === "textArea" ? 3 : 1}
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
                                    </>
                                }
                            </Box>

                        ))
                    )
                }


                {formStructure.footer && formStructure.footer.fields.length > 0 &&
                    (
                        formStructure.footer.fields.map((item, index) => (
                            <Box key={index}>
                                <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

                                {item.values ? (
                                    <MuiSelect fullWidth={true} formSx={{ width: "100%", marginBottom: "10px" }} variant={"outlined"}
                                        name={item.key} displayEmpty={true} value={item.key ? formValues[item.key] ?? "" : ""}
                                        values={item.values}
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
                                )
                                    :
                                    <TextFieldMui value={formValues[item.key] || ""} handleChange={handleChange} fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder} multiLine={item.type === "textArea"} minRow={item.type === "textArea" ? 3 : 1}
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



                            </Box>

                        ))
                    )
                }
            </Box>
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
                        color="primary"
                        disabled={!hasPrev}
                        onClick={goToPrev}
                        sx={{ borderRadius: "25px", padding: "4px 16px" }}
                    />
                    <MuiButton
                        text={"Next"}
                        type={"button"}
                        variant={"outlined"}
                        color="primary"
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
                    color={"primary"}
                    sx={{ borderRadius: "25px", padding: "4px 24px" }}
                    onClick={handleSubmit}
                />
            </Box>


        </Box>
    )
}
