
type PenIconProps={
    style?:string,
    symbol?:string
}

export default function Pen({style,symbol}:PenIconProps) {
  return (
    <i  className={`fa-solid fa-${symbol} ${style}`}></i>
  )
}
