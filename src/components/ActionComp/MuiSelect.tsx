import { FormControl, MenuItem, Select, Typography, type SelectChangeEvent, type SxProps } from '@mui/material';


type MuiSelectProps = {
    name: string,
    value: string | undefined,
    handleSelectChange: (e: SelectChangeEvent) => void
    placeHolder?: string,
    values: string[] | number[],
    fullWidth?: boolean,
    variant?: "standard" | "outlined" | "filled",
    formSx?: SxProps,
    displayEmpty?: boolean,
    selectSx?: SxProps,
    label?: string

}

export default function MuiSelect({ name, value, handleSelectChange, placeHolder, values, fullWidth, formSx, variant, displayEmpty, selectSx, label }: MuiSelectProps) {
    return (
        <FormControl fullWidth={fullWidth} sx={formSx} variant={variant}>
             {label?.trim()  && <Typography color="textSecondary" sx={{ fontSize: "0.8rem" }}>{label}</Typography>}
            <Select
                name={name}
                displayEmpty={displayEmpty}
                value={value}
                onChange={handleSelectChange}
                renderValue={(selected) => {
                    if (!selected) {
                        return <span className="text-gray-700 text-md">{placeHolder}</span>;
                    }
                    return selected;
                }}
                sx={selectSx}
            >
                {values.map((m, i) => (
                    <MenuItem key={i} value={m}>{m}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
