import { Box, Typography } from "@mui/material";
import LeftSideBar from "../components/home/leftSideBar/LeftSideBar";
import HomeComp from "../components/home/homecomponents/HomeComp";
import RightSideBar from "../components/home/rightSideBar/RightSideBar";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getData from "../utility/api/getData";
import { API } from "../global";
import { UserHomeContext } from "../hooks/useHomeContext";

export default function HomePage() {
    const [userId, setUserId] = useState<string | null>(null);
    const {data,isLoading,isError}=useQuery({
      queryKey:["home all users"],
      queryFn:()=>getData({API,message:"GET"})
    })
    useEffect(() => {
    setUserId(sessionStorage.getItem("userId"));
  }, []);

      if(isLoading) return <Typography>loading</Typography>
      if(isError) return <Typography>error</Typography>
      if(!data) return <Typography>data is still not loaded</Typography>
    console.log("from home page",userId,"data",data)

  return (
    <UserHomeContext value={data}>
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
      <LeftSideBar />
      <HomeComp />
      <RightSideBar />
    </Box>
    </UserHomeContext>
  )
}
