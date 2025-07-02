import { Paper as MuiPaper, Typography, Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type PaperProps = {
  title: string;
  desc: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
};

export default function Paper({ title, desc, onClick, sx }: PaperProps) {
  return (
    <MuiPaper
      elevation={2}
      component="button"
      onClick={onClick}
      style={{
        
      }}
      sx={{
        all: 'unset',
        cursor: 'pointer',
        width: '100%',
        // padding: 2,
        borderRadius: 2,
      
          '&:hover': {
                        backgroundColor: '#F3F6F9',
                    },
        ...sx,
      }}
    >
      <Box padding={1}>
        <Typography variant="subtitle1" fontWeight={700} >
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
      </Box>
    </MuiPaper>
  );
}
