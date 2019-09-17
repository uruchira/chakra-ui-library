import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/core";

const SimpleTabs = ({ listData }) => {
  return (
    <Tabs>
      <TabList>
        {listData.map(item => (
          <Tab key={item.id}>{item.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {listData.map(item => (
          <TabPanel key={item.id}>
            <Box p={4}>{item.component()}</Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default SimpleTabs;
