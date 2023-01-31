import { 
    Divider, 
    Flex, 
    Image, 
    Spinner, 
    Text, 
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
  import { updateInfo, sendMessage} from '../../services/sockets'
  import { useAuth0 } from "@auth0/auth0-react";
  import ProfileImg from './ProfileImg'
  import ProfileBioInfo from './ProfileBioInfo'
  import { errorExit } from "../../services/sweetalert.js"; 
  import {FaPencilAlt, FaCheck} from 'react-icons/fa'
  import {AiOutlineClose} from 'react-icons/ai'
  import { BsBoxArrowInRight } from "react-icons/bs";

  function ProfileInfo() {

    const { user, logout } = useAuth0();
    const [nombre, setNombre] = useState(user.nickname)
    const currentUser = useSelector(state => state.users.my)


    const handler = () => {
      errorExit().then((response) => {
        if (response) {
          sendMessage("exit", user);
          logout({
            returnTo: "https://client-deploy-wild-design.vercel.app/",
            client_id: "LSk86bV3bJidSE2BX0QpuEGrFszKJhlc",
          });
        }
      });
    };


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

        <ButtonGroup justifyContent='center' size='sm' gap="10px">

          <IconButton
           icon={<Button
              variant='outline'
              colorScheme='green'
              fontSize='xs' onClick={() =>{send()}}> <FaCheck/> </Button>} {...getSubmitButtonProps()} />
          <IconButton
              variant='outline'
              colorScheme='red'
              fontSize='xs' icon={<AiOutlineClose/>} {...getCancelButtonProps()} />

        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <IconButton size='sm' icon={<FaPencilAlt color='#FF4e5b'/>} {...getEditButtonProps()}/>
        </Flex>
      )
    }

    return (
  
      <Flex justifyContent="center" minH="90vh" alignItems="center">
  
        {currentUser && currentUser.picture ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10" key={currentUser.email}>
            <Image
              borderRadius='full'
              border="1px"
              borderColor="#FF4e5b"
              marginTop="10"
              marginBottom="-5"
              boxSize='200px'
              objectFit='cover'
              src={currentUser.picture}
              alt={currentUser.name}
            />

            <ProfileImg/>
  
            <Divider mb="-6"/>

            <Tooltip bg='gray.500' label='Será visible para tus contactos' placement='top-start'>
              <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-20" w="full">Tu Nombre</Text>
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
                <Input maxLength="20" minLength="3" as={EditableInput} fontSize='2xl' fontWeight="bold" onChange={(e) => setNombre(e.target.value)}/>
                <EditableControls />
            </Editable>
    
  
            <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-10" w="full">Tu email</Text>
            <Text  as='abbr' fontSize='2xl' fontWeight="normal" color="gray.500">{currentUser.email}</Text>

            <Tooltip bg='gray.500' label='¿Qué estás pensando?' placement='top-start'>
            <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-10" w="full">Tu Bio</Text>
            </Tooltip>
            <Flex alignItems="center">
               <ProfileBioInfo/>
            </Flex>
      
            <Divider/>
  
            <Button
              onClick={handler}
              w="50%"
              bg="#FF4e5b"
              _hover={{bg:"red.500"}}
              rightIcon={<BsBoxArrowInRight />}
              colorScheme="white"
              variant="solid"
            >
              Cerrar Sesión   
          </Button>

          </Flex>
  
          :
  
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#FF4e5b'
            size='xl'
          />
        }
      
      </Flex>
    )
  }
  
  export default ProfileInfo
