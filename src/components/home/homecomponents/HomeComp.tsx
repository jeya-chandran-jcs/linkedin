import { Box } from "@mui/material";
import AddPost from "./homeAddPost/AddPost";
import PostSort from "./homeAddPost/PostSort";
import AllPost from "./allPost/AllPost";

export default function HomeComp() {

  
  return (
    <Box sx={{width:"35%",}}>
      <AddPost />
      <PostSort />
      <AllPost />
    </Box>
  )
}
