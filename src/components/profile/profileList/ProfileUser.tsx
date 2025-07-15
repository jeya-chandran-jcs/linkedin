import { Avatar, Box, Modal, Typography } from '@mui/material'
import ProfileStatus from './ProfileStatus';
import { Link } from '@tanstack/react-router';
import Pen from '../../../utility/icons/Pen';
import MovalbleIcon from '../../../utility/icons/MovalbleIcon';
import type { SingleFieldProps } from '../../../utility/componentsApiEnhanceProfile/profilePicData';
import { profilePicData } from '../../../utility/componentsApiEnhanceProfile/profilePicData';
import ModalAbout from '../../../utility/subProfilecomp/ModalAbout';
import { BackGroundPicData } from '../../../utility/componentsApiEnhanceProfile/backgroundPicData';

import { useState } from 'react';
import { useUserProfile } from '../../../hooks/UserProfileContext';

export default function ProfileUser() {
  const [show, setShow] = useState<boolean>(false)
  const [active, setActive] = useState<SingleFieldProps | null>(null)
  const userProfile=useUserProfile()

  const handleOpenModal = (data: SingleFieldProps) => {
    setActive(data)
    setShow(true)
  }
  return (
    <Box
      sx={{
        borderRadius: "8px",
        //   flexGrow: 1,
        width: "100%",
        border: "1px solid gray",
        position: 'relative',
        overflow: "visible",
        backgroundColor: "white"
      }}>
      {/* banner */}
      <Box sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px", overflow: "hidden" }}>
        <Box component="img" src={userProfile?.backGroundPic?.trim() ? userProfile?.backGroundPic : "https://tse1.mm.bing.net/th/id/OIP.hcqQvjEFJCR7biFGp9Hm_AHaEd?rs=1&pid=ImgDetMain&o=7&rm=3"} alt="linked in img"
          sx={{ width: "100%", height: "25vh", backgroundColor: "white", objectFit: "fit", display: "block" }}></Box>
      </Box>
      <Avatar src={userProfile?.photoUrl?.trim() ? userProfile?.photoUrl : "https://tse3.mm.bing.net/th/id/OIP.D0bht621G_7SlAb1CjH6IwHaGF?rs=1&pid=ImgDetMain&o=7&rm=3"} alt="https://i.pinimg.com/736x/cd/3e/d5/cd3ed5a95ef5ac1d694899a51798874b.jpg" sx={{ width: 150, height: 150, objectFit: "contain", position: "absolute", left: "2rem", top: "16vh", border: "4px solid white", backgroundColor: "#f5f5f5", }} />

      <MovalbleIcon bgColor={"white"} hoverBg={"lightgray"} position={"absolute"} right={"35.7vw"} top={"26vh"}
        onClick={() => {
          setShow(true)
          handleOpenModal(profilePicData)
        }}
      />
      <MovalbleIcon bgColor={"gray"} color={"white"} hoverBg={"lightgray"} position={"absolute"} right={"0.5vw"} top={"1vh"}
        onClick={() => {

          setShow(true)
          handleOpenModal(BackGroundPicData)
        }}
      />
      {
        show && active && (
          <Modal open={show} onClose={() => setShow(false)}>
            <Box
              sx={{
                marginTop: "5rem",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "40%",
                marginX: "auto",
                boxShadow: 24,
                outline: "none",
              }}
            >
              <ModalAbout handleClose={() => setShow(false)} singleFieldStructure={active} multiLine={false} id={userProfile.id}/>
            </Box>
          </Modal>

        )
      }      <ProfileStatus authUser={userProfile} />
      <Link to="edit/profileintro">
        <Typography component="p" variant='body1' sx={{ width: '30px', padding: "20px", height: "30px", display: "flex", justifyContent: "center", alignItems: 'center', transition: "background-color 0.3s ease-in-out", borderRadius: "50%", '&:hover': { color: "black", backgroundColor: '#f0f0f0', }, position: "absolute", right: "2vw", top: "27vh" }}>
          <Pen symbol={"pencil"} />
        </Typography>
      </Link>
    </Box>

  )
}
