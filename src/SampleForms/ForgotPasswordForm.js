import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const LoginForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="fp_email">Email</FormLabel>
      <Input id="fp_email" type="email" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Send</Button>
    </FormControl>
  </>
);

export default LoginForm;
