export const buttonList = [
  {
    iconClass: "fa-solid fa-video text-green-700 pr-2",
    label: "Video",
  },
  {
    iconClass: "fa-solid fa-camera text-blue-500 pr-2",
    label: "Photo",
  },
  {
    iconClass: "fa-regular fa-newspaper text-orange-400 pr-2",
    label: "Write Article",
  },
];

export const buttonSharedStyles={
    type:"button" as const,
    variant:"text" as const,
    sx: {
    padding: "5px",
    borderRadius: "8px",
    textTransform: "none",
    color: "black",
    minWidth: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      boxShadow: "none",
    },
  },
}