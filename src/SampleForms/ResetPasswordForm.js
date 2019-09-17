import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const ResetPasswordForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="new_password">New Password</FormLabel>
      <Input id="new_password" type="password" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
      <Input id="confirm_password" type="password" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Save</Button>
    </FormControl>
  </>
);

export default ResetPasswordForm;
