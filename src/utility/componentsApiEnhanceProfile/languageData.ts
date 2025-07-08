import type { FromStructureGrouped } from "./AddProfileSupport";

export const languageData: FromStructureGrouped = {
  header: {
    title: "Add Language",
    fields: [
      {
        key: "languageName",
        label: "Language",
        placeholder: "Ex: English, Tamil, Japanese",
        type: "text"
      }
    ]
  },
  footer: {
    title: "Proficiency",
    fields: [
      {
        key: "proficiencyLevel",
        label: "Proficiency level",
        placeholder: "Please select",
        type: "text",
        values: ["Beginner", "Intermediate", "Professional", "Native/Bilingual"]
      }
    ]
  }
};
