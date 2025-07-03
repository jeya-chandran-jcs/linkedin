

export type PostDataProps={
    API:string,
    method:"POST" | "PUT",
    data:unknown
}

export default async function postData({API,method,data}:PostDataProps) {
    try
    {
        const response=await fetch(API,{
            method:method,
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(data)
        })
        const result=await response.json()
      
        if(!response.ok)
        {
            console.error("error while post or put data in try",result)
            return response
        }
        console.log(`data ${method} has successfullt done`,result)
      
        return result
    }
    catch(err:unknown)
    {
        if(err instanceof Error)
        {
            console.error("error while post or put data",err.message)
            return {error:err.message}
        }
        else
        {
            console.error("error while post or put data",err)
            return {error:err}
        }
    }
}
