import type { SingleFieldProps } from "./profilePicData";




export const AboutData:SingleFieldProps = {
  header: {
    title: "Edit About",
    dataKey:"about",
    fields: [
      {
        key: "about",
        label: "About",
        header: "You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.",
        placeHolder:"Write something about your professional background...",
        type: "textArea"
      }
    ]
  }
};
