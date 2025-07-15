import type { SingleFieldProps } from "./profilePicData";



export const BackGroundPicData:SingleFieldProps = {
  header: {
    title: "Edit BackGround Pic",
    dataKey:"backGroundPic",
    fields: [
      {
        key: "backGroundPic",
        label: "BackGround Pic",
        header: "Add a link to your professional BackGround picture. Make sure the image is clear .",
        placeHolder:"Enter image URL (e.g. https://example.com/your-photo.jpg)",
        type: "text"
      }
    ]
  }
};
