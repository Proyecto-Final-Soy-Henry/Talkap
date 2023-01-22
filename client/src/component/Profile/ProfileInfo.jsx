import { 
    Divider, 
    Flex, 
    Image, 
    Spinner, 
    Text, 
    } from '@chakra-ui/react'

  import { useSelector } from 'react-redux'
  import {FaPencilAlt} from 'react-icons/fa'
  
  function ProfileInfo() {
  
   
      const currentUser = useSelector(state => state.users.my)
  
  
    
    return (
  
      <Flex justifyContent="center" minH="90vh" alignItems="center">
  
        {currentUser && currentUser.picture ?
        
          <Flex direction="column" alignSelf={'flex-start'} alignItems="center" gap="10">
            <Image
              borderRadius='full'
              boxSize='200px'
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
  
  
         
            
  
            <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu email</Text>
            <Text  as='abbr' fontSize='2xl' fontWeight="semibold">{currentUser.email} </Text>
            
            
            <Text fontSize="sm" color="#BC00DD" fontWeight="bold" mb="-10" w="full">Tu Bio</Text>
            <Flex alignItems="center">
              <Text as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
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
