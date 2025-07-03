
export type GetAPIProps={
    API:string,
    message:string
}


export default async function getData({API,message}:GetAPIProps) {
  const response=await fetch(API,{
    method:message
  })   

  if(!response.ok)
  {
    throw new Error(`Request failed`)
  }
  const data=await response.json()
  return  data
}
