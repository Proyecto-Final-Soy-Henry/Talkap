import { 
    Flex, 
    useEditableControls,
    ButtonGroup,
    IconButton,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Button,

} from '@chakra-ui/react'

  import { useState } from 'react'
  import { useSelector } from 'react-redux'
  import {FaPencilAlt} from 'react-icons/fa'
  import { updateBio } from '../../services/sockets'
  import { useAuth0 } from "@auth0/auth0-react";
  import {GiCheckMark} from 'react-icons/gi'
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
        <ButtonGroup justifyContent='center' size='sm'> 
            <IconButton icon={<Button onClick={() =>{send()}}> <GiCheckMark color='#BC00DD'/> </Button>} {...getSubmitButtonProps()} />
            <IconButton icon={<AiOutlineClose color='#BC00DD' />} {...getCancelButtonProps()} />
        </ButtonGroup>
        ) : (
        <Flex justifyContent='center'>
            <IconButton size='sm' icon={<FaPencilAlt color="#BC00DD"/>} {...getEditButtonProps()} />
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
        placeholder="Pon una descripcion para los demas"
        >
        <EditablePreview as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" />
        <Input as={EditableInput} fontSize='md' fontWeight="medium" onChange={(e) => setBio(e.target.value)}/>
        <EditableControls />
         
      </Editable>
    )
  }

  
export default ProfileBioInfo
