import React from 'react'
import UserCard from '../UserCard/UserCard'
import { Menu, 
    MenuButton, 
    MenuItem, 
    MenuList, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerBody,
    useDisclosure,
    Flex,
    DrawerCloseButton
} from "@chakra-ui/react";
import ContactProfile from '../ContactInfo/ContactProfile.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {FaUserAlt} from 'react-icons/fa'
import {TbSend} from 'react-icons/tb'
import {IoMdPersonAdd} from 'react-icons/io'
import {MdPersonRemove,MdOutlineDangerous} from 'react-icons/md'
import {CgCheckO} from 'react-icons/cg'
import { setSelected,setAddressee} from '../../store/slices/users';
import { sendMessage } from '../../services/sockets';
import { useState } from 'react';
import { useEffect } from 'react';

function StylingUserList({user, handle}) {
    const {my} = useSelector(state=>state.users)
    const [friend,setFriend] = useState(false)

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

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("rigth");

    
    let bans = []
    let banned = []
   

      if(my.banned){
        bans = JSON.parse(my.banned)
       }
   
     banned = bans.filter((e)=>{
       return e === user.email
     })
      

     

  return (
    <Flex key={user.email} justify="center">
        <Menu isLazy display="flex" justify="center">
        <MenuButton onClick={() => {dispatch(setSelected(user))}}><UserCard user={user} handle={handle}/></MenuButton> 
        <MenuList>

          {banned.length > 0?<MenuItem onClick={()=>{sendMessage("unBanned",{user,my})}}  icon={<CgCheckO color='green'/>} _hover={{ bg: '#fe4e5b',color:"white"}}>Desbloquear</MenuItem>
          

          
          :<><MenuItem onClick={onOpen}  icon={<FaUserAlt />} _hover={{ bg: '#fe4e5b',color:"white"}}>Ver Perfil</MenuItem>
          <MenuItem onClick={()=>{dispatch(setAddressee(user))}} icon={<TbSend />} _hover={{ bg: '#fe4e5b',color:"white"}}>Enviar Mensaje</MenuItem>

          {friend?<MenuItem onClick={()=>{sendMessage("deleteFriends",{user,my})}} icon={<MdPersonRemove color='red'/>} _hover={{ bg: '#fe4e5b',color:"white"}}>Eliminar de Amigos</MenuItem>:
          <MenuItem onClick={()=>{sendMessage("friends",{user,my})}} icon={<IoMdPersonAdd color="green" />} _hover={{ bg: '#fe4e5b',color:"white"}}>Añadir a Amigos</MenuItem>}</>}
            
            
        </MenuList>
        </Menu>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton maxW="100" />
          <DrawerBody>
            <ContactProfile/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default StylingUserList