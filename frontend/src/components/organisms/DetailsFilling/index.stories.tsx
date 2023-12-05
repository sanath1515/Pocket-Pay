import { Meta, StoryFn } from "@storybook/react";
import { DetailsFilling, DetailsFillingProps } from ".";
import React from "react";


export default {
    title: "Organisms/DetailsFilling",
    component: DetailsFilling,
} as Meta;

const Template: StoryFn<typeof DetailsFilling> = (args:any) => <DetailsFilling {...args} />;

export const Default = Template.bind({});
Default.args = {};


