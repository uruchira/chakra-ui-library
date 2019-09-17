import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@chakra-ui/core";

const ModalBasic = ({
  size,
  title,
  description,
  isOpen,
  onClose,
  onSubmit
}) => (
  <Modal size={size} isOpen={isOpen} onClose={onClose}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>{description}</ModalBody>
    <ModalFooter>
      <Button mr={2} onClick={onClose}>
        Close
      </Button>
      <Button variantColor="cyan" onClick={onSubmit}>
        Submit
      </Button>
    </ModalFooter>
  </Modal>
);

export default ModalBasic;
