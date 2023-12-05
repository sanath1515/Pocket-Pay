import React from "react";
import { ConfirmVerification } from ".";
import { Meta, Story } from "@storybook/react";
import { directorHeading, directorInfo, director1, directorButton, director2 } from "../../../utils/constants";

export default {
  title: "Organisms/ConfirmVerification",
  component: ConfirmVerification,
}as Meta;

const Template:Story = (args) => <ConfirmVerification Id2={director2} Heading={directorHeading} Info={directorInfo} Id1={director1} ButtonName={directorButton} {...args}/> ;

export const Default = Template.bind({});
Default.args = {
  Heading: "Confirm your business director",
  Info: "Please enter your details below to confirm your verification",
  Id: "Director1",
  ButtonName: "Add another director",
};