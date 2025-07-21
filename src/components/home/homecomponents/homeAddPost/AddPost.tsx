import { Avatar, Box, ClickAwayListener, Typography } from '@mui/material'
import { useUserHomeContext } from '../../../../hooks/useHomeContext'
import type { MockDataProps } from '../../../../types/mockDataApi'
import MuiButton from '../../../ActionComp/MuiButton'
import { useState } from 'react'
import { buttonList, buttonSharedStyles } from '../../../../utility/homeAddPostHelper/buttonIconsAndLabel'
import AddPostModalWrapper from './AddPostModalWrapper/AddPostModalWrapper'

export default function AddPost() {
    const [show,setShow]=useState<boolean>(false)
    const userHomeData = useUserHomeContext()
    const userId = sessionStorage.getItem("userId")
    const userProfileData = userHomeData.find((userProfile: MockDataProps) => userProfile.id === userId)
    
    return (
        <Box sx={{ backgroundColor: "white", padding: "0.5rem", borderRadius: "8px", display: "flex", flexDirection: "column", border: "1px solid #d6d3cf" }}>

            <Box sx={{ display: "flex", alignItems: 'center', gap: "0.4rem", }}>
                <Avatar src={userProfileData?.photoUrl?.trim() ? userProfileData?.photoUrl : "https://tse3.mm.bing.net/th/id/OIP.D0bht621G_7SlAb1CjH6IwHaGF?rs=1&pid=ImgDetMain&o=7&rm=3"} alt="https://i.pinimg.com/736x/cd/3e/d5/cd3ed5a95ef5ac1d694899a51798874b.jpg"
                    sx={{ width: 55, height: 55, objectFit: "contain", border: "2px solid white", backgroundColor: "#f5f5f5" }} />
                <Box sx={{ padding: "0.7rem 0.5rem", border: "1px solid gray", borderRadius: "25px", width: "100%", '&:hover': { backgroundColor: "#f2f2f2" } }} 
                    onClick={()=>setShow(!show)}>
                    <Typography variant='body2' component="p" fontSize={"0.9rem"}>Start a post</Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 0.7rem 0 2.3rem", margin: "1rem 0 0.5rem 0" }}>
                {buttonList.map((item,index)=>(
                    <MuiButton key={index} {...buttonSharedStyles}  onClick={()=>setShow(!show)}><i className={item.iconClass}></i> {item.label}</MuiButton>
                ))}
               
            </Box>
            {show && 
                <Box 
                    sx={{
                            width:"100vw",height:"100vh",position:'fixed',
                            top:0,left:0,
                            display:"flex",justifyContent:'center',
                            alignItems:"self-start",zIndex:"1400",backgroundColor: "rgba(0, 0, 0, 0.5)"
                        }}
                >    
                        <ClickAwayListener onClickAway={()=>setShow(false)}>
                            <Box  sx={{width:"100%",maxWidth:"43%",marginX:"auto",marginTop:"2rem"}}>
                               <AddPostModalWrapper onClick={()=>setShow(!show)}/>
                            </Box>
                        </ClickAwayListener>
                </Box>
            }
        </Box>
    )
}
