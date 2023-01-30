import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Avatar,
} from "@chakra-ui/react";

import ProfileInfo from "./ProfileInfo";
import { useSelector } from "react-redux";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("left");
  const user = useSelector(state => state.users.my)


  return (
    <Flex justify="flex-end" pr="1" ml="3" mt="0">
       <Avatar size='lg' name={user.name} src={user.picture} onClick={onOpen} cursor="pointer" />

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton maxW="100" />
          <DrawerBody>
            <ProfileInfo />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Profile;
