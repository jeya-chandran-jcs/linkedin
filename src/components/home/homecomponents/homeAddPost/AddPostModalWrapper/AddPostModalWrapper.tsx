import { Avatar, Box, Tooltip, Typography, } from '@mui/material'
import { useUserHomeContext } from '../../../../../hooks/useHomeContext';
import type { MockDataProps } from '../../../../../types/mockDataApi';
import MuiButton from '../../../../ActionComp/MuiButton';
import { useState } from 'react';
import AddPostTextModal from './AddPostModal/AddPostTextModal';
import AddPostImageModal from './AddPostModal/AddPostImageModal';

export type AddPostModalProps = {

    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function AddPostModalWrapper({ onClick }: AddPostModalProps) {
    const [post, setPost] = useState("")
    const [changeModal,setChangeModal]=useState<boolean>(false)
    const userData = useUserHomeContext()
    const userCurrentId = sessionStorage.getItem("userId")
    const userProfileData = userData.find((singleUser: MockDataProps) => singleUser.id === userCurrentId)
    
    if (!userProfileData) return

    const handleSubmit=()=>{
        alert(post)
    }
    return (
        <Box
            sx={{
                borderRadius: "8px",
                width: "100%",
                border: "1px solid gray",
                position: 'relative',
                overflow: "visible",
                backgroundColor: "white",

            }}>
            {/*Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', padding: "1.3rem 1rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "0.7rem", marginLeft: "2rem" }}>
                    <Avatar src={userProfileData.photoUrl} sx={{ width: 50, height: 50 }} />
                    <Typography>{userProfileData.name}</Typography>
                </Box>
                <MuiButton onClick={onClick} variant='outlined' type='button' text='X'
                    sx={{
                        border: "none",
                        color: "#2e2e2e",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        '&:hover': { backgroundColor: 'white' }
                    }} />
            </Box>

            {/* body */}
            <Box>
                <Box sx={{ padding: "0 1rem",height:"40vh",overflowY:"scroll" }}>
                    {changeModal ?  
                    <AddPostTextModal post={post} handleChange={(e)=>setPost(e.target.value)}/>
                    :
                     <AddPostImageModal />
                    }
                    
                </Box>



                {/* footer */}
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: "1rem", padding: "1rem" }}>
                    <Tooltip title="Add Image" arrow>
                        <span>
                            <MuiButton
                                type="button"
                                variant="outlined"
                                sx={{ fontSize: "1.5rem", border: "none" }}
                                onClick={()=>setChangeModal(true)}
                            >
                                <i className="fa-solid fa-image text-gray-600"></i>
                            </MuiButton>
                        </span>
                    </Tooltip>
                    <Tooltip title="Add a text" arrow>
                        <span>
                            <MuiButton
                                type="button"
                                variant="outlined"
                                sx={{ fontSize: "1.5rem", border: "none" }}
                                onClick={()=>setChangeModal(false)}
                            >
                                <i className="fa-solid fa-file-lines text-gray-600"></i>
                            </MuiButton>
                        </span>
                    </Tooltip>

                </Box>
            </Box>

            <Box sx={{borderTop:"1px solid lightgray",display:"flex",justifyContent:"end",padding:"1rem"}}>
                        <MuiButton text={"post"} type={"button"} variant={"contained"} size={"medium"} sx={{borderRadius:"25px",fontWeight:"600"}} onClick={()=>handleSubmit()}/> 
            </Box>

        </Box>

    )
}










                    // <TextFieldMui value={post} handleChange={(e) => setPost(e.target.value)} variant={"outlined"} placeHolder='What do you want to talk about?' fullWidth={true} multiLine={true} minRow={14    } type={"textArea"} name={"post"}
                    //     sx={{
                    //         fontSize: "1.1rem",
                    //         '& .MuiOutlinedInput-root': {
                    //             '& fieldset': {
                    //                 border: 'none',
                    //             },
                    //             '&:hover fieldset': {
                    //                 border: 'none',
                    //             },
                    //             '&.Mui-focused fieldset': {
                    //                 border: 'none',
                    //             },
                    //         },
                    //     }}

                    // />
