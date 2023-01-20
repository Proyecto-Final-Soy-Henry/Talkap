import { Button, Divider, Flex, Image, Input, InputGroup, InputRightElement, Spinner, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getUser} from '../../services/getCurrentUser.js'
import {FaPencilAlt} from 'react-icons/fa'


function ProfileInfo() {

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.users.currentUser)



  useEffect(() => {
    
    getUser(dispatch, "3")

  }, [dispatch]);
  
  return (

    <Flex justifyContent="center" minH="90vh" alignItems="center">

      {currentUser && currentUser.name ?
      
        <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10">
          <Image
            borderRadius='full'
            boxSize='300px'
            objectFit='cover'
            src={currentUser.picture}
            alt='Dan Abramov'
          />

          <Divider/>

          <Text fontSize="sm" color="twitter.600" fontWeight="bold" mb="-10" w="full" >Tu Nombre</Text>
          <Flex alignItems="center">
            <Text as='abbr' fontSize='2xl' mr="6" fontWeight="bold">{currentUser.name} </Text>
            <FaPencilAlt/>
          </Flex>

          <Text fontSize="sm" color="twitter.600" fontWeight="bold" mb="-10" w="full">Tu Contraseña</Text>
          {/* <Button colorScheme="twitter">Cambiar Contraseña</Button> */}

          <InputGroup size='md' maxW="72">
            <Input variant='filled' placeholder='*********' />
            <InputRightElement children={<FaPencilAlt />} />
          </InputGroup>
          


          <Text fontSize="sm" color="twitter.600" fontWeight="bold" mb="-10" w="full">Tu email</Text>
          <Text  as='abbr' fontSize='2xl' fontWeight="bold">{currentUser.email} </Text>
          

          <Text fontSize="sm" color="twitter.600" fontWeight="bold" mb="-10" w="full">Tu Bio</Text>

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