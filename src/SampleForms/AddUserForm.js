import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const RegisterForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="company">Organization</FormLabel>
      <Input id="organization" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="address">Address</FormLabel>
      <Input id="address" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Register</Button>
    </FormControl>
  </>
);

export default RegisterForm;
