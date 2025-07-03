
export const addProfileCore= [
    {
        key:"education",
        name:"Add education",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/EducationAdd")
    },
    {
        key:"experience",
        name:"Add experience",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/ExperienceAdd")
    },
    {
        key:"skills",
        name:"Add skills",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/SkillsAdd")
    },
]

export const addProfileRecommended= [
    {
        key:"license",
        name:"Add license & certifications",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/CertificationAdd")
    },
    {
        key:"projects",
        name:"Add projects",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/ProjectAdd")
    },
    {
        key:"courses",
        name:"Add courses",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/CoursesAdd")
    },
]

export const addProfileAdditional= [
    {
        key:"languages",
        name:"Add languages",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/LanguagesAdd")
    },
    {
        key:"organizations",
        name:"Add organizations",
        component:()=>import("../components/profile/AddProfile/ComponentsAPI/OrganizationAdd")
    },
]
