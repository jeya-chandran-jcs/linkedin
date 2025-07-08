import { ProfileMonth, ProfileYear, type FromStructureGrouped } from "./AddProfileSupport";

export const experienceSupportEdited: FromStructureGrouped = {
  header: {
    title: "Experience Info",
    fields: [
      {
        key: "title",
        label: "Title",
        placeholder: "Ex. Software Engineer",
        type: "text",
      },
      {
        key: "employmentType",
        label: "Employment Type",
        placeholder: "Ex. Full-time",
        type: "text",
      },
      {
        key: "company",
        label: "Company Name",
        placeholder: "Ex. Google",
        type: "text",
      },
      {
        key: "location",
        label: "Location",
        placeholder: "Ex. Chennai, India",
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
        monthKey: "monthStart",
        yearkey: "yearStart",
        monthValues: ProfileMonth,
        yearValues: ProfileYear
      },
      {
        key: "endDate",
        label: "End of Date (or Present)",
        type: "month",
        monthKey: "monthEnd",
        yearkey: "yearEnd",
        monthValues: ProfileMonth,
        yearValues: ProfileYear
      }
    ],
  },
  footer: {
    title: "Work Details",
    fields: [
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your responsibilities, achievements, etc.",
        type: "textArea",
      },
      {
        key: "skills",
        label: "Skills Used",
        placeholder: "Ex. React, Node.js, MongoDB",
        type: "text",
      }
    ],
  },
};