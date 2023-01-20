import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Flex,
  } from '@chakra-ui/react'

  import {FaRegUserCircle} from 'react-icons/fa'
  import ProfileInfo from './ProfileInfo'

function Profile() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (

    <Flex justify="flex-end" pr="3">      
        <FaRegUserCircle onClick={onOpen} cursor="pointer" fontSize="50px"/>
     
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>Perfil</DrawerHeader>
        <DrawerBody>
           <ProfileInfo/>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    
    </Flex>
  )
}

export default Profile

