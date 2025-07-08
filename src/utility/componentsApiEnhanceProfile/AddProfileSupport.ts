
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

export type Field = {
  key: string;
  label: string;
  placeholder?: string;
  type: "text" | "textArea" | "month" | "year" |"array";
  values?:string[] | number[],
  monthKey?:string,
  yearkey?:string,
  monthValues?:string[],
  yearValues?:number[]
};

export type FromStructureGrouped = {
  [group: string]: {
    title: string;
    fields: Field[];
  };
};

export const ProfileMonth:string[]=[
  "january","feburary","march","april","may","june","july","august","september","octiber","november","december"
]

export const ProfileYear:number[]=Array.from({length:10},(_,i)=>2025-i)
