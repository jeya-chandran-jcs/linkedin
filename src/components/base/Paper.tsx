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
        all: 'unset',
        cursor: 'pointer',
        width: '100%',
      }}
      sx={{
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0.5,
          '&:hover': {
                        backgroundColor: '#F3F6F9',
                    },
        ...sx,
      }}
    >
      <Typography variant="subtitle1" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </MuiPaper>
  );
}
