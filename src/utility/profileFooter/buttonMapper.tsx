import type { ReactNode } from "react"; // Correct source for ReactNode

export type ButtonMapperProps = {
  icon?: ReactNode;
  name: string;
  type: 'button' | 'submit' | 'reset';
  variant: 'text' | 'outlined' | 'contained';
  sx?: object; // Optional sx prop for custom styling
};

export const buttonMapper: ButtonMapperProps[] = [
  {
    icon: <i className="fa-solid fa-user-plus text-white"></i>,
    name: "connect",
    type: "button",
    variant: "contained",
    sx: {
      color: "#fff",
      fontWeight: "900",
      borderRadius: "19px",
      textTransform: "none",
      paddingX: 2,
      paddingY: 0.5,
      fontSize: "1rem",
      '&:hover': {
        backgroundColor: '#004182',
      }
    }
  },
  {
    name: "Message",
    type: "button",
    variant: "outlined",
    sx: {
      color: "#0072b1", 
      fontWeight: "900",
      borderRadius: "19px",
      textTransform: "none",
      paddingX: 2,
      paddingY: 0.5,
      fontSize: "1rem",
      '&:hover': {
        backgroundColor: "white", 
        border: "1px solid #005582"
      }
    }
  }
];
