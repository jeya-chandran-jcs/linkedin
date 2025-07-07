import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { educationSupportEdited, } from "../../../../utility/AddProfileSupport";
import TextFieldMui from "../../../ActionComp/TextFieldMui";
import { useState } from "react";
import MuiButton from "../../../ActionComp/MuiButton";


export default function EducationAdd() {
  const [formValues,setfromValues]=useState<{[key:string]:string}>({})


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
        <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Education add</Typography>
        <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a className="fa-solid fa-x font-bold text-lg text-gray-600" href="#"></a>

        </Box>
      </Box>
      <Typography color="text.secondary" variant="subtitle2" component="p" sx={{ mt: 0.2, paddingX: "1rem" }} fontSize={"0.8rem"}>* Indicates required</Typography>


      {/* body */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingX: "1.5rem", marginBottom: "0", height:"60vh", overflowY: "auto",  }}>
        {educationSupportEdited.header.fields.map((item, index) => (
          <Box key={index}>
            <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>
            <TextFieldMui fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder}
              value={formValues[item.key] || ""} 
              handleChange={(e)=>setfromValues({...formValues,[item.key]:e.target.value})}
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
        ))}

        {educationSupportEdited.duration.fields.map((item, index) => (
          <Box key={index}>

            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 2, }} >

              {/* Start Date */}
              <FormControl fullWidth sx={{ width: "50%", marginBottom: "10px" }} variant="outlined">
                <Typography color="textSecondary" sx={{ fontSize: "0.8rem" }}>{item.label}</Typography>
                <Select
                  displayEmpty
                 value={formValues[item.monthKey || ""] ?? ""}
                  onChange={(e) => {
                    if(item.monthKey) setfromValues({...formValues,[item.monthKey]:e.target.value})
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span className="text-gray-700 text-md">Month</span>; // or Year
                    }
                    return selected;
                  }}
                  sx={{
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
                >
                  {item.monthValues?.map((m, i) => (
                    <MenuItem key={i} value={m}>{m}</MenuItem>
                  ))}
                </Select>
              </FormControl>



              {/* Start Year */}
              <FormControl fullWidth sx={{ width: "50%", marginTop: "11px" }}>
                {/* <InputLabel>Start Year</InputLabel> */}

                <Select
                  displayEmpty
                   value={item.yearkey ? formValues[item.yearkey] ?? "" : ""}
                  onChange={(e) => {
                    if(item.yearkey) setfromValues({...formValues,[item.yearkey]:e.target.value})
                  }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span className="text-gray-700 text-md">Year</span>; // or Year
                    }
                    return selected;
                  }}
                  sx={{
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
                >
                  {item.yearValues?.map((y, i) => (
                    <MenuItem key={i} value={y}>{y}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>


          </Box>
        ))}

        {educationSupportEdited.footer.fields.map((item, index) => (
          <Box key={index}>
            <Typography component="label" variant="subtitle2" color="textSecondary">{item.label}</Typography>
            <TextFieldMui value={formValues[item.key] || ""} handleChange={(e)=>setfromValues(({...formValues,[item.key]:e.target.value}))} fullWidth={true} name={item.key} type={item.type} variant={"outlined"} placeHolder={item.placeholder} multiLine={item.type==="textArea"} minRow={item.type==="textArea" ? 3 : 1}
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


          </Box>

        ))}
      </Box>
{/* footer */}
      <Box sx={{padding:"1rem",borderTop:"1px solid lightgray",display:"flex",justifyContent:"flex-end" }}>
          <MuiButton text={"save"} type={"button"} variant={"contained"} color={"primary"} sx={{borderRadius:"25px",padding:"4px 2px"}} onClick={()=>console.log(formValues)}/>
      </Box>

    </Box>
  )
}
