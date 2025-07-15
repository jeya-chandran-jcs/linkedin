type Header={
    key:string,
    label:string,
    placeHolder?:string,
    values?:string[],
    type:string
}
type Body={
     key:string,
    label:string,
    placeHolder?:string,
    values?:string[],
    type:string
}
type FooterValues={
    title:string,
    subTitle:string,
    description:string
}

type Footer={
    key:string,
    label?:string,
    placeHolder?:string,
    values?:string[] | FooterValues[],
    type?:string
}

export type JobPreferenceProps={
    title:string,
    header:Header[],
    body:Body[],
    footer:Footer[]
}


export const jobPreferenceData:JobPreferenceProps={
    title:"jobPreference",
    header:[
        {
            key:"jobTitle",
            label:"Job Title",
            placeHolder:"Add Title",
            type:"array"
        },
        {
            key:"locationType",
            label:"Location types",
            values:["On-site","Hybrid","Remote"],
            type:"checkBox",
        },
         {
            key:"locationsSite",
            label:"Locations (on-site)",
            placeHolder:"Add location",
            type:"array"
        }
    ],
    body:[
        {
            key:"noticePeriod",
            label:"Notice period (only visible to recruiters)",
            placeHolder:"select",
            values:["15 days or less","30 days","60 days","90 days","more than 90 days"],
            type:"select"
        },
        {
            key:"expectAnnSalary",
            label:"Expected annual salary (only visible to recruiters)",
            placeHolder:"select",
            values:["₹ 1+ lakhs","₹ 3+ lakhs","₹ 6+ lakhs","₹ 10+ lakhs","₹ 25+ lakhs"],
            type:"select"
        },
        {
            key:"startDate",
            label:"Start Date",
            values:["Immediately, I am actively applying","Flexible, I am casually looking"],
            type:"radio"
        }
    ],
    footer:[
        {
            key:"employmentTypes",
            label:"Employment Types",
            values:["Full-time","Part-time","Contract","Internship","Temporary"],
            type:"radio"
        },
        {
            key:"visibility",
            label:"Visibility (who can view you’re open to work) ",
            values:[
                {
                    title:"Recruiters only",
                    subTitle:"Limited to people using LinkedIn Recruiter",
                    description:"While we take steps not to show recruiters at your current company, we can’t guarantee complete privacy."
                },
                {
                    title:"All LinkedIn members",
                    subTitle:"Includes recruiters and people at your current company",
                    description:"This selection adds the #OpenToWork photo frame."
                }
            ]
        }
    ]
}