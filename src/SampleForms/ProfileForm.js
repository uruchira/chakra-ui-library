import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const ResetPasswordForm = () => (
  <>
    <FormControl>
      <FormLabel htmlFor="project">Project</FormLabel>
      <Input id="project" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <FormLabel htmlFor="description">Project Description</FormLabel>
      <Input id="description" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <Button>Save</Button>
    </FormControl>
  </>
);

export default ResetPasswordForm;
