import { Box, Typography } from '@mui/material'
import TextFieldMui from '../../components/ActionComp/TextFieldMui';
import { useEffect, useState } from 'react';
import MuiButton from '../../components/ActionComp/MuiButton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getData from '../api/getData';
import { API } from '../../global';
import postData from '../api/postData';
import getCurrentUserId from '../getCurrentUserId';


type ModalAboutProps = {
  handleClose: () => void;
};
export default function ModalAbout({ handleClose }: ModalAboutProps) {
  const [about, setAbout] = useState<string>("")
   const queryClient=useQueryClient()
    const { data } = useQuery({
        queryKey: ["about"],
        queryFn: () => getData({ API, message: "GET" })
    })

 
    const mutation = useMutation({
        mutationFn: (addAbout:string) => postData({ API: `${API}/${user?.id}`, method: "PUT", data: { about:addAbout } }),
        onSuccess: (data) => {
            console.log("data added successfully", data)
            alert("data successfully added")
            queryClient.invalidateQueries({ queryKey: ["array data"] });
        },
        onError: (err) => {
            console.log("something went wrong", err)
            console.error(err)
        }
    })

    if (!data) return
    const user = getCurrentUserId(data)

  const handleSubmit=()=>{
      mutation.mutate(about)
      queryClient.invalidateQueries({queryKey:["about"]})
      handleClose()
  }

  
  return (
    <Box sx={{
      borderRadius: "8px",
      width: "100%",
      border: "1px solid #D3D3D3",
      position: 'relative',
      overflow: "clip",
      // padding: '1rem',
      display: "flex",
      flexDirection: "column",
      // gap: "1.3rem",
      backgroundColor: "white"
    }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid lightgray", padding: "1rem" }}>
        <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>Edit About</Typography>
        <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center", position: "relative" }}>
          <i onClick={handleClose} className="fa-solid fa-x font-bold text-lg text-gray-600"></i>
        </Box>

      </Box>


      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1rem", padding: "1rem" }}>
        <Typography sx={{ color: "gray", fontWeight: "300", fontSize: "0.9rem" }}>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</Typography>

        <TextFieldMui fullWidth={true} name={"about"} value={data?.about?.trim() ? data.about : about} handleChange={(e) => setAbout(e.target.value)} variant={"outlined"} type={"text"}
          placeHolder={"Write something about your professional background..."} multiLine={true} minRow={5}
          sx={{
            '& .MuiOutlinedInput-root': {
              padding: 0,
              '& input, & textarea': {
                padding: "6px 10px"
              },
              '& fieldset': {
                borderColor: '#808080'
              },
              '&:hover fieldset': {
                borderColor: '#000'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#333',
              }
            }
          }}
        />
      </Box>


      <Box sx={{
        padding: "1rem",
        borderTop: "1px solid lightgray",
        display: "flex",
        justifyContent:"end",
        alignItems: "center"
      }}>
        <MuiButton
          text={"Save"}
          type={"button"}
          variant={"contained"}
          color={"primary"} // Already blue
          sx={{ borderRadius: "25px", padding: "4px 20px" }}
          onClick={handleSubmit}
        />
      </Box>

    </Box>
  )
}
