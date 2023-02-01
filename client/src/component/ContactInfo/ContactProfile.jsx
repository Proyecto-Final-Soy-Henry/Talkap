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
import { useSelector } from 'react-redux'
import ContactActions from "./ContactActions";

function ContactInfo() {

    const user = useSelector(state => state.users.selected)
    
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
            <Flex justify="center" mt="-3">
             {user.connected ? <Box> 🟢 En linea </Box> : <Box> ⚪ Desconectado </Box>}
            </Flex>

            <Divider mb="-6"/>

              <Text fontSize="sm" color="#fe4e5b" fontWeight="bold" mb="-16" w="full">Nombre</Text>
          
              <Flex alignItems="center"/>
               <Heading as='h3' size='lg'>{user.name}</Heading>  


              <Text fontSize="sm" color="#fe4e5b" fontWeight="bold" mb="-8" w="full">Bio</Text>
  
              <Text as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" >{user.bio ? user.bio : "¡¡Estoy usando Talkap!!"}</Text>


              <Divider mb="-6"/>

              <ContactActions/>

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
