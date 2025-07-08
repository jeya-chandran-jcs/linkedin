import { ProfileMonth, ProfileYear, type FromStructureGrouped } from "./AddProfileSupport";

export const projectData: FromStructureGrouped = {
  header: {
    title: "Project Info",
    fields: [
      {
        key: "projectName",
        label: "Project name",
        placeholder: "Ex: Inventory Management System",
        type: "text"
      },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your project, tools used, features, etc.",
        type: "textArea"
      }
    ]
  },
  duration: {
    title: "Duration",
    fields: [
      {
        key: "startDate",
        label: "Start date",
        type: "month",
        monthKey: "startMonth",
        yearkey: "startYear",
        monthValues: ProfileMonth,
        yearValues:ProfileYear
      },
      {
        key: "endDate",
        label: "End date",
        type: "month",
        monthKey: "endMonth",
        yearkey: "endYear",
        monthValues: ProfileMonth,
        yearValues:ProfileYear
      }
    ]
  },
  footer: {
    title: "Associated With",
    fields: [
      {
        key: "associatedWith",
        label: "Associated with",
        placeholder: "Ex: School, Internship, Freelance, etc.",
        type: "text"
      }
    ]
  }
};
