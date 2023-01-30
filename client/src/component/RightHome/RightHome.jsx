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

const RightHome = () => {
  const colors = useColorModeValue(["white", "white", "white"]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs
      isFitted
      w="25%"
      h="100vh"
      // overflow="hidden"
      onChange={(index) => setTabIndex(index)}
      bg={bg}
    >
      <TabList>
        <Tab
          color="#1D2671"
          _focus={{ color: "#BC00DD" }}
          fontWeight="semibold"
        >
          Usuarios
        </Tab>
        <Tab
          color="#1D2671"
          _focus={{ color: "#BC00DD" }}
          fontWeight="semibold"
        >
          Chats
        </Tab>
        <Tab
          color="#1D2671"
          _focus={{ color: "#BC00DD" }}
          fontWeight="semibold"
        >
          Amigos
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel paddingBottom="50px" overflowX="hidden" h="100vh">
          {<UserList />}
        </TabPanel>
        <TabPanel>{<ChatsList />}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightHome;
