import React from 'react'
import Axios from 'axios'
import {FaPencilAlt} from 'react-icons/fa'
import { updatePic } from '../../services/sockets'
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, useToast, Tooltip,  Text } from '@chakra-ui/react';

function ProfileImg() {

    const { user } = useAuth0();
    const toast = useToast()


  return (

    <Flex justify="center" gap="3">

     <Tooltip bg='gray.500' label='Editar foto' placement='top'>
        <label style={{ cursor: "pointer"}} for="inputTag">

        <FaPencilAlt fontSize="22px" color="#FF4e5b"/> 
       
        <input style={{display:"none"}}
        id="inputTag"
        type="file" 
        onChange={ async (e) => {

        toast({
          position: 'top-left',
          duration: 4000,
          isClosable:true,
          render: () => (
            <Box color='white' p={3} bg='green.400' fontWeight="bold">
              <Text>¡Cambiando foto! esto puede tardar varios segundos</Text>
            </Box>
          )
          })


        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "jtytvyi1")


        Axios.post("https://api.cloudinary.com/v1_1/diljrsea2/image/upload", formData)
        .then(Response => updatePic(user.email, Response.data.url))
      



        }}
        />
        </label>

      </Tooltip>

    </Flex>
  )
}

export default ProfileImg