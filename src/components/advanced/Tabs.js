import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

const TabsBasic = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>

    <TabPanels>
      <TabPanel p={5}>
        <p>one!</p>
      </TabPanel>
      <TabPanel p={5}>
        <p>two!</p>
      </TabPanel>
      <TabPanel p={5}>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default TabsBasic;
