


type LogoProps={
  height:number,
  width:number,
}

export default function CertificateLogo({height,width}:LogoProps) {
 return (
    <div  style={{ height: `${height}px`, width: `${width}px` }} className={` relative bg-orange-200/25`} >
      <div className="h-8 w-8 bg-blue-400/35 rounded-full translate-x-3.5 translate-y-1.5 mix-blend-multiply" />
      <div className="h-5 w-5 bg-blue-400/25 rounded-full translate-x-2 translate-y-[-8px] mix-blend-multiply" />
    </div>
  )
}
