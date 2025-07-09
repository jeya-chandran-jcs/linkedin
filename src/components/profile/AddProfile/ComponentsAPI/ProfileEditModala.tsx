import { useNavigate, useParams } from "@tanstack/react-router"
import { CircularProgress, Dialog, DialogContent, Typography } from "@mui/material"
import { proficeAccordion } from "../../../../utility/addProfile"
import { Suspense } from "react";

export default function ProfileEditModala() {
    const { section } = useParams({ strict: false });
    const navigate = useNavigate();

    const handleClose = () => {
        navigate({ to: "/user-profile" });
    };

    const allItems = proficeAccordion.flatMap(item => item.list);
    const currentIndex = allItems.findIndex(i => i.key === section);
    const match=allItems[currentIndex]

    console.log("Current Section:", section); 

    const hasNext=currentIndex<allItems.length-1
    const hasPrev=currentIndex>0

    const goToNext=()=>{
      if(hasNext)
      {
        navigate({
          to:"/user-profile/edit/$section",
          params:{section:allItems[currentIndex+1].key}
        })
      }
    }

    const goToPrev=()=>{
      if(hasPrev)
      {
        navigate({to:"/user-profile/edit/$section",
          params:{section:allItems[currentIndex-1].key}
        })
      }
    }
    return (
        <Dialog open onClose={handleClose} fullWidth maxWidth="md"
           sx={{
    "& .MuiDialog-container": {
      alignItems: "flex-start",  
      justifyContent: "center",  
      paddingTop: "3rem", 
      
    },
    "& .MuiDialog-paper": {
      margin: 0,
    //   maxWidth: "700px",
      width: "100%",
      height: "auto",
      overflow: "visible",
      boxShadow: "none",
      backgroundColor: "transparent",
    }
  }}>
         <DialogContent key={section} sx={{ padding: 0 }}>
                {match ? 
                <Suspense fallback={
                  <div style={{padding:"2rem", textAlign:"center"}}>
                      <CircularProgress />
                  </div>
                }>
                  <match.component goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}/>
                </Suspense>
                : <Typography>Invalid Section</Typography>}
            </DialogContent>
        </Dialog>
    );
}
