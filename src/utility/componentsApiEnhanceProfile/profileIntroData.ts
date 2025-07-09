import { type FromStructureGrouped } from "./AddProfileSupport";

export const introSupport: FromStructureGrouped = {
  personal: {
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
        key: "additionalName",
        label: "Additional Name",
        placeholder: "Ex. Nickname, maiden name",
        type: "text",
      },
      {
        key: "pronouns",
        label: "Pronouns",
        placeholder: "He/Him",
        type: "text",
        values: ["He/Him", "She/Her", "They/Them", "Custom"],
      },
    ],
  },
  professional: {
    title: "Professional Info",
    fields: [
      {
        key: "currentPosition",
        label: "Current Position",
        placeholder: "Add new position",
        type: "text",
      },
      {
        key: "industry",
        label: "Industry",
        placeholder: "Software Development",
        type: "text",
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
  contact: {
    title: "Contact Info",
    fields: [
      {
        key: "portfolioLink",
        label: "Portfolio Link",
        placeholder: "https://jeya-chandran-portfolio.netlify.app/",
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
