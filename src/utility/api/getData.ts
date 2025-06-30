
type APIProps={
    API:string,
    message:string
}


export default async function getData({API,message}:APIProps):Promise<Response | string> {
    try{
        const response=await fetch(API,{
            method:message
        })
        if (!response.ok) 
        {
            console.error(`Request failed with status ${response.status}`);
            return "failed to get or delete";
        }
        return response
    }
    catch(err:unknown)
    {
      if (err instanceof Error) 
      {
        console.error("Couldn't get or delete, something went wrong:", err.message);
        return "failed to get or delete";
      }
      else 
      {
        console.error("Unknown error:", err);
        return "failed to get or delete";
      }
    }
}
