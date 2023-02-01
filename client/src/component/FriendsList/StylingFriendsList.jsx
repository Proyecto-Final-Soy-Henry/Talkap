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
import {IoIosCloseCircle} from 'react-icons/io'
import { setSelected,setAddressee} from '../../store/slices/users';
import { sendMessage } from '../../services/sockets';

function StylingFriendsList({user, handle}) {
    const {my} = useSelector(state=>state.users)

    const dispatch = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState("rigth");


  return (
    <Flex key={user.email} justify="center">
        <Menu isLazy display="flex" justify="center">
        <MenuButton onClick={() => {dispatch(setSelected(user))}}><UserCard user={user} handle={handle}/></MenuButton> 
        <MenuList>
            <MenuItem onClick={onOpen}  icon={<FaUserAlt />} _hover={{ bg: '#fe4e5b',color:"white"}}>Ver Perfil</MenuItem>
            <MenuItem onClick={()=>{dispatch(setAddressee(user))}} icon={<TbSend />} _hover={{ bg: '#fe4e5b',color:"white"}}>Enviar Mensaje</MenuItem>
            <MenuItem  onClick={()=>{sendMessage("deleteFriends",{user,my})}} icon={<IoIosCloseCircle />} _hover={{ bg: '#fe4e5b' ,color:"white"}}>Eliminar de Amigos</MenuItem>
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

export default StylingFriendsList