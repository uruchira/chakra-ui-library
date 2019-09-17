import React from "react";
import { Checkbox } from "@chakra-ui/core";

const CheckboxBasic = ({
  id,
  name,
  value,
  size,
  color,
  defaultIsChecked,
  onChange
}) => (
  <Checkbox
    id={id}
    name={name}
    value={value}
    size={size}
    color={color}
    defaultIsChecked={defaultIsChecked}
    onChange={onChange}
  />
);

export default CheckboxBasic;
