import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import { FaRegUserCircle } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("rigth");

  return (
    <Flex justify="flex-end" pr="1">
      <FaRegUserCircle onClick={onOpen} cursor="pointer" fontSize="50px" />

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
