import React from "react";
import { Button } from "@chakra-ui/core";

const ButtonBasic = ({
  text,
  variantColor,
  variant,
  isLoading,
  loadingText,
  size
}) => (
  <Button
    aria-label={text}
    variantColor={variantColor}
    variant={variant}
    isLoading={isLoading}
    loadingText={loadingText}
    size={size}
  >
    {text}
  </Button>
);

export default ButtonBasic;
