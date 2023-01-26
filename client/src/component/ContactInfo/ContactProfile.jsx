import React from "react";
import {
  Divider, 
  Flex, 
  Spinner,
  Image,
  Heading,

}from '@chakra-ui/react'
import { useSelector } from 'react-redux'

  function ContactInfo() {

    const user = useSelector(state => state.users.selected)

    return (
  
      <Flex justifyContent="center" minH="90vh" alignItems="center">
  
        {user && user.name ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10" >

            <Image
              borderRadius='full'
              marginTop="10"
              marginBottom="-5"
              boxSize='200px'
              objectFit='cover'
              src={user.picture}
              alt={user.name}
            />

            <Divider mb="-6"/>

            <Heading as='h3' size='lg' fontWeight="bold">
              {user.name}
            </Heading>

            {/* <Text  as='abbr' fontSize='2xl' fontWeight="semibold">{user.bio}</Text> */}

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
