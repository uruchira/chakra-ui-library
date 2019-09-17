import React from "react";
import { Tooltip, Icon } from "@chakra-ui/core";

const TooltipBasic = ({ label, placement, iconName, iconSize, iconColor }) => (
  <Tooltip showArrow label={label} placement={placement}>
    <Icon name={iconName} size={iconSize} color={iconColor} />
  </Tooltip>
);

export default TooltipBasic;
