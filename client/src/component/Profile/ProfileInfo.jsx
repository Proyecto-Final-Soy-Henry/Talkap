import { 
  Divider, 
  Flex, 
  Image, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Spinner, 
  Text, 
  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getUser} from '../../services/getCurrentUser.js'
import {FaPencilAlt} from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";

function ProfileInfo() {

    const { user } = useAuth0();
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.users.currentUser)



  useEffect(() => {
    
    getUser(dispatch, user.email)

  }, [dispatch]);
  
  return (

    <Flex justifyContent="center" minH="90vh" alignItems="center">

      {currentUser && currentUser.picture ?
      
        <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10">
          <Image
            borderRadius='full'
            boxSize='300px'
            objectFit='cover'
            src={currentUser.picture}
            alt='Dan Abramov'
          />

          <Divider/>

          <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu Nombre</Text>
          <Flex alignItems="center">
            <Text as='abbr' fontSize='2xl' mr="6" fontWeight="bold">{currentUser.name} </Text>
            <FaPencilAlt/>
          </Flex>


          <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu Contraseña</Text>
          <InputGroup size='md' maxW="72">
            <Input variant='filled' placeholder='*********' disabled bg="gray-500"/>
            <InputRightElement children={<FaPencilAlt />} />
          </InputGroup>
          

          <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu email</Text>
          <Text  as='abbr' fontSize='2xl' fontWeight="semibold">{currentUser.email} </Text>
          
          
          <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu Bio</Text>
          <Flex alignItems="center">
            <Text as='i' mr="4" textAlign="center" maxW="72" fontSize='md' fontWeight="medium" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </Text>
            <FaPencilAlt/>
          </Flex>
    
          <Divider/>

        </Flex>

        :

        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      }
    
    </Flex>
  )
}

export default ProfileInfo