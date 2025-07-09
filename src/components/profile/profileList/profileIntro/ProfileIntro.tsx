import React from 'react'

export default function ProfileIntro() {
  return (
    <div>ProfileIntro</div>
  )
}



// import { Box, Typography, type SelectChangeEvent } from "@mui/material";
// import TextFieldMui from "../../../ActionComp/TextFieldMui";
// import React, { useState } from "react";
// import MuiButton from "../../../ActionComp/MuiButton";
// import type { FromStructureGrouped } from "../../../../utility/componentsApiEnhanceProfile/AddProfileSupport";
// import type { MockDataProps } from "../../../../types/mockDataApi";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import getData from "../../../../utility/api/getData";
// import { API } from "../../../../global";
// import getCurrentUserId from "../../../../utility/getCurrentUserId";
// import postData from "../../../../utility/api/postData";
// import MuiSelect from "../../../ActionComp/MuiSelect";


// type FormController = {
//     [key: string]: string
// }
// type FromControllerProps = {
//     formStructure: FromStructureGrouped,
//     title: string,
//     keyMessage?: keyof MockDataProps,
    
// }

// export default function ProfileIntro({ formStructure, title, keyMessage, }: FromControllerProps) {
//     const [formValues, setfromValues] = useState<FormController>({})
//     const { data } = useQuery({
//         queryKey: ["Form Controller profile"],
//         queryFn: () => getData({ API, message: "GET" })
//     })

//     const mutation = useMutation({
//         mutationFn: (newField: FormController[]) => postData({ API: `${API}/${user?.id}`, method: "PUT", data: { [keyMessage as string]: newField } }),
//         onSuccess: (data) => {
//             console.log("data added from form values", data)
//             alert("data added")
//         },
//         onError: (err) => {
//             console.log("something went wrong while adding form values", err)
//             alert("failed")
//         }
//     })

//     if (!data) return
//     if (!keyMessage) {
//         return
//     }

//     const user = getCurrentUserId(data)
//     // console.log("current user",user)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target
//         setfromValues((prev) => ({ ...prev, [name]: value }))
//     }

//     const handleSelectChange = (e: SelectChangeEvent<string>) => {
//         const { name, value } = e.target
//         setfromValues((prev) => ({ ...prev, [name]: value }))
//     }

//     const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault()

//         const allFields = [
//             ...(formStructure.header?.fields || []),
//             ...(formStructure.footer?.fields || [])
//         ]

//         const isAnyFieldEmpty = allFields.some((field) => {
//             const value = formValues[field.key]
//             return !value || value.trim() === ""
//         })

//         if (isAnyFieldEmpty) {
//             alert("please fill all the fields")
//             return
//         }

//         const dataCheck = user?.[keyMessage]

//         const existingValues = Array.isArray(dataCheck) ? dataCheck as FormController[] : []
//         const updateField = [...existingValues, formValues]
//         mutation.mutate(updateField)
//         console.log(updateField)
//         setfromValues({})
//     }


//     return (
//         <Box sx={{
//             borderRadius: "8px",
//             width: "82%",
//             marginX: "auto",
//             border: "1px solid #D3D3D3",
//             position: 'relative',
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-start",
//             gap: "1.3rem",
//             backgroundColor: "white"
//         }}>
//             {/* header */}
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #D3D3D3", padding: "1rem" }}>
//                 <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>{title}</Typography>
//                 <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
//                     <a className="fa-solid fa-x font-bold text-lg text-gray-600" href="/user-profile"></a>

//                 </Box>
//             </Box>
//             <Typography color="text.secondary" variant="subtitle2" component="p" sx={{ mt: 0.2, paddingX: "1rem" }} fontSize={"0.8rem"}>* Indicates required</Typography>


//             {/* body */}
//             <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingX: "1.5rem", marginBottom: "0", height: "60vh", overflowY: "auto", }}>
//                 {formStructure.header && formStructure.header.fields.length > 0 &&
//                     formStructure.header.fields.map((item, index) => (
//                         <Box key={index}>
//                             <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

//                             {item.values ?
//                                 <MuiSelect fullWidth={true} formSx={{ width: "100%", marginBottom: "10px" }} variant={"outlined"}
//                                     name={item.key} displayEmpty={true} value={item.key ? formValues[item.key] ?? "" : ""}
//                                     values={item.values as string[]}
//                                     handleSelectChange={handleSelectChange} placeHolder={item.placeholder || "Please Choose"}
//                                     selectSx={{
//                                         fontSize: "14px",
//                                         borderRadius: "4px",
//                                         backgroundColor: "#fff",
//                                         '& .MuiOutlinedInput-notchedOutline': {
//                                             border: "1.5px solid #808080",
//                                         },
//                                         '&:hover .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '& .MuiSelect-select': {
//                                             padding: "6px 10px",
//                                         },
//                                     }}
//                                 />

//                                 :
//                                 <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
//                                     value={formValues[item.key] || ""}
//                                     handleChange={handleChange}
//                                     sx={{
//                                         '& .MuiOutlinedInput-root': {

//                                             borderRadius: "4px",
//                                             fontSize: '14px',
//                                             backgroundColor: '#fff',
//                                             padding: '4px 2px',
//                                             '& input': {
//                                                 padding: "3px 10px"
//                                             },
//                                             '& fieldset': {
//                                                 border: "1.5px solid #808080"
//                                             },
//                                             '&:hover fieldset': {
//                                                 border: '2px solid black',
//                                             },
//                                             '&.Mui-focused fieldset': {

//                                                 border: '2px solid black',
//                                             }
//                                         }
//                                     }}

//                                 />
//                             }




//                         </Box>
//                     ))
//                 }

//                 {formStructure.duration && formStructure.duration.fields.length > 0 &&
//                     (
//                         formStructure.duration.fields.map((item, index) => (
//                             <Box key={index}>

//                                 <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 2, }} >

//                                     {/* Start Date */}
//                                      <MuiSelect fullWidth={true} formSx={{ width: "50%", marginBottom: "10px" }} variant={"outlined"}
//                                     name={item.monthKey as string} label={item.label} displayEmpty={true} value={formValues[item.monthKey || ""] ?? ""}
//                                     values={item.monthValues as string[] }
//                                     handleSelectChange={handleSelectChange} placeHolder={"Month"}
//                                     selectSx={{
//                                         fontSize: "14px",
//                                         borderRadius: "4px",
//                                         backgroundColor: "#fff",
//                                         '& .MuiOutlinedInput-notchedOutline': {
//                                             border: "1.5px solid #808080",
//                                         },
//                                         '&:hover .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '& .MuiSelect-select': {
//                                             padding: "6px 10px",
//                                         },
//                                     }}
//                                 />
                                   

//                                     {/* Start Year */}
//                                      <MuiSelect fullWidth={true} formSx={{ width: "50%",marginTop:"8px" }} variant={"outlined"}
//                                     name={item.yearkey as string}  displayEmpty={true} value={item.yearkey ? formValues[item.yearkey] ?? "" : ""}
//                                     values={item.yearValues as number[] }
//                                     handleSelectChange={handleSelectChange} placeHolder={"Year"}
//                                     selectSx={{
//                                         fontSize: "14px",
//                                         borderRadius: "4px",
//                                         backgroundColor: "#fff",
//                                         '& .MuiOutlinedInput-notchedOutline': {
//                                             border: "1.5px solid #808080",
//                                         },
//                                         '&:hover .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '& .MuiSelect-select': {
//                                             padding: "6px 10px",
//                                         },
//                                     }}
//                                 />

//                                 </Box>


//                             </Box>
//                         ))
//                     )
//                 }


//                 {formStructure.footer && formStructure.footer.fields.length > 0 &&
//                     (
//                         formStructure.footer.fields.map((item, index) => (
//                             <Box key={index}>
//                                 <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>

//                                 {item.values ? (
//                                     <MuiSelect fullWidth={true} formSx={{ width: "100%",marginBottom: "10px" }} variant={"outlined"}
//                                     name={item.key}  displayEmpty={true} value={item.key ? formValues[item.key] ?? "" : ""}
//                                     values={item.values }
//                                     handleSelectChange={handleSelectChange} placeHolder={item.placeholder}
//                                     selectSx={{
//                                         fontSize: "14px",
//                                         borderRadius: "4px",
//                                         backgroundColor: "#fff",
//                                         '& .MuiOutlinedInput-notchedOutline': {
//                                             border: "1.5px solid #808080",
//                                         },
//                                         '&:hover .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                                             border: '2px solid black',
//                                         },
//                                         '& .MuiSelect-select': {
//                                             padding: "6px 10px",
//                                         },
//                                     }}
//                                 />
//                                 )
//                                     :
//                                     <TextFieldMui value={formValues[item.key] || ""} handleChange={handleChange} fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder} multiLine={item.type === "textArea"} minRow={item.type === "textArea" ? 3 : 1}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {

//                                                 borderRadius: "4px",
//                                                 fontSize: '14px',
//                                                 backgroundColor: '#fff',
//                                                 padding: '4px 2px',
//                                                 '& input, & textarea': {
//                                                     padding: "6px 10px",
//                                                     fontFamily: 'inherit',
//                                                     fontSize: "14px",
//                                                     lineHeight: 1.5,
//                                                 },
//                                                 '& fieldset': {
//                                                     border: "1.5px solid #808080"
//                                                 },
//                                                 '&:hover fieldset': {
//                                                     border: '2px solid black',
//                                                 },
//                                                 '&.Mui-focused fieldset': {

//                                                     border: '2px solid black',
//                                                 }
//                                             }
//                                         }}
//                                     />
//                                 }



//                             </Box>

//                         ))
//                     )
//                 }
//             </Box>
//             <Box sx={{ padding: "1rem", borderTop: "1px solid lightgray", display: "flex", justifyContent: "flex-end" }}>
//                 <MuiButton text={"save"} type={"button"} variant={"contained"} color={"primary"} sx={{ borderRadius: "25px", padding: "4px 2px" }} onClick={handleSubmit} />
//             </Box>

//         </Box>
//     )
// }
