import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button
} from "@chakra-ui/core";

const AlertDialogBasic = ({ isOpen, onClose, header, message, buttonText }) => {
  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogHeader fontSize="lg" fontWeight="bold">
        {header}
      </AlertDialogHeader>

      <AlertDialogBody>{message}</AlertDialogBody>

      <AlertDialogFooter>
        <Button ref={cancelRef} onClick={onClose}>
          Cancel
        </Button>
        <Button variantColor="red" onClick={onClose} ml={3}>
          {buttonText}
        </Button>
      </AlertDialogFooter>
    </AlertDialog>
  );
};

export default AlertDialogBasic;
