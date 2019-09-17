import React, { useState, useMemo } from "react";
import { Heading, Text, Stack, Button, useToast } from "@chakra-ui/core";

import AlertBasic from "./components/basic/Alert";
import AvatarBasic from "./components/basic/Avatar";
import SpinnerBasic from "./components/basic/Spinner";
import TooltipBasic from "./components/basic/Tooltip";

import ButtonBasic from "./components/form/Button";
import CheckboxBasic from "./components/form/Checkbox";
import RadioGroupBasic from "./components/form/RadioGroup";
import TextareaBasic from "./components/form/Textarea";

import AccordionBasic from "./components/advanced/Accordion";
import AlertDialogBasic from "./components/advanced/AlertDialog";
import ModalBasic from "./components/advanced/Modal";
import TabsBasic from "./components/advanced/Tabs";

import MainAccordion from "./Accordion/MainAccordion";
import MainAccordionItem from "./Accordion/MainAccordionItem";

import SimpleTabs from "./Tabs";

import AddUserForm from "./SampleForms/AddUserForm";
import ProfileForm from "./SampleForms/ProfileForm";
import ForgotPasswordForm from "./SampleForms/ForgotPasswordForm";

import Table from "./Table";

import { leaveData, productData, tabListData, rowData } from "./data";

function editRow(e = null, id) {
  console.log(id);
}

const columnData = [
  {
    Header: "Users",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Organization",
        accessor: "organization"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ]
  },
  {
    id: "edit",
    Header: () => null,
    Cell: ({ row }) => {
      return (
        <>
          <Button variant="link" onClick={e => editRow(e, row.original.id)}>
            <TooltipBasic
              label="View User"
              placement="top"
              showArrow={true}
              iconName="view"
              iconSize="22px"
              iconColor="blue.500"
            />
          </Button>
          <Button
            variant="link"
            ml={4}
            onClick={e => editRow(e, row.original.id)}
          >
            <TooltipBasic
              label="Edit User"
              placement="top"
              showArrow={true}
              iconName="edit"
              iconSize="22px"
              iconColor="teal.500"
            />
          </Button>
          <Button
            variant="link"
            ml={4}
            onClick={e => editRow(e, row.original.id)}
          >
            <TooltipBasic
              label="Delete User"
              placement="top"
              showArrow={true}
              iconName="delete"
              iconSize="22px"
              iconColor="red.500"
            />
          </Button>
        </>
      );
    }
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewMember, onNewMemberChange] = useState(false);
  const [leave, setLeaveValue] = useState("casual");

  const onCheckboxChange = e => {
    onNewMemberChange(e.target.checked);
  };

  const onRadioGroupChange = e => {
    setLeaveValue(e.target.value);
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const submit = () => {
    console.log("Submitted...");
    setIsOpen(false);
  };

  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "bottom-right"
    });
  };

  const [isAlertDialogOpen, setAlertDialogOpen] = React.useState();
  const onAlertDialogClose = () => setAlertDialogOpen(false);

  const [comment, setComment] = useState("");

  const onCommentChange = e => {
    setComment(e.target.value);
  };

  const columns = useMemo(() => columnData, []);

  return (
    <div className="app-page">
      <table>
        <tbody>
          <tr>
            <td>
              <Heading as="h3" size="lg">
                Basic
              </Heading>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Avatar</Text>
            </td>
            <td>
              <Stack isInline>
                <AvatarBasic
                  name="Dan Abrahmov"
                  src="http://bit.ly/dan-abramov"
                />
                <AvatarBasic
                  name="Kent Dodds"
                  src="http://bit.ly/kent-c-dodds"
                />
                <AvatarBasic
                  name="Ryan Florence"
                  src="http://bit.ly/ryan-florence"
                />
              </Stack>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Spinner</Text>
            </td>
            <td>
              <Stack isInline align="center">
                <SpinnerBasic
                  size="md"
                  speed="0.65s"
                  thickness="4px"
                  color="blue.500"
                  emptyColor="gray.200"
                />
                <SpinnerBasic
                  size="lg"
                  speed="0.65s"
                  thickness="4px"
                  color="red.500"
                  emptyColor="gray.200"
                />
                <SpinnerBasic
                  size="xl"
                  speed="0.65s"
                  thickness="4px"
                  color="teal.500"
                  emptyColor="gray.200"
                />
              </Stack>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Alert</Text>
            </td>
            <td>
              <Stack spacing={4}>
                <AlertBasic
                  status="error"
                  message="There was an error processes your request"
                />
                <AlertBasic
                  status="success"
                  message="Data uploaded to the server. Fire on!"
                />
                <AlertBasic
                  status="warning"
                  message="Seems your account is about expire, Upgrade now"
                />
                <AlertBasic
                  status="info"
                  message="Chakra is going live on August 30th. Get ready!"
                />
              </Stack>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Tooltip</Text>
            </td>
            <td>
              <Stack isInline align="center">
                <TooltipBasic
                  label="View Users"
                  placement="top"
                  showArrow={true}
                  iconName="view"
                  iconSize="14px"
                  iconColor="blue.500"
                />
                <TooltipBasic
                  label="Edit Users"
                  placement="top"
                  showArrow={true}
                  iconName="edit"
                  iconSize="18px"
                  iconColor="red.500"
                />
                <TooltipBasic
                  label="Delete User"
                  placement="top"
                  showArrow={true}
                  iconName="delete"
                  iconSize="22px"
                  iconColor="teal.500"
                />
              </Stack>
            </td>
          </tr>
          <tr>
            <td>
              <Heading as="h3" size="lg">
                Form
              </Heading>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Button</Text>
            </td>
            <td>
              <Stack isInline align="center">
                <ButtonBasic text="Submit" variantColor="green" />
                <ButtonBasic
                  text="Save"
                  variantColor="blue"
                  variant="outline"
                />
                <ButtonBasic text="Home" variantColor="red" variant="link" />
                <ButtonBasic
                  text="Process"
                  loadingText="Processing..."
                  variantColor="teal"
                  variant="outline"
                  isLoading
                />
              </Stack>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Checkbox</Text>
            </td>
            <td>
              <CheckboxBasic
                id="newMember"
                name="newMember"
                value={isNewMember}
                size="lg"
                color="red"
                defaultIsChecked={false}
                onChange={onCheckboxChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">RadioGroup</Text>
            </td>
            <td>
              <RadioGroupBasic
                id="leaves"
                name="leaves"
                value={leave}
                size="md"
                color="green"
                options={leaveData}
                onChange={onRadioGroupChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Textarea</Text>
            </td>
            <td>
              <TextareaBasic
                size="md"
                value={comment}
                placeholder="Your comment goes here..."
                onChange={onCommentChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Heading as="h3" size="lg">
                Advanced
              </Heading>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Modal</Text>
            </td>
            <td>
              <Button variantColor="green" onClick={open}>
                Open Modal
              </Button>
              <ModalBasic
                size="lg"
                title="This is a sample modal"
                description="This is the sample description for the modal from the chakra-ui library"
                isOpen={isOpen}
                onClose={close}
                onSubmit={submit}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Toast</Text>
            </td>
            <td>
              <Button onClick={showToast}>Show Toast</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Alert Dialog</Text>
            </td>
            <td>
              <Button
                variantColor="red"
                onClick={() => setAlertDialogOpen(true)}
              >
                Delete Customer
              </Button>
              <AlertDialogBasic
                header="Delete Customer"
                message=" Are you sure? You can't undo this action afterwards."
                buttonText="Delete"
                isOpen={isAlertDialogOpen}
                onClose={onAlertDialogClose}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Accordion (Static)</Text>
            </td>
            <td>
              <AccordionBasic
                details={productData}
                allowMultiple={false}
                openIcon="minus"
                closeIcon="add"
                iconSize="14px"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Accordion (Dynamic)</Text>
            </td>
            <td>
              <MainAccordion>
                <MainAccordionItem
                  title="Add New User"
                  iconSize="12px"
                  openIcon="minus"
                  closeIcon="add"
                >
                  <AddUserForm />
                </MainAccordionItem>
                <MainAccordionItem
                  title="User Profile"
                  iconSize="12px"
                  openIcon="minus"
                  closeIcon="add"
                >
                  <ProfileForm />
                </MainAccordionItem>
                <MainAccordionItem
                  title="Forgot Password"
                  iconSize="12px"
                  openIcon="minus"
                  closeIcon="add"
                >
                  <ForgotPasswordForm />
                </MainAccordionItem>
              </MainAccordion>
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Tabs (Static)</Text>
            </td>
            <td>
              <TabsBasic />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Tabs (Dynamic)</Text>
            </td>
            <td>
              <SimpleTabs listData={tabListData} />
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="lg">Table</Text>
            </td>
            <td>
              <Table columns={columns} data={rowData} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
