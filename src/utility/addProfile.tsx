import { lazy } from "react"

export const addProfileCore = [ 
  {
    key:"profileintro",
    name:"Add profile intro",
    component:lazy(()=>import("../components/profile/AddProfile/ComponentsAPI/profileIntro/ProfileIntro"))
  },
  {
    key: "education",
    name: "Add education",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/EducationAdd"))
  },
  {
    key: "experience",
    name: "Add experience",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/ExperienceAdd"))
  },
  {
    key: "skills",
    name: "Add skills",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/SkillsAdd"))
  },
]

export const addProfileRecommended = [
  {
    key:"contact",
    name:"Contact Info",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/ContactInfo"))
  },
  {
    key: "projects",
    name: "Add projects",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/ProjectAdd"))
  },
   {
    key: "courses",
    name: "Add courses",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/CoursesAdd"))
  },
 
]

export const addProfileAdditional = [
    {
    key: "license",
    name: "Add license & certifications",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/CertificationAdd"))
  },

  {
    key: "languages",
    name: "Add languages",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/LanguagesAdd"))
  },
  {
    key: "organizations",
    name: "Add organizations",
    component: lazy(() => import("../components/profile/AddProfile/ComponentsAPI/OrganizationAdd"))
  },
 
]

export const proficeAccordion=[
    {
        title:"Core",
        desc:"Start with the basics. Filling out these sections will help you be discovered by recruiters and people you may know",
        list:addProfileCore
    },
    {
        title:"Recommended",
        desc:"Completing these sections will increase your credibility and give you access to more opportunities",
        list:addProfileRecommended
    },
    {
        title:"Additional",
        desc:"Add even more personality to your profile. These sections will help you grow your network and build more relationships.",
        list:addProfileAdditional
    }
]