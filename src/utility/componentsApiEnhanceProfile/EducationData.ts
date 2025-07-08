import { ProfileMonth, ProfileYear, type FromStructureGrouped } from "./AddProfileSupport";

export const educationSupportEdited: FromStructureGrouped = {
  header: {
    title: "School Info",
    fields: [
      {
        key: "school",
        label: "School",
        placeholder: "Boston University",
        type: "text",
      },
      {
        key: "degree",
        label: "Degree",
        placeholder: "Ex. Bachelor's",
        type: "text",
      },
      {
        key: "fieldOfStudy",
        label: "Field of study",
        placeholder: "Ex. Business",
        type: "text",
      },
    ],
  },
  duration: {
    title: "Duration",
    fields: [
      {
        key: "startDate",
        label: "Start Date",
        type: "month",
        monthKey:"monthStart",
      yearkey:"yearStart",
        monthValues:ProfileMonth,
        yearValues:ProfileYear
      },
      {
        key: "endDate",
        label: "End of Date (or expected)",
        type: "month",
        monthKey:"monthEnd",
       yearkey:"yearEnd",
        monthValues:ProfileMonth,
        yearValues:ProfileYear
      }
    ],
  },
  footer: {
    title: "Grade",
    fields: [
      {
        key: "grade",
        label: "Grade",
        placeholder: "Ex. A+ or 7.5/10",
        type: "text",
      },{
        key: "activities",
        label: "Activities & Societies",
        placeholder: "Ex. Alpha Phi Omega, Marching Band, Volleyball",
        type: "textArea",
      },{
        key: "description",
        label: "Description",
        placeholder: "Describe your experience, accomplishments, etc.",
        type: "textArea",
      },
    ],
  },
};
