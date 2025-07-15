import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TextFieldMui from "../../components/ActionComp/TextFieldMui";


export type LocationHelperProps = {
    label?: string,
    name?: string,
    value?: string,
    onChange?: (value: string) => void,
    placeHolder?: string,
    type?:string
}

type GeoapifyFeature = {
    properties: {
        formatted: string;
    };
};


export default function LocationHelper({ label, name, value, onChange, placeHolder,type }: LocationHelperProps) {
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [cityQuery, setCityQuery] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const delayBounce = setTimeout(() => {
            if (show && cityQuery.length > 2) {
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(cityQuery)}&limit=5&apiKey=5c6e66d0a7c441c2b30c6f7f7bb0932c`)
                    .then((res) => res.json())
                    .then((data) => setSuggestions(data.features.map((f: GeoapifyFeature) => f.properties.formatted)))
                    .catch((err) => console.error(err))
            }
        }, 500)
        return () => clearTimeout(delayBounce)
    }, [cityQuery])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setCityQuery(val)
        setShow(true)
        onChange?.(val)
    }
    return (
        <>
            <Typography component="label" variant="subtitle2" color="textSecondary">{label}</Typography>

            <TextFieldMui value={value ?? ""} handleChange={handleChange} fullWidth={true} name={name ?? ""} type={type ?? "text"} variant={"outlined"} placeHolder={placeHolder}
                sx={{
                    position: "relative",
                    '& .MuiOutlinedInput-root': {

                        borderRadius: "4px",
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        padding: '4px 2px',
                        '& input, & textarea': {
                            padding: "6px 10px",
                            fontFamily: 'inherit',
                            fontSize: "14px",
                            lineHeight: 1.5,
                        },
                        '& fieldset': {
                            border: "1.5px solid #808080"
                        },
                        '&:hover fieldset': {
                            border: '2px solid black',
                        },
                        '&.Mui-focused fieldset': {

                            border: '2px solid black',
                        }
                    }
                }}
            />

            {suggestions.length > 0 && (
                <Box sx={{

                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    maxHeight: "150px",
                    overflowY: "auto",
                    backgroundColor: "#fff",
                    zIndex: 1000,

                    width: "100%",


                }}>
                    {suggestions.map((place, i) => (
                        <Box key={i} sx={{ padding: "8px", borderBottom: "1px solid #eee", cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" }, }}
                            onClick={() => {
                                onChange?.(place)
                                setCityQuery(place)
                                setSuggestions([])
                                setShow(false)
                            }}
                        >
                            {place}
                        </Box>
                    ))}
                </Box>
            )}
        </>
    )
}
