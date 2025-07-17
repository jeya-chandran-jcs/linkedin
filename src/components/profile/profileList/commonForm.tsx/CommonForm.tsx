import { Box, Divider, Stack, Typography } from "@mui/material";
import CertificateLogo from "../../../../utility/CertificateLogo";
import type { CommonFromProps } from "../../../../types/commonFromStructure/commonform";
import ExperienceLogo from "../../../../utility/ExperienceLogo";



type CommonFormStructureProps<T> = {
    commonStructure: CommonFromProps,
    message: string,
    key?: number,
    data: T[],
    apiKey?:string,
    auth?:boolean | null
}

export default function CommonForm<T extends Record<string, unknown>>({ commonStructure, message, data, apiKey ,auth}: CommonFormStructureProps<T>) {

    return (
        <Box sx={{
            borderRadius: "8px",
            width: "100%",
            border: "1px solid #D3D3D3",
            position: 'relative',
            overflow: "clip",
            padding: '1rem',
            display: "flex",
            flexDirection: "column",
            gap: "1.3rem",
            backgroundColor: "white"
        }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", fontSize: "1.1rem", color: "#212121" }}>{message}</Typography>
               {auth && 
                <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a className="fa-solid fa-plus font-bold text-lg text-gray-600" href={`edit/${apiKey}`}></a>
                    <a className="fa-solid fa-pen font-bold text-lg text-gray-600"></a>
                </Box>
               }
            </Box>

            {data.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                    You haven’t added any {message} yet. Please Add some details about your {message} 
                </Typography>
            ) : (
 <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {data.map((item, index) => (
                    <Box sx={{ display: "flex", alignItems: "start", gap: "1rem", flexDirection: "column" }} key={index}>
                        <Box sx={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                            {message === "Education" && <CertificateLogo height={50} width={60} />}
                            {message === "Experience" && <ExperienceLogo height={50} width={55} />}
                            <Stack spacing={0}>
                                <Typography variant="body1" component="h6" sx={{ fontWeight: "500", fontSize: "1.2rem" }}>
                                    {String(item[commonStructure.title] ?? "")}
                                </Typography>
                                {commonStructure.subTitle &&
                                    <Typography variant="body2" component="p">
                                        {String(item[commonStructure.subTitle] ?? "")}
                                    </Typography>
                                }
                                {commonStructure.duration &&
                                    <Typography variant="body1" component="h6" color="text.secondary">
                                        {String(item.monthStart ?? "")} {String(item.yearStart ?? "")} - {String(item.monthEnd ?? "")} {String(item.yearEnd ?? "")}
                                    </Typography>
                                }
                                {commonStructure.description &&
                                    <Typography variant="body2" component="p" color="text.secondary">
                                        {String(item[commonStructure.description] ?? "")}
                                    </Typography>

                                }
                            </Stack>
                        </Box>

                        {index !== data.length - 1 && <Divider sx={{ width: "100%", my: 1 }} />}
                    </Box>
                ))}

            </Box>
            )}
            
        </Box>
    )
}
