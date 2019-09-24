import { useToast } from "@chakra-ui/core";

export function useWrapperToast({ title, description, status }) {
  const toast = useToast();

  const showToast = () => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
      position: "bottom-right"
    });
  };

  return [showToast];
}
