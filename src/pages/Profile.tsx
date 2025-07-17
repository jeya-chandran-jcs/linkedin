import { Box } from "@mui/material";
import SideBar from "../components/profile/SideBar/SideBar";
import ProfileContent from "../components/profile/ProfileContent";
import { useParams } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setAuthorized, setAuthorizedId } from "../redux/authSlice";
import { useEffect } from "react";

export default function Profile() {
  const {id}=useParams({from:"/user-profile/$id"})
  const {apiUid}=useAuth()
  const auth=apiUid==id

  const dispatch=useDispatch()
  useEffect(()=>{
    if(id) sessionStorage.setItem("userId",id)
    dispatch(setAuthorized(auth))
    dispatch(setAuthorizedId(id))
    console.log("dispathed in profile")
  },[auth,dispatch,id])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent:"center",
        gap: "2rem",
        paddingY: "1.6rem",
        backgroundColor:"#f5f3f0ff"
      }}
    >
    <ProfileContent />
      {auth && <SideBar />}
    </Box>
  );
}
