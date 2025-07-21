import { Box, Button, Typography } from "@mui/material";

import Or from "../../utility/Or";
// import CloudImageUploader from "../base/CloudImageUploader";
import type React from "react";
import { useState } from "react";
import TextFieldMui from "./TextFieldMui";

type AddPostImageProps = {
  image: string,
  setImage: (file: File | null) => void,
  preview: string,
  setPreview: (url: string | null) => void,

}

export default function AddPostImageModal({ image, setImage, preview, setPreview }: AddPostImageProps) {
  const [showFileInput, setShowFileInput] = useState<boolean>(true)
  const [showUrlInput, setShowUrlInput] = useState<boolean>(true)


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowUrlInput(false)
    const file = e.target.files?.[0];
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreview(e.target.value)
    setShowFileInput(false)
  }
  return (
    <Box sx={{ paddingY: "1rem", backgroundColor: "#f8fdff" }}>
      <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: "1rem" }}
        onClick={() => {
          setShowFileInput(true)
          setShowUrlInput(true)
        }}>
        <Box component={"img"} src="postimage3.webp" sx={{ width: "150px", height: "200px", objectFit: "cover", backgroundColor: "white" }} alt="poast" />
        {
          showFileInput ?
            <>
              <Typography component={"h5"} variant="h5">Select files to begin</Typography>
              <Typography component={"p"} variant="subtitle2" color="textSecondary">Share images or a single video in your post.</Typography>
            </>
            :
            <Typography component={"h5"} variant="h5">Add Image Url </Typography>
        }

        {showFileInput &&
          <Button component="label" variant="contained" size="medium" fullWidth={false}
            sx={{
              borderRadius: "15px",
              boxShadow: "none",
              padding: "4px 12px",
              "&:hover": {
                backgroundColor: "#004182",
              },
            }}
          >
            Upload From Computer
            <input type="file" accept="image/*" hidden onChange={handleFileChange} />
          </Button>
        }
        {preview && <img src={preview} alt="preview" width={200} />}
        <Box sx={{ width: "80%" }}>
          {(showFileInput && showUrlInput) && <Or />}
        </Box>
        {/* <CloudImageUploader /> */}

        {showUrlInput && <TextFieldMui fullWidth={false} value={preview} placeHolder="Add Image Url" name="cloudImage" type="text" variant={"outlined"} sx={{ backgroundColor: "white", width: "70%" }}
          handleChange={handleUrlChange}
        />}
      </Box>
    </Box>
  )
}
