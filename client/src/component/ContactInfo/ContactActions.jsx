import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import {IoPersonAddSharp} from 'react-icons/io5'
import {ImBlocked} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import { setAddressee } from '../../store/slices/users'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../services/sockets'
import { useEffect } from 'react'

function ContactActions({user,my}) {

    const [banned, setbanned] = useState(false);
    let bans = JSON.parse(my.banned)
    
    useEffect(()=>{
        if(bans){
            if(bans.some((e)=>{ return e === user.email})){
                setbanned(true)
            }else setbanned(false)
        }
    },[banned])
    

    const dispatch = useDispatch()
  return (
    <Flex justify="center" direction="column" >

        <Button onClick={()=>{dispatch(setAddressee(user))}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <FiSend/> <Text >Enviar mensaje</Text>   
        </Button>

        <Button onClick={()=>{sendMessage("friends",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <IoPersonAddSharp/> <Text>Añadir a tus amigos</Text>
        </Button>

        {banned ?<Button onClick={()=>{sendMessage("unBanned",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <ImBlocked/><Text>Desbloquear</Text>
        </Button>:
        
        <Button onClick={()=>{sendMessage("banned",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <ImBlocked/><Text>Bloquear</Text>
        </Button>}
        
        
        <Button onClick={()=>{}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <AiFillStar/> <Text>Calificar</Text>
        </Button>

    </Flex>
  )
}

export default ContactActions