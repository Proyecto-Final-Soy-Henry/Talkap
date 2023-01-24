import { 
    Divider, 
    Flex, 
    Image, 
    Spinner, 
    Text, 
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
    useEditableControls,
    ButtonGroup,
    IconButton,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Button, 
    Tooltip

} from '@chakra-ui/react'

  import { useState } from 'react'
  import { useSelector } from 'react-redux'
  import {FaPencilAlt} from 'react-icons/fa'
  import { updateInfo } from '../../services/sockets'
  import { useAuth0 } from "@auth0/auth0-react";
  import ProfileImg from './ProfileImg'
  import ProfileBioInfo from './ProfileBioInfo'
  import {GiCheckMark} from 'react-icons/gi'
  import {AiOutlineClose} from 'react-icons/ai'

  function ProfileInfo() {

    const { user } = useAuth0();
    const [nombre, setNombre] = useState(user.nickname)
    const currentUser = useSelector(state => state.users.my)

    function EditableControls() {

      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  

      const send = () => {
        if(nombre){
          updateInfo(user.email, nombre)
        }
      }
        
      return isEditing ? (

        <ButtonGroup justifyContent='center' size='sm'>

          <IconButton icon={<Button onClick={() =>{send()}}> <GiCheckMark color='#BC00DD'/> </Button>} {...getSubmitButtonProps()} />
          <IconButton icon={<AiOutlineClose color='#BC00DD'/>} {...getCancelButtonProps()} />

        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <IconButton size='sm' icon={<FaPencilAlt color='#BC00DD'/>} {...getEditButtonProps()}/>
        </Flex>
      )
    }

    return (
  
      <Flex justifyContent="center" minH="90vh" alignItems="center">
  
        {currentUser && currentUser.picture ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10" key={currentUser.email}>
            <Image
              borderRadius='full'
              marginTop="10"
              boxSize='200px'
              objectFit='cover'
              src={currentUser.picture}
              alt={currentUser.name}
            />

            <ProfileImg/>
  
            <Divider/>

            <Tooltip bg='gray.500' label='Este nombre sera visible para tus contactos'placement='top-start'>
              <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-16" w="full">Tu Nombre</Text>
            </Tooltip>

            <Flex alignItems="center"/>
            <Editable
              textAlign='center'
              defaultValue={currentUser.name}
              fontSize='2xl'
              width="230px"
              isPreviewFocusable={true}
            >
              <EditablePreview as='abbr' fontSize='2xl' fontWeight="bold"/>
                <Input maxLength="12" minLength="3" as={EditableInput} fontSize='2xl' fontWeight="bold" onChange={(e) => setNombre(e.target.value)}/>
                <EditableControls />
            </Editable>
    
  
            <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu email</Text>
            <Text  as='abbr' fontSize='2xl' fontWeight="semibold">{currentUser.email}</Text>
            
            <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu Bio</Text>
            <Flex alignItems="center">
               <ProfileBioInfo/>
            </Flex>
      
            <Divider/>
  
          </Flex>
  
          :
  
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#BC00DD'
            size='xl'
          />
        }
      
      </Flex>
    )
  }
  
  export default ProfileInfo
