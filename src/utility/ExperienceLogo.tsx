


type LogoProps={
  height:number,
  width:number,
}

export default function ExperienceLogo({height,width}:LogoProps) {
 return (
    <div  style={{ height: `${height}px`, width: `${width}px` }} className={` relative bg-orange-200/25`} >
      <div className="h-10 w-6 bg-blue-400/35   mix-blend-darken translate-x-6 translate-y-2" />
      <div className="h-8 w-5 bg-blue-400/25   mix-blend-darken translate-x-3 translate-y-[-24px]" />
    </div>
  )
}
