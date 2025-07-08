import { ProfileMonth, ProfileYear, type FromStructureGrouped } from "./AddProfileSupport";

export const organizationData: FromStructureGrouped = {
  header: {
    title: "Organization Info",
    fields: [
      {
        key: "organizationName",
        label: "Organization name",
        placeholder: "Ex. IEEE, NSS",
        type: "text",
      },
      {
        key: "position",
        label: "Position held",
        placeholder: "Ex. President, Member",
        type: "text",
      },
      {
        key: "associatedWith",
        label: "Associated with",
        placeholder: "Please select",
        type: "text",
        values: ["School", "College", "University", "Self", "Other"],
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
        yearValues: ProfileYear,
      },
      {
        key: "endDate",
        label: "End Date",
        type: "month",
        monthKey: "monthEnd",
        yearkey: "yearEnd",
        monthValues: ProfileMonth,
        yearValues: ProfileYear,
      },
    ],
  },

  footer: {
    title: "Additional Info",
    fields: [
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your role, experience, or achievements",
        type: "textArea",
      },
    ],
  },
};
