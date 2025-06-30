import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useAuth=()=>useContext(AuthContext)

console.log("auth use authrunning")