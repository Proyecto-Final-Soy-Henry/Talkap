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
import { useDispatch } from 'react-redux';
import {FaUserAlt} from 'react-icons/fa'
import {TbSend} from 'react-icons/tb'
import {IoMdPersonAdd} from 'react-icons/io'
import { setSelected,setAddressee,setFriend} from '../../store/slices/users';

function StylingUserList({user, handle}) {


    const dispatch = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("rigth");


  return (
    <Flex key={user.email} justify="center">
        <Menu isLazy display="flex" justify="center">
        <MenuButton onClick={() => {dispatch(setSelected(user))}}><UserCard user={user} handle={handle}/></MenuButton> 
        <MenuList>
            <MenuItem onClick={onOpen}  icon={<FaUserAlt />} _hover={{ bg: '#D986FF'}}>Ver Perfil</MenuItem>
            <MenuItem onClick={()=>{dispatch(setAddressee(user))}} icon={<TbSend />} _hover={{ bg: '#D986FF'}}>Enviar Mensaje</MenuItem>
            <MenuItem onClick={()=>{dispatch(setFriend(user))}} icon={<IoMdPersonAdd />} _hover={{ bg: '#D986FF'}}>Añadir a Amigos</MenuItem>
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