import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/core";

const RadioGroupBasic = ({
  id,
  name,
  value,
  size,
  color,
  options,
  onChange
}) => {
  return (
    <RadioGroup id={id} value={value} onChange={onChange}>
      {options.map(option => (
        <Radio
          key={option.id}
          name={name}
          size={size}
          color={color}
          value={option.value}
        >
          {option.name}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupBasic;
