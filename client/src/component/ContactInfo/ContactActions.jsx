import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import {IoPersonAddSharp,IoPersonRemoveSharp} from 'react-icons/io5'
import {ImBlocked} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import { setAddressee } from '../../store/slices/users'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../services/sockets'
import { useEffect } from 'react'
import {CgCheckO} from 'react-icons/cg'
import { 
  
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Menu,
  MenuButton,
 

} from '@chakra-ui/react'

function ContactActions({user,my}) {

    const [banned, setbanned] = useState(false);
    const [friend,setFriend] = useState(false)
    const [star,setStar] = useState(false)
    let bans = JSON.parse(my.banned)
    
    useEffect(()=>{
        if(bans){
            if(bans.some((e)=>{ return e === user.email})){
                setbanned(true)
            }else setbanned(false)
        }
    },[banned,my.banned])
    
    useEffect(()=>{
      if(my.friends){
        console.log("hola")
        let f = JSON.parse(my.friends)
        if(f.some((e)=>{return e.email === user.email})){
          setFriend(true)
        }else setFriend(false)
      }
    },[friend,my.friends])
    

    const dispatch = useDispatch()
  return (
    <Flex justify="center" direction="column" >

        <Button onClick={()=>{dispatch(setAddressee(user))}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <FiSend/> <Text >Enviar mensaje</Text>   
        </Button>

        {friend?<Button onClick={()=>{sendMessage("deleteFriends",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <IoPersonRemoveSharp color="red"/> <Text>Eliminar de amigos</Text>
        </Button>
        :<Button onClick={()=>{sendMessage("friends",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
             <IoPersonAddSharp color="green"/> <Text>Añadir a tus amigos</Text>
            </Button>}
        

        {banned ?<Button onClick={()=>{sendMessage("unBanned",{user,my})}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <CgCheckO color='green'/><Text>Desbloquear</Text>
        </Button>:
        
        <Button onClick={()=>{sendMessage("banned",{user,my}) 
        dispatch(setAddressee(null))}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <ImBlocked color='red'/><Text>Bloquear</Text>
        </Button>}
        
        
        <Button onClick={()=>{setStar(true)}} bg="none" _hover={{bg:"none", color:"#ff4f5a"}} display={"flex"} pl="1" gap="3" justifyContent={"left"}>
            <AiFillStar/> <Text>Calificar</Text>
        </Button>
      {star&&<> 

<Flex  w="110px" mt="0px">

  <Menu closeOnSelect={true}>

    <MenuButton  as={Button}> {"Calificar⭐"} </MenuButton>

    <MenuList minWidth='240px' >

      <MenuOptionGroup  type='radio'>
        <MenuItemOption value={1} onClick={() =>{sendMessage("stars", {user, star:{star:1, email:my.email}})}}> 1</MenuItemOption>
        <MenuItemOption value={2} onClick={()=>{sendMessage("stars", {user, star:{star:2, email:my.email}})}}> 2</MenuItemOption>
        <MenuItemOption value={3} onClick={() =>{sendMessage("stars", {user, star:{star:3, email:my.email}})}}> 3</MenuItemOption>
        <MenuItemOption value={4} onClick={()=>{sendMessage("stars", {user, star:{star:4, email:my.email}})}}> 4</MenuItemOption>
        <MenuItemOption value={5} onClick={() =>{sendMessage("stars", {user, star:{star:5, email:my.email}})}}> 5</MenuItemOption>
      </MenuOptionGroup>

    </MenuList>
  </Menu>

</Flex></>}
     
    </Flex>
  )
}

export default ContactActions