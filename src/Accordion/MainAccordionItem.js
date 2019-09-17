import React from "react";
import {
  AccordionItem,
  AccordionHeader,
  Box,
  Icon,
  AccordionPanel
} from "@chakra-ui/core";

const MainAccordionItem = ({
  title,
  iconSize,
  openIcon,
  closeIcon,
  children
}) => (
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <Icon size={iconSize} name={isExpanded ? openIcon : closeIcon} />
        </AccordionHeader>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </>
    )}
  </AccordionItem>
);

export default MainAccordionItem;
