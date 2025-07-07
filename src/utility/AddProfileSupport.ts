
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

export type Field = {
  key: string;
  label: string;
  placeholder?: string;
  type: "text" | "textArea" | "month" | "year";
  values?:string[] | number[],
  monthKey?:string,
  yearkey?:string,
  monthValues?:string[],
  yearValues?:number[]
};

export type EducationSupportGrouped = {
  [group: string]: {
    title: string;
    fields: Field[];
  };
};

export const educationSupportEditedMonth:string[]=[
  "january","feburary","march","april","may","june","july","august","september","octiber","november","december"
]

export const educationSupportEdited: EducationSupportGrouped = {
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
        monthValues:educationSupportEditedMonth,
        yearValues:Array.from({length:10},(_,i)=>2025-i)
      },
      {
        key: "endDate",
        label: "End of Date (or expected)",
        type: "month",
        monthKey:"monthEnd",
       yearkey:"yearEnd",
        monthValues:educationSupportEditedMonth,
        yearValues:Array.from({length:10},(_,i)=>2025-i)
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
