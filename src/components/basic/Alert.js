import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/core";

const AlertBasic = ({ status, message }) => (
  <Alert status={status}>
    <AlertIcon />
    {message}
  </Alert>
);

export default AlertBasic;
