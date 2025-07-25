import { Avatar, Box, Divider, Typography } from '@mui/material'
import { peopleSugg } from '../../../utility/viewers'
import React from 'react'


export default function PeopleSuggestions() {
    return (
        <Box sx={{ backgroundColor: "white", boxShadow: 1, display: "flex", flexDirection: "column", padding: "1rem 0 0 0 ", gap: "0.7rem", borderRadius: "8px", border: "1px solid #D3D3D3" }}>
            {/* head */}
            <Box paddingX={"1rem"}>
                <Typography>{peopleSugg.header?.title}</Typography>
                <Typography color="text.secondary" sx={{ fontWeight: "500", fontSize: "0.9rem" }}>{peopleSugg.header?.desc}</Typography>
            </Box>
            {/* body */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", paddingX: "1rem" }}>

                {peopleSugg.profile.map((user, index) => (
                    <React.Fragment key={index}>
                        <Box sx={{ display: "flex", gap: "1rem" }} >
                            <Avatar src={user.img} sx={{ height: "3rem", width: "3rem", objectFit: "contain" }} />
                            <Box>
                                <Typography variant='body1' component="h6">{user.name}</Typography>
                                <Typography variant='subtitle2' component="p" color='text.secondary' paddingBottom={"0.4rem"}>{user?.work.trim() ? user.work : "--"}</Typography>
                                {user?.button}
                            </Box>

                            
                        </Box>
                        
                        {index < peopleSugg.profile.length-1 && <Divider /> }
                    </React.Fragment>

                ))}

            </Box>

            {/* footer */}
            <Box sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, width: "100%", textAlign: "center", padding: "0.7rem 1rem", cursor: "pointer", borderTop: "1px solid #e0e0e0" }}>
                <Typography component="a" href='#' sx={{ alignItems: "center", gap: "0.4rem", justifyContent: "center", fontSize: "1rem", width: "100%", display: "inline-flex", color: "inherit", textDecoration: "none" }}>{peopleSugg?.footer}</Typography>
            </Box>
        </Box>
    )
}
