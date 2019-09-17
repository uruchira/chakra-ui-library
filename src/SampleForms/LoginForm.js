import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const LoginForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="login_email">Email</FormLabel>
      <Input id="login_email" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="login_password">Password</FormLabel>
      <Input id="login_password" type="password" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Login</Button>
    </FormControl>
  </>
);

export default LoginForm;
