import { useUserHomeContext } from "../../../../hooks/useHomeContext"
import PostCard from "./postCard/PostCard"

export default function AllPost() {

    const userHomeData=useUserHomeContext()
    if(!userHomeData) return

    console.log("userhomdata",userHomeData)
    const allPost=userHomeData.flatMap((user)=>
        user.post.map((post)=>({
            ...post,
            userName:user.name,
            userImage:user.photoUrl,
            userId:user.id,
            headLine:user.profileIntro?.headline
    }))
    )
    console.log("all post",allPost)
   
  return (
    <>
        {allPost.map((userPost)=>(
            <PostCard key={userPost.userId} userPost={userPost}/>
        ))}
    </>
  )
}
