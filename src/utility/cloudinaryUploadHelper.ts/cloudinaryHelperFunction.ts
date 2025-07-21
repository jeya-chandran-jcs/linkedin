import { CLOUDAPI } from "../../globalCloudinary";

export async function cloudImageUploader(image: File): Promise<string> {
    try {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", import.meta.env.VITE_APP_CLOUDINARY_NAME)
        formData.append("cloud_name", import.meta.env.VITE_APP_CLOUD_NAME)
        const response = await fetch(CLOUDAPI,{
            method:"POST",
            body:formData
        })
        const imageResponse =await response.json()
     
        if (!response.ok) {
            throw new Error(imageResponse?.error?.message || "Upload failed");
        }
     
        console.log("image successfully uploaded")
        return imageResponse.secure_url
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err)
            return err.message
        }
        console.error(err)
        return String(err)

    }
}