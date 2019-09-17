import React from "react";
import { Avatar } from "@chakra-ui/core";

const AvatarBasic = ({ size, name, src }) => (
  <Avatar size={size} name={name} src={src} />
);

export default AvatarBasic;
