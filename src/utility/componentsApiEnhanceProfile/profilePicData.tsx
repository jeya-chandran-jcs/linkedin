
type Field={
   
    key:string,
    label?:string,
    header?:string,
    placeHolder?:string,
    type:string
}

export type SingleFieldProps={
    header:{
        title:string,
         dataKey:string,
        fields:Field[]
    }
}


export const profilePicData:SingleFieldProps = {
  header: {
    title: "Edit Profile Pic",
    dataKey:'photoUrl',
    fields: [
      {
        key: "profilePic",
        label: "Profile Pic",
        header: "Add a link to your professional profile picture. Make sure the image is clear and recent.",
        placeHolder:"Enter image URL (e.g. https://example.com/your-photo.jpg)",
        type: "text"
      }
    ]
  }
};
