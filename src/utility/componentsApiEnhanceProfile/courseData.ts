import type { FromStructureGrouped } from "./AddProfileSupport";

export const courseData: FromStructureGrouped = {
  header: {
    title: "Add Course",
    fields: [
      {
        key: "courseName",
        label: "Course name",
        placeholder: "Ex: World History",
        type: "text"
      },
      {
        key: "courseNumber",
        label: "Number",
        placeholder: "Ex: HIS101",
        type: "text"
      }
    ]
  },
  footer: {
    title: "Association",
    fields: [
      {
         key: "associatedWith",
        label: "Associated with",
        placeholder: "Please select",
        type: "text",
        values: ["School", "College", "University", "Online", "Other"]
      }
    ]
  }
};
