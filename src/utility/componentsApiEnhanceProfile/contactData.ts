import { ProfileMonth } from "./AddProfileSupport";
import type { FromStructureGrouped } from "./AddProfileSupport";

export const contactSupport: FromStructureGrouped = {
  header: {
    title: "Contact Information",
    fields: [
      {
        key: "email",
        label: "Email",
        placeholder: "jeyachandranjcs@gmail.com",
        type: "text",
      },
      {
        key: "phoneNumber",
        label: "Phone Number",
        placeholder: "8524000214",
        type: "text",
      },
      {
        key: "phoneType",
        label: "Phone Type",
        placeholder: "Mobile",
        type: "text",
        values: ["Mobile", "Home", "Work", "Other"], 
      },
      {
        key: "address",
        label: "Address",
        placeholder: "5/2, Teachers colony, Anuppanadi, Madurai, Tamilnadu, India, pincode-625009",
        type: "textArea",
      },
    ],
  },
  duration: {
    title: "Birthday",
    fields: [
      {
        key: "startDate",
        label: "Start Date",
        type: "BirthDate",
        monthKey:"monthStart",
      yearkey:"yearStart",
        monthValues:ProfileMonth,
        yearValues:Array.from({length:20},(_,i)=>2007-i)
      },
    ],
  },
};
