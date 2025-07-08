import type { FromStructureGrouped } from "./AddProfileSupport";

export const skillsData: FromStructureGrouped = {
    header: {
        title: "Skills",
        fields: [
            {
                key: "skills",
                label: "Add your skills",
                placeholder: "Ex. React, Node.js",
                type: "array"
            }
        ]
    },
    footer: {
        title: "Skill Level",
        fields: [
            {
                key: "skillLevel",
                label: "Proficiency",
                placeholder: "Please select",
                type: "text",
                values: ["Beginner", "Intermediate", "Advanced", "Expert"]
            }
        ]
    }
};
