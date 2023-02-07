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
import {AiFillStar} from 'react-icons/ai'

function ContactInfo() {

  const users = useSelector(state => state.users.list)
  const user = useSelector(state => state.users.selected)
  const my = useSelector(state => state.users.my)
  const score = [1,2,3,4,5]
  const currentUser = users.find(e => e.email === user.email)

  let num = currentUser.stars
  let myStar


  if(currentUser.starTotal){
    let starT = JSON.parse(currentUser.starTotal)
    if(starT.length > 0){
      myStar = starT.find(e => e.email === my.email)
    }
  }
   
  
  let name1 = user.name
  if (user.name.includes("@")) {
    let newName = [];
    for (let i = 0; user.name[i] !== "@"; i++) {
      newName.push(user.name[i]);
    }
    name1 = newName.join("");
  }

    return (
      
      <Flex justifyContent="center" minH="90vh" alignItems="center">
      
  
        {user && user.name?
        
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
              
            />
            <Flex  mt="-2">
             {user.connected ? <Box display={"flex"} gap="1" alignItems="center"> <GrStatusGoodSmall color="#00FF00"/>Conectado </Box> : <Box display={"flex"} alignItems="center" gap="1"><GrStatusGoodSmall color="#FF0000"></GrStatusGoodSmall>Desconectado </Box>}
            </Flex>

            <Divider mb="-6"/>

              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-16" w="full">Nombre</Text>
          
              <Flex alignItems="center"/>
               <Heading as='h3' size='lg'>{name1}</Heading>  


              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Bio</Text>
  
              <Text as='i' mr="4" textAlign="center" maxW="200" fontSize='md' fontWeight="medium" >{user.bio ? user.bio : "¡¡Estoy usando Talkap!!"}</Text>


              <Text fontSize="sm" color="#ff4f5a" fontWeight="bold" mb="-8" w="full">Calificación</Text>

              <Flex alignItems={"center"} fontSize="18px">

              {score.map(function(e , i) {
                
                if(e <= num) return <Flex key={i}>⭐</Flex>
                else return <Flex key={i}><AiFillStar/></Flex>

              })}

              <Text ml="10px">{num ? num + "/5" : "0/5"}</Text>
              </Flex>
              
              <Flex mt="-15px">
                
                {myStar && 
                  <Text as="cite">
                    le diste {myStar.star} { myStar.star === 1 ? "estrella" : "estrellas"} a {user.name}
                  </Text>
                }
                
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