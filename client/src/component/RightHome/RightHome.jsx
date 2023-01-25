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
        <Tab>Salas</Tab>
        <Tab>Usuarios</Tab>
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
        <TabPanel>{<UserList />}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightHome;
