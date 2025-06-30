import React from "react";
import type { MuiButtonProps } from "../../types/action";
import { Button as MuiCoreButton } from "@mui/material";


 function MuiButton({type,variant,disabled,onClick,color,size,fullWidth,className,text,children,sx}:MuiButtonProps) {
    console.log("mui button action running")
  return (
    <MuiCoreButton type={type} variant={variant} disabled={disabled} onClick={onClick} color={color} size={size}
        fullWidth={fullWidth} className={className} sx={sx}
    >{text}{children}</MuiCoreButton>
  )
}

export default React.memo(MuiButton)