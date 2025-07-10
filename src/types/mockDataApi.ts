export type OrganizationEntry = {
  organizationName: string;
  position: string;
  associatedWith: string;
  startDate: {
    monthStart: string;
    yearStart: string;
  };
  endDate: {
    monthEnd: string;
    yearEnd: string;
  };
  description: string;
};

export type MockDataProps={
    id:string,
    name:string,
    email:string,
    password:string,
    phoneNo:string,
    location:string,
    backgroundPic:string,
    profilePic:string,
    profileIntro:string,
    contact:[],
    links:[],
    about:string,
    featured:string,
    experience:[],
    education:[],
    certification:[],
    projects:[],
    skill:[],
    language:[],
    interest:[],
    connections:[],
    uid:string,
    post:[],
    course:[],
    organization:OrganizationEntry
}