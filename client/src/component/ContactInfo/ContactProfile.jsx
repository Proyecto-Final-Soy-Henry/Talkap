import React from "react";
import {
  Divider, 
  Flex, 
  Spinner,
  Image,
  Text,
  Heading,
  Box,

}from '@chakra-ui/react'
import { 
  Button, 
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Menu,
  MenuButton,
 

} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ContactActions from "./ContactActions";
import {GrStatusGoodSmall}from "react-icons/gr";
import { sendMessage } from "../../services/sockets";

function ContactInfo() {

    const user = useSelector(state => state.users.selected)
    const my = useSelector(state => state.users.my)
    
    return (
  
      <Flex justifyContent="center" minH="90vh" alignItems="center">
  
        {user && user.name ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10" >
            
            <Image
              borderRadius='full'
              border="1px"
              borderColor="#ff4f5a"
              marginTop="1"
              marginBottom="-5"
              boxSize='200px'
              objectFit='cover'
              src={user.picture}
              alt={user.name}
            />
            <Flex  mt="-2">
             {user.connected ? <Box display={"flex"} gap="1" > <GrStatusGoodSmall color="#00FF00"/>Conectado </Box> : <Box display={"flex"} gap="1"><GrStatusGoodSmall color="#FF0000"></GrStatusGoodSmall>Desconectado </Box>}
            </Flex>

            <Divider mb="-6"/>

              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-16" w="full">Nombre</Text>
          
              <Flex alignItems="center"/>
               <Heading as='h3' size='lg'>{user.name}</Heading>  


              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Bio</Text>
  
              <Text as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" >{user.bio ? user.bio : "¡¡Estoy usando Talkap!!"}</Text>


              <Divider mb="-6"/>

              <ContactActions user={user} my={my}/>

              <Divider mb="-6"/>
              {}
                     

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
  
  export default ContactInfo
