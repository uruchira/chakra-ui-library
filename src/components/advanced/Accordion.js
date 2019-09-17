import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  Icon
} from "@chakra-ui/core";

const AccordionBasic = ({
  details,
  allowMultiple,
  openIcon,
  closeIcon,
  iconSize
}) => (
  <Accordion allowMultiple={allowMultiple}>
    {details.map(detail => (
      <AccordionItem key={detail.id}>
        {({ isExpanded }) => (
          <>
            <AccordionHeader>
              <Box flex="1" textAlign="left">
                {detail.title}
              </Box>
              <Icon size={iconSize} name={isExpanded ? openIcon : closeIcon} />
            </AccordionHeader>
            <AccordionPanel pb={4}>{detail.description}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    ))}
  </Accordion>
);

export default AccordionBasic;
