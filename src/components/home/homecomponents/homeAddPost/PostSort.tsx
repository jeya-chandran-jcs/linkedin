import { Box, Divider } from "@mui/material";
import { useState } from "react";
import MuiSelect from "../../../ActionComp/MuiSelect";

export default function PostSort() {
  const [sort, setSort] = useState<string>("Top")
  const menu = ["Top", "Recent"]
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Divider sx={{ width: "80%", backgroundColor: "lightgray", height: "1px" }} />
      <MuiSelect values={menu} name="sort" handleSelectChange={(e) => setSort(e.target.value)} value={sort} formSx={{ marginY: 1 }}
        placeHolder="Sort" displayEmpty={true} variant={"outlined"} fullWidth={false}
        selectSx={{
          fontSize: "0.8rem",
          '& .MuiOutlinedInput-notchedOutline': {
            border: "none"
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: "none",
          },
          '& .MuiSelect-select': {
            padding: "2px 1px"
          }
        }}
        menuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root:hover': {
                borderLeft: '1px solid green',
              },
            },
          },
        }}
      />
    </Box>
  )
}
// '& .MuiOutlinedInput-notchedOutline': {
//                                             border: "1.5px solid #808080",
//                                         },