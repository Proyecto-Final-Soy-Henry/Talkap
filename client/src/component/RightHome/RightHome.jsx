import { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react";

import UserList from '../UserList/UserList.jsx'
import ChatsList from "../ChatsList/ChatsList.jsx";

const RightHome = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Tabs w="30%" onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
      <Tab>Usuarios</Tab>
      <Tab>Chats</Tab>
        
      </TabList>
      <TabPanels>

        <TabPanel>{<UserList />}</TabPanel>
        <TabPanel>{<ChatsList/>}</TabPanel>
        
      </TabPanels>
    </Tabs>
  );
};

export default RightHome;
