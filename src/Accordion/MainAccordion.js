import React from "react";
import { Accordion } from "@chakra-ui/core";

const MainAccordion = ({ allowMultiple, children }) => (
  <Accordion allowMultiple={allowMultiple}>{children}</Accordion>
);

export default MainAccordion;
