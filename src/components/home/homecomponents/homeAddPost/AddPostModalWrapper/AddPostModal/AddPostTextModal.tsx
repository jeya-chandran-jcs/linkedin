import { Box } from '@mui/material'
import TextFieldMui from '../../../../../ActionComp/TextFieldMui'
import MuiButton from '../../../../../ActionComp/MuiButton'

type PostImageModalProps={
    post:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    preview:string | null,
    setPreview:(url:string|null)=>void
}

export default function AddPostTextModal({post,handleChange,preview,setPreview}:PostImageModalProps) {
  return (
     <Box sx={{ padding: "0 1rem" }}>
                    <TextFieldMui value={post} handleChange={handleChange} variant={"outlined"} placeHolder='What do you want to talk about?' fullWidth={true} multiLine={true} minRow={6} type={"textArea"} name={"post"}
                        sx={{
                            fontSize: "1.1rem",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none',
                                },
                                '&:hover fieldset': {
                                    border: 'none',
                                },
                                '&.Mui-focused fieldset': {
                                    border: 'none',
                                },
                            },
                        }}

                    />
                {preview && 
                <Box sx={{position:"relative"}}>
                    <img src={preview} alt={preview} width={"100%"} style={{objectFit:"contain"}}/>
                    <MuiButton text={"X"} fullWidth={false} onClick={()=>setPreview(null)} variant={"contained"} color='secondary' size={"small"} 
                        sx={{
                            position:"absolute",
                            top:"0",
                            right:"1rem"
                        }} 
                    />
                </Box>
                }
    </Box>
  )
}
