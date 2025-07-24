import { Avatar, Box, Typography } from "@mui/material";
import MuiButton from "../../../../ActionComp/MuiButton";
import moment from "moment";

type UserPostDetailsProps = {

    uuid: string;
    post: string;
    imageUrl: string;
    createdAt: string;
    userId: string;
    userName: string;
    userImage?: string,
    headLine: string[]
}
export default function PostCard({ userPost }: UserPostDetailsProps[]) {
    console.log(userPost.headLine)

    return (
        <Box sx={{ width: "100%", marginTop: "1.4rem", backgroundColor: "white", borderRadius: "8px", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #d6d3cf" }}>

            {/* header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "1rem" }}>
                <Box sx={{ display: "flex", alignItems: 'center', gap: "0.5rem" }}>
                    <Avatar src={userPost.userImage} />
                    <Box sx={{ display: "flex", flexDirection: 'column', gap: "0.2rem" }}>
                        <Typography variant="h6" component={"h6"} sx={{ m: 0 }}>{userPost.userName}</Typography>
                        {userPost.headLine &&
                            <Typography variant="subtitle2" component={"p"} color="textSecondary" sx={{ m: 0 }}>{userPost.headLine}</Typography>
                        }
                        <Typography variant="subtitle2" component={"p"} color="textSecondary" sx={{ m: 0 }}>{moment(userPost.createdAt).fromNow()}</Typography>
                    </Box>
                </Box>
                <Box>
                    <MuiButton text="X" size="small" variant="outlined" color={"secondary"} />
                </Box>
            </Box>

            {/* content */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Typography>{userPost.post}</Typography>
                <Typography component={"img"} src={userPost.imageUrl} alt="image" width={"100%"} />
            </Box>
        </Box>
    )
}
