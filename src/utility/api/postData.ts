

type PostDataProps={
    API:string,
    message:string,
    data:[]
}

export default async function postData({API,message,data}:PostDataProps) {
    try
    {
        const response=await fetch(API,{
            method:message,
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(data)
        })

        if(!response.ok)
        {
            console.error("error while post or put data in try")
            return response
        }
        console.log("data posted successfully")
        return response
    }
    catch(err:unknown)
    {
        if(err instanceof Error)
        {
            console.error("error while post or put data",err.message)
            return err.message
        }
        else
        {
            console.error("error while post or put data",err)
            return err
        }
    }
}
