import { Typography } from "@mui/material";
import MuiButton from "../components/ActionComp/MuiButton";
import type { ViewersView } from "../types/helper";



export const viewers:ViewersView={
   header:{
        title:"Who your viewers also viewed",
        desc:(
            <>
                {<i className="fa-solid fa-eye text-gray-500"></i>} Private To You
            </>
        )
   },
   profile:[
        {
            img:"assets/linkedinprofpic.webp",
            name:"shriman shervan",
            work:"",
            button:(
                <>
                 <MuiButton type={"button"} size={"small"} text={"message"} variant={"outlined"} sx={{ borderRadius: "20px", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid skyblue" }} />
                </>
            )
        },
        {
            img:"",
            name:"Saravana kumaran",
            work:"veternary asst surgeon",
            button:(
                <>
                 <MuiButton type={"button"} size={"small"} text={"message"} variant={"outlined"} sx={{ borderRadius: "20px", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid skyblue" }} />
                </>
            )
        },
    ],
     footer:(
            <>
                <Typography component="a" href='#' sx={{alignItems:"center",gap:"0.4rem",justifyContent:"center",fontSize:"1rem",width:"100%",display:"inline-flex",color:"inherit",textDecoration:"none"}}><i className="fa-solid fa-note-sticky text-amber-600 "></i> Show All With Premium</Typography>
            </>
        )
}

export const peopleSugg:ViewersView={
    header:{
        title:"People you may know",
        desc:"From your industry"
    },
    profile:[
        {
            img:"assets/sugg1.webp",
            name:"Kavitha balaji",
            work:"Senior Hr Manager at",
             button:(
                <>
                 <MuiButton type={"button"} size={"small"}  variant={"outlined"} sx={{ borderRadius: "20px",color:"#383838", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid gray" }} >
                     <i className="fa-solid fa-user-plus text-gray-500" style={{ marginRight: "0.4rem" }}></i>Connect  
                 </MuiButton>
                </>
            )
        },
         {
            img:"assets/sugg2.webp",
            name:"Abishek Ojha",
            work:"Senior software Enginner at",
             button:(
                <MuiButton type={"button"} size={"small"}  variant={"outlined"} sx={{ borderRadius: "20px",color:"#383838", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid gray" }} >
                     <i className="fa-solid fa-user-plus text-gray-500" style={{ marginRight: "0.4rem" }}></i>Connect  
                 </MuiButton>
            )
        }, {
            img:"assets/sugg3.jpg",
            name:"Harshan Palanichamy",
            work:"Working at TringApps",
             button:(
                <MuiButton type={"button"} size={"small"}  variant={"outlined"} sx={{ borderRadius: "20px",color:"#383838", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid gray" }} >
                     <i className="fa-solid fa-user-plus text-gray-500" style={{ marginRight: "0.4rem" }}></i>Connect  
                 </MuiButton>
            )
        },
         {
            img:"assets/sugg4.webp",
            name:"Gunaseelan s",
            work:"Frontend Developer | Fullstack developer",
             button:(
               <MuiButton type={"button"} size={"small"}  variant={"outlined"} sx={{ borderRadius: "20px",color:"#383838", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid gray" }} >
                     <i className="fa-solid fa-user-plus text-gray-500" style={{ marginRight: "0.4rem" }}></i>Connect  
                 </MuiButton>
            )
        },
         {
            img:"assets/sugg5.webp",
            name:"Geevitha ML",
            work:"Fullstack developer at vinsweb solution pvt ltd",
             button:(
               <MuiButton type={"button"} size={"small"}  variant={"outlined"} sx={{ borderRadius: "20px",color:"#383838", fontWeight: "600", padding: "0.3rem 1rem", border: "1.4px solid gray" }} >
                     <i className="fa-solid fa-user-plus text-gray-500" style={{ marginRight: "0.4rem" }}></i>Connect  
                 </MuiButton>
            )
        }
    ],
    footer:(
            <>
                <Typography component="a" href='#' sx={{alignItems:"center",gap:"0.4rem",justifyContent:"center",fontSize:"1rem",width:"100%",display:"inline-flex",color:"inherit",textDecoration:"none"}}> Show All </Typography>
            </>
        )
}