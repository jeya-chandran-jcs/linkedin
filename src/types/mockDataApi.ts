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

export type ExperienceProps = {
  title: string;
  employmentType: string, 
  company: string;
  location: string;
  monthStart: string;
  yearStart: number;
  monthEnd: string;
  yearEnd: number;
  description: string;
  skills: string; 
};

export type EducationProps = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  monthStart: string;
  monthEnd: string;
  grade: string;
  yearStart: number;
  yearEnd: number;
  activities: string;
  description: string;
};

export interface ProfileIntro {
  pronouns: string;
  firstName: string;
  lastName: string;
  industry: string;
  higherEducation: string;
  country: string;
  city: string;
  contactInfo: string;
  link: string;
  linkText: string;
  headline: string;
}
export type SkillsProps= {
        skills: string,
        skillLevel: string
      }

export type LanguageProps= {
        languageName: string,
        proficiencyLevel: string
      }

export  type JobPreferenceFormProps = {
          jobTitle: string[];
          locationType: string[];
          locationsSite: string[];
          noticePeriod: string;
          expectAnnSalary: string;
          startDate: string;
          employmentTypes: string[];
          visibility: string;
      }

export type MockDataProps={
    id:string,
    name:string,
    email:string,
    password:string,
    phoneNo:string,
    location:string,
    backgroundPic:string,
    profilePic:string,
    profileIntro?:ProfileIntro,
    contact:[],
    links:[],
    about:string,
    featured:string,
    experience:ExperienceProps[],
    education:EducationProps[],
    certification:[],
    projects:[],
    skill:SkillsProps[],
    language:LanguageProps[],
    interest:[],
    connections:[],
    uid:string,
    post:[],
    course:[],
    organization:OrganizationEntry,
    photoUrl?:string,
    backGroundPic?:string,
    jobPreference:JobPreferenceFormProps
}