import { Avatar, Box, Typography, } from '@mui/material'
import { useUserHomeContext } from '../../../../hooks/useHomeContext';
import type { MockDataProps } from '../../../../types/mockDataApi';
import ExperienceLogo from '../../../../utility/ExperienceLogo';

export type AuthProps = {
    auth: boolean | null
}

export default function ProfileLeft() {

    const userData = useUserHomeContext()
    const userCurrentId = sessionStorage.getItem("userId")
    const userProfileData = userData.find((singleUser: MockDataProps) => singleUser.id === userCurrentId)
    console.log("userprofile", userProfileData)
    if (!userProfileData) return
    return (
        <Box
            sx={{
                borderRadius: "8px",
                //   flexGrow: 1,
                width: "100%",
                border: "1px solid gray",
                position: 'relative',
                overflow: "visible",
                backgroundColor: "white",

            }}>
            {/* banner */}
            <Box sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px", overflow: "hidden" }}>
                <Box component="img" src={userProfileData?.backGroundPic?.trim() ? userProfileData?.backGroundPic : "https://tse1.mm.bing.net/th/id/OIP.hcqQvjEFJCR7biFGp9Hm_AHaEd?rs=1&pid=ImgDetMain&o=7&rm=3"} alt="linked in img"
                    sx={{ width: "100%", height: "100px", backgroundColor: "white", objectFit: "fit", display: "block" }}></Box>
            </Box>

            <Box sx={{ position: "absolute", left: "2vw", top: "6.5vh" }}>
                <Avatar src={userProfileData?.photoUrl?.trim() ? userProfileData?.photoUrl : "https://tse3.mm.bing.net/th/id/OIP.D0bht621G_7SlAb1CjH6IwHaGF?rs=1&pid=ImgDetMain&o=7&rm=3"} alt="https://i.pinimg.com/736x/cd/3e/d5/cd3ed5a95ef5ac1d694899a51798874b.jpg"
                    sx={{ width: 70, height: 70, objectFit: "contain", border: "2px solid white", backgroundColor: "#f5f5f5", position: "absolute" }} />

            </Box>

            <Box sx={{ marginTop: "2rem", paddingX: '1rem', }}>
                <Typography fontSize={"0.9rem"} fontWeight={600}>{userProfileData?.name}</Typography>
                {userProfileData?.profileIntro?.headline &&
                    <Typography variant='subtitle2' component="p" fontSize={"0.7rem"} >{userProfileData?.profileIntro?.headline}</Typography>
                }
                {userProfileData?.jobPreference?.locationsSite &&
                    <Typography variant='subtitle2' component="p" fontSize={"0.7rem"} marginTop={"5px"} color="textSecondary">{userProfileData?.jobPreference?.locationsSite[0]}</Typography>
                }

                {userProfileData?.profileIntro?.higherEducation &&
                    <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center", marginY: "0.5rem" }}>
                        <ExperienceLogo height={50} width={90} />
                        <Box>
                            <Typography variant='subtitle2' component="p" fontSize={"0.7rem"}  >{userProfileData?.profileIntro?.higherEducation}</Typography>
                        </Box>
                    </Box>
                }

            </Box>




        </Box>

    )
}
