import type { InputProps } from "../../types/action";

export default function Input({name,placeHolder,checked,style,handleChange,readOnly,value,id,type}:InputProps) {
  return (
    <input type={type} checked={checked} name={name} placeholder={placeHolder} onChange={handleChange} readOnly={readOnly} className={style} value={value ?? ""} id={id}/>
  )
}
