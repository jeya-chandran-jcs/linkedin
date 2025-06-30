import type { ButtonProps } from "../../types/action";

export default function Button({text,type,handleSubmit,style,disabled,children}:ButtonProps) {
  return (
    <button  type={type} className={style} onClick={handleSubmit} disabled={disabled}>{text} {children}</button>
  )
}
