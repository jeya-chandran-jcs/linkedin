import { Box } from "@mui/material";
import AddPost from "./homeAddPost/AddPost";
import PostSort from "./homeAddPost/PostSort";

export default function HomeComp() {

  
  return (
    <Box sx={{width:"35%",}}>
      <AddPost />
      <PostSort />
    </Box>
  )
}
