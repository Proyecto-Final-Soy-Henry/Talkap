import { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react";

import UserList from "../UserList/UserList.jsx";
import ChatsList from "../ChatsList/ChatsList.jsx";
import FriendsList from "../FriendsList/FriendsList.jsx"

const RightHome = () => {
  const colors = useColorModeValue(["white", "white", "white"]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs isFitted w="25%" onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab
          color="#1D2671"
          _focus={{ color: "#fe4e5b" }}
          fontWeight="semibold"
        >
          Usuarios
        </Tab>
        <Tab
          color="#1D2671"
          _focus={{ color: "#fe4e5b" }}
          fontWeight="semibold"
        >
          Chats
        </Tab>
        <Tab
          color="#1D2671"
          _focus={{ color: "#fe4e5b" }}
          fontWeight="semibold"
        >
          Amigos
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel overflowX="hidden" overflowY="scroll">
          {<UserList />}
        </TabPanel>
        <TabPanel>{<ChatsList />}</TabPanel>
        <TabPanel>{<FriendsList/>}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightHome;
