import { 
  Flex, 
  useEditableControls,
  ButtonGroup,
  IconButton,
  Editable,
  EditablePreview,
  Button,
  Textarea,
  EditableTextarea,
  Tooltip,

} from '@chakra-ui/react'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import {FaPencilAlt} from 'react-icons/fa'
import { updateBio } from '../../services/sockets'
import { useAuth0 } from "@auth0/auth0-react";
import {FaCheck} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function ProfileBioInfo() {

  const { user } = useAuth0();
  const [bio, setBio] = useState()
  const currentUser = useSelector(state => state.users.my)

  function EditableControls() {
      const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
      } = useEditableControls()
  
      const send = () => {
      
          if(bio){
            updateBio(user.email, bio)
          }
        }
  
      return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm' gap="10px"> 

          <Tooltip bg='gray.500' label='Confirmar' placement='bottom'>
            <IconButton
            icon={<Button  
            variant='outline'
            colorScheme='green'
            fontSize='xs' onClick={() =>{send()}}> <FaCheck/> </Button>} {...getSubmitButtonProps()} 
            />
          </Tooltip>

          <Tooltip bg='gray.500' label='Cancelar' placement='bottom'>
            <IconButton
            variant='outline'
            colorScheme='red'
            fontSize='xs'
            icon={<AiOutlineClose/>} {...getCancelButtonProps()}
            />
          </Tooltip>

      </ButtonGroup>

      ) : (
      <Flex justifyContent='center'>
          <IconButton  mt="10px" size='sm' icon={<FaPencilAlt color="#FF4e5b"/>} {...getEditButtonProps()} />
      </Flex>
      )
  }

  return (
      <Editable
      textAlign='center'
      defaultValue={currentUser.bio}
      fontSize='2xl'
      width="250px"
      isPreviewFocusable={true}
      placeholder="¡¡Estoy usando Talkap!!"

      >
      <EditablePreview as='i'  mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" />
      <Textarea as={EditableTextarea}  fontSize='md' maxLength={"123"} fontWeight="medium" wrap='true' onChange={(e) => setBio(e.target.value)}/>
      <EditableControls />
       
    </Editable>
  )
}


export default ProfileBioInfo