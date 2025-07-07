import { useNavigate, useParams } from "@tanstack/react-router"
import { Dialog, DialogContent, Typography } from "@mui/material"
import { proficeAccordion } from "../../../../utility/addProfile"

export default function ProfileEditModala() {
    const { section } = useParams({ strict: false });
    const navigate = useNavigate();

    const handleClose = () => {
        navigate({ to: "/user-profile" });
    };

    const allItems = proficeAccordion.flatMap(item => item.list);
    const match = allItems.find(i => i.key === section);

    console.log("Current Section:", section); 

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
                {match ? <match.component /> : <Typography>Invalid Section</Typography>}
            </DialogContent>
        </Dialog>
    );
}
