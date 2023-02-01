import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import {IoPersonAddSharp} from 'react-icons/io5'
import {ImBlocked} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

function ContactActions() {


  return (
    <Flex justify="center" direction="column" >

        <Button bg="none" _hover={{bg:"none", color:"#fe4e5b"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <FiSend/> <Text >Enviar mensaje</Text>   
        </Button>

        <Button bg="none" _hover={{bg:"none", color:"#fe4e5b"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <IoPersonAddSharp/> <Text>Añadir a tus amigos</Text>
        </Button>

        <Button bg="none" _hover={{bg:"none", color:"#fe4e5b"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <ImBlocked/><Text>Bloquear</Text>
        </Button>

        <Button bg="none" _hover={{bg:"none", color:"#fe4e5b"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <AiFillStar/> <Text>Calificar</Text>
        </Button>

    </Flex>
  )
}

export default ContactActions