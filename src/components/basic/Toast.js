import { useToast as useChakraToast } from "@chakra-ui/core";
import {
  TOAST_DURATION,
  TOAST_CLOSABLE,
  CHECKOUT_POSITION
} from "../../constants";

export function useToast({ title, description, status }) {
  const toast = useChakraToast();

  const showToast = () => {
    toast({
      title,
      description,
      status,
      duration: TOAST_DURATION,
      isClosable: TOAST_CLOSABLE,
      position: CHECKOUT_POSITION
    });
  };

  return [showToast];
}
