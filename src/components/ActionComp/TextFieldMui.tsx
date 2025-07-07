import { TextField, type SxProps } from '@mui/material'

type MuiInputProps={
    fullWidth:boolean,
    name:string,
    placeHolder?:string,
    variant:"outlined" | "filled" | "standard",
    type:string,
    multiLine?:boolean,
    minRow?:number,
    value:string ,
    handleChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    sx?:SxProps
}


export default function TextFieldMui({handleChange,fullWidth,name,placeHolder,variant,type,sx,multiLine,minRow,value}:MuiInputProps) {
  return (
    <TextField fullWidth={fullWidth} name={name} placeholder={placeHolder} variant={variant} type={type}  sx={sx} multiline={multiLine} minRows={minRow} 
        onChange={handleChange} value={value}
    />
  )
}
