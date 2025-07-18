import { Box } from '@mui/material'
import TextFieldMui from '../../../../../ActionComp/TextFieldMui'

type PostImageModalProps={
    post:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function AddPostTextModal({post,handleChange}:PostImageModalProps) {
  return (
     <Box sx={{ padding: "0 1rem" }}>
                    <TextFieldMui value={post} handleChange={handleChange} variant={"outlined"} placeHolder='What do you want to talk about?' fullWidth={true} multiLine={true} minRow={14    } type={"textArea"} name={"post"}
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
    </Box>
  )
}
