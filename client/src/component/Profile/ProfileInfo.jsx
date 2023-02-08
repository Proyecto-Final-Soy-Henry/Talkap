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
  Tooltip,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Menu,
  MenuButton,
 

} from '@chakra-ui/react'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateInfo, sendMessage} from '../../services/sockets'
import { useAuth0 } from "@auth0/auth0-react";
import ProfileImg from './ProfileImg'
import ProfileBioInfo from './ProfileBioInfo'
import { errorExit } from "../../services/sweetalert.js"; 
import {FaPencilAlt, FaCheck} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiOutlineClose,} from 'react-icons/ai'
import { BsBoxArrowInRight } from "react-icons/bs";
import {GrStatusGoodSmall}from "react-icons/gr";
import { useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai'

function ProfileInfo() {

  const { user, logout } = useAuth0();
  const [nombre, setNombre] = useState(user.nickname)
  const currentUser = useSelector(state => state.users.my)
  const [status, setStatus] = useState()
  const score = [1,2,3,4,5]



  let num = currentUser.stars

  let name1 = currentUser.name

  if(currentUser.name){
  if (currentUser.name.includes("@")) {
    let newName = [];
    for (let i = 0; currentUser.name[i] !== "@"; i++) {
      newName.push(currentUser.name[i]);
    }
    name1 = newName.join("");
  }
  }

  useEffect(()=>{
    if(currentUser.connected){
      setStatus(true)
    }else setStatus(false)

  },[currentUser.connected])

  const handler = () => {
    errorExit().then((response) => {
      if (response) {
        sendMessage("exit", user);
        logout({
          returnTo: "https://client-deploy-wild-design.vercel.app/",
          client_id: "WawCbbdYBrnbIDvqnhUIyulgHhicovQJ",
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
        <IconButton size='sm' mt="10px" icon={<FaPencilAlt color='#FF4e5b'/>} {...getEditButtonProps()}/>
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
            marginTop="2px"
            marginBottom="-5"
            boxSize='150px'
            objectFit='cover'
            src={currentUser.picture}
            
          />

          <ProfileImg/>

          <Divider mb="-8"/>

          
            <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-20" w="full" >
            <Tooltip bg='gray.500' label='Será visible para tus contactos' placement='top-start'>
              Tu Nombre 
            </Tooltip>
            
            </Text>
          

          <Flex alignItems="center"/>
          <Editable
            textAlign='center'
            defaultValue={name1}
            fontSize='2xl'
            width="230px"
            isPreviewFocusable={true}
          >
            <EditablePreview as='abbr' fontSize='2xl' fontWeight="bold"/>
              <Input maxLength="20" minLength="3" as={EditableInput} fontSize='2xl' fontWeight="bold" onChange={(e) => setNombre(e.target.value)}/>
              <EditableControls />
          </Editable>


        
          <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Tu Calificación</Text>

          <Flex alignItems={"center"} fontSize="18px">
            {score.map(function(e , i) {
              
              if(e <= num) return <Flex key={i}>⭐</Flex>
              else return <Flex key={i}><AiFillStar/></Flex>

            })}

            <Text ml="10px">{num? num + "/5": "0/5"}</Text>
          </Flex>


  
          <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-50" w="full">Tu Estado</Text><br/>

            <Flex  w="110px" mt="-50px">

              <Menu closeOnSelect={true}>
            
                <MenuButton rightIcon={<IoMdArrowDropdown color="#FF4e5b" />} as={Button}> {status? <GrStatusGoodSmall color="#00FF00"/>:<GrStatusGoodSmall color="	#FF0000"/>} </MenuButton>

                <MenuList minWidth='240px' >

                  <MenuOptionGroup  type='radio'>
                    <MenuItemOption value="con" onClick={() =>{sendMessage("status", {user: currentUser, status: "con"})}}> <Flex gap="2"  alignItems={"center"}> <GrStatusGoodSmall color="#00FF00"/> Conectado </Flex>  </MenuItemOption>
                    <MenuItemOption value="des"onClick={()=>{sendMessage("status", {user: currentUser, status: "des"})}}> <Flex gap="2" alignItems={"center"}> <GrStatusGoodSmall color="	#FF0000"/> Desconectado</Flex></MenuItemOption>
                  </MenuOptionGroup>

                </MenuList>
              </Menu>

            </Flex>

          <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-10" w="full">Tu email</Text>
          <Text  as='abbr' fontSize='2xl' fontWeight="normal" color="gray.500">{currentUser.email}</Text>

         
          <Text fontSize="sm" color="#FF4e5b" fontWeight="bold" mb="-10" w="full">
          <Tooltip bg='gray.500' label='¿Qué estás pensando?' placement='top-start'>
            Tu Bio
          </Tooltip>
          </Text>
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