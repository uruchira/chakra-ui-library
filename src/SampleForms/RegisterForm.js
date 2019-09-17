import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const RegisterForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="fname">First Name</FormLabel>
      <Input id="fname" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="lname">Last Name</FormLabel>
      <Input id="lname" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="reg_email">Email</FormLabel>
      <Input id="reg_email" type="email" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="reg_password">Password</FormLabel>
      <Input id="reg_password" type="password" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Register</Button>
    </FormControl>
  </>
);

export default RegisterForm;
