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
import {AiFillStar} from 'react-icons/ai'

function ContactInfo() {

  const user = useSelector(state => state.users.selected)
  const my = useSelector(state => state.users.my)
  const score = [1,2,3,4,5]
  let num = 2


    return (
      
      <Flex justifyContent="center" minH="90vh" alignItems="center">
      
  
        {user && user.name ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10" >
            
            <Image
              borderRadius='full'
              border="1px"
              borderColor="#fe4e5b"
              marginTop="10"
              marginBottom="-5"
              boxSize='200px'
              objectFit='cover'
              src={user.picture}
              alt={user.name}
            />
            <Flex  mt="-2">
             {user.connected ? <Box display={"flex"} gap="1" alignItems="center"> <GrStatusGoodSmall color="#00FF00"/>Conectado </Box> : <Box display={"flex"} alignItems="center" gap="1"><GrStatusGoodSmall color="#FF0000"></GrStatusGoodSmall>Desconectado </Box>}
            </Flex>

            <Divider mb="-6"/>

              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-16" w="full">Nombre</Text>
          
              <Flex alignItems="center"/>
               <Heading as='h3' size='lg'>{user.name}</Heading>  


              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Bio</Text>
  
              <Text as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" >{user.bio ? user.bio : "¡¡Estoy usando Talkap!!"}</Text>


              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Calificación</Text>

              <Flex alignItems={"center"} fontSize="18px">
              {score.map(function(e , i) {
                
                if(e <= num) return <Flex key={i}><AiFillStar color="#ff4f5a"/> </Flex>
                else return <Flex key={i}><AiFillStar/></Flex>

              })}

              <Text ml="10px">{num + "/5"}</Text>
              </Flex>
             
             

              <Divider mb="-6"/>
              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Opciones</Text>

              <ContactActions user={user} my={my}/>

              <Divider mb="-6"/>
                     

          </Flex>
          
          :
          
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#fe4e5b'
            size='xl'
          />

        }
      
      </Flex>
    )
  }
  
  export default ContactInfo
