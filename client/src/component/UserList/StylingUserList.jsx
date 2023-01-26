import React from 'react'
import UserCard from '../UserCard/UserCard'
import { Menu, 
    MenuButton, 
    MenuItem, 
    MenuList,Box, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerBody,
    useDisclosure,
    Flex
} from "@chakra-ui/react";
import ContactProfile from '../ContactInfo/ContactProfile.jsx'
import { useDispatch } from 'react-redux';
import {FaUserAlt} from 'react-icons/fa'
import {TbSend} from 'react-icons/tb'
import {IoMdPersonAdd} from 'react-icons/io'
import { setSelected } from '../../store/slices/users';

function StylingUserList({user, handle}) {

    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("rigth");

  return (
    <Flex key={user.email} justify="center">

        <Menu isLazy >
        <MenuButton onClick={() => {dispatch(setSelected(user))}}><UserCard user={user} handle={handle}/></MenuButton> 
        <MenuList>
            <MenuItem onClick={onOpen}  icon={<FaUserAlt />} _hover={{ bg: '#D986FF'}}>Ver Perfil</MenuItem>
            <MenuItem icon={<TbSend />} _hover={{ bg: '#D986FF'}}>Enviar Mensaje</MenuItem>
            <MenuItem icon={<IoMdPersonAdd />} _hover={{ bg: '#D986FF'}}>Añadir a Amigos</MenuItem>
        </MenuList>
        </Menu>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <ContactProfile/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default StylingUserList