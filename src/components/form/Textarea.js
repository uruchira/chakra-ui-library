import React from "react";
import { Textarea } from "@chakra-ui/core";

const TextareaBasic = ({ size, value, placeholder, onChange }) => (
  <Textarea
    size={size}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextareaBasic;
