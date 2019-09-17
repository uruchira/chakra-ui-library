import React from "react";
import { Spinner } from "@chakra-ui/core";

const SpinnerBasic = ({ size, speed, thickness, color, emptyColor }) => (
  <Spinner
    size={size}
    speed={speed}
    color={color}
    thickness={thickness}
    emptyColor={emptyColor}
  />
);

export default SpinnerBasic;
