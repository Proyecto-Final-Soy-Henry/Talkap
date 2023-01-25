import React, {useState} from 'react'
import Axios from 'axios'
import {FaPencilAlt} from 'react-icons/fa'
import { updatePic } from '../../services/sockets'
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, useToast, Tooltip,  Text } from '@chakra-ui/react';
import {FaArrowAltCircleUp} from 'react-icons/fa'

function ProfileImg() {

    const { user } = useAuth0();
    const [imageSelected, setImageSelected] = useState();
    const toast = useToast()


    const uploadImage =  () => {

      if(imageSelected){

        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "jtytvyi1")
  
        Axios.post("https://api.cloudinary.com/v1_1/diljrsea2/image/upload", formData)
        .then(Response => updatePic(user.email, Response.data.url))
      }

      setImageSelected(null)
      return;
    }


  return (

    <Flex justify="center" gap="3">
     <Tooltip bg='gray.500' label='Editar foto' placement='top'>
        <label style={{ cursor: "pointer"}} for="inputTag">

          <FaPencilAlt fontSize="22px" color="#BC00DD"/> 
       
        <input style={{display:"none"}}
        id="inputTag"
        type="file" 
        onChange={(e) => {
            setImageSelected(e.target.files[0])
        }}
        />
        </label>
        </Tooltip>

        {imageSelected ? 
        <Box>
            <button onClick={() => {

                uploadImage()

                toast({
                position: 'top-right',
                duration: 6000,
                isClosable:true,
                render: () => (
                  <Box color='white' p={3} bg='green.400' fontWeight="bold">
                    <Text>¡Cambiando foto! esto puede tardar varios segundos</Text>
                  </Box>
                )
                })
              }}>

              <Tooltip bg='gray.500' label='Subir foto' placement='top'>
                <label>
                  <FaArrowAltCircleUp fontSize="25px" color="#BC00DD" cursor="pointer"/>
                </label>
              </Tooltip>
            
            </button>
        </Box>

        :
        <Tooltip bg='gray.500' placement='top' label='Se habilita cuando seleccionas una foto'>
        <label>
          <FaArrowAltCircleUp color="gray" aria-invalid fontSize="25px"/>
        </label>
        </Tooltip>
        }
    </Flex>
  )
}

export default ProfileImg