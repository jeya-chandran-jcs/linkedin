import { type FromStructureGrouped } from "./AddProfileSupport";

export const profileIntroSupport: FromStructureGrouped = {
  header: {
    title: "Personal Information",
    fields: [
      {
        key: "firstName",
        label: "First Name",
        placeholder: "Jeya Chandran",
        type: "text",
      },
      {
        key: "lastName",
        label: "Last Name",
        placeholder: "S",
        type: "text",
      },
      {
        key: "pronouns",
        label: "Pronouns",
        placeholder: "He/Him",
        type: "text",
        values: ["He/Him", "She/Her", "They/Them", "Custom"],
      },
      {
        key: "headline",
        label: "Headline",
        placeholder: "ex: Full Stack Developer | MERN Stack ",
        type: "text",
      },
    ],
  },
  body: {
    title: "Professional Info",
    fields: [
      {
        key: "experience",
        label: "Current Position",
        placeholder: "Add new position",
        type: "suggestion",
        link: "/user-profile/edit/experience"
      },
      {
        key: "industry",
        label: "Industry",
        placeholder: "Software Development",
        type: "text",
      },
      {
        key: "higherEducation",
        label: "Where did you recently get certified or educated?",
        placeholder: "e.g., Udemy, Coursera, College Name",
        type: "text",
      },
      {
        key:"education",
        label:"Eduaction or course",
        placeholder:"Higher eduation or Course",
        type:"suggestion",
        link:"/user-profile/edit/education"
      },
    ],
  },
  location: {
    title: "Location",
    fields: [
      {
        key: "country",
        label: "Country/Region",
        placeholder: "India",
        type: "text",
      },
      {
        key: "city",
        label: "City",
        placeholder: "Bengaluru, Karnataka",
        type: "text",
      },
     
    ],
  },
  footer: {
    title: "Website",
    fields: [
      {
        key:"contactInfo",
        label:"Contact info",
        placeholder:"Add or edit your profile URL, email, and more",
        type:"suggestion"
      },
      {
        key: "link",
        label: "Link",
        placeholder:"https://jeya-chandran-portfolio.netlify.app/",
        type: "text",
      },
      {
        key: "linkText",
        label: "Link Text",
        placeholder: "Portfolio",
        type: "text",
      },
    ],
  },
};
 