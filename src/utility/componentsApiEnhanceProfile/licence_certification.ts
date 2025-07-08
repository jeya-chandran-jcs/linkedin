import { ProfileMonth, ProfileYear, type FromStructureGrouped } from "./AddProfileSupport";

export const license_certification: FromStructureGrouped = {
  header: {
    title: "License or Certificate",
    fields: [
      {
        key: "name",
        label: "Name",
        placeholder: "Ex: Microsoft certified network associate security",
        type: "text"
      },
      {
        key: "issuingOrganization",
        label: "Issuing organization",
        placeholder: "Ex: Microsoft",
        type: "text"
      }
    ]
  },
  duration: {
    title: "Issue & Expiration Date",
    fields: [
      {
        key: "issueDate",
        label: "Issue date",
        type: "month",
        monthKey: "issueMonth",
        yearkey: "issueYear",
        monthValues: ProfileMonth,
        yearValues: ProfileYear,
      },
      {
        key: "expirationDate",
        label: "Expiration date",
        type: "month",
        monthKey: "expireMonth",
        yearkey: "expireYear",
         monthValues: ProfileMonth,
        yearValues: ProfileYear,
      }
    ]
  },
  footer: {
    title: "",
    fields: [
      {
        key: "credentialID",
        label: "Credential ID",
        placeholder: "Optional",
        type: "text"
      },
      {
        key: "credentialURL",
        label: "Credential URL",
        placeholder: "Optional – This will be visible on LinkedIn",
        type: "text"
      }
    ]
  }
};
