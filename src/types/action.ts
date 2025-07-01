import type { Theme } from "@emotion/react"
import type { SxProps } from "@mui/material"
import type React from "react"

export type ButtonProps={
    type:"button" | "submit" | "reset",
    style:string,
    text:string,
    disabled ?:boolean,
    handleSubmit ?:(e: React.MouseEvent<HTMLButtonElement>) => void,
    children?:React.ReactNode
}

export type InputProps={
    type:"text" | "number" | "radio" | "checkbox" | "password" | "email",
    placeHolder?:string,
    readOnly?:boolean,
    checked?:boolean,
    style:string,
    name:string,
    value:string | number | null,
    id?:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export type GoogleLoginButtonIconProps={
    handleLogin:(e:React.MouseEvent<HTMLButtonElement>)=>void
}


export type ShowProps={
    email:boolean,
    password:boolean
}


export type MuiButtonProps={
    type:'button' | 'submit' | 'reset',
    variant:"text" | "outlined" | "contained",
    disabled?:boolean,
    onClick?:()=>void,
    color?:"primary" | "secondary" | "info" | "warning" | "success" | "error",
    size?:"small" | "medium" | "large",
    fullWidth?:boolean,
    className?:string,
    text?:string,
    children?:React.ReactNode,
    sx?:SxProps<Theme>,
    ref?: React.Ref<HTMLButtonElement>
}