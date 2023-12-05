import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SelectInput } from ".";

export default {
  component: SelectInput,
  title: "Molecules/SelectInput",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["standard", "filled", "outlined"],
      },
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    helperText: { control: "text" },
    starticon: { control: "text" },
    endicon: { control: "text" },
    select: { control: "boolean" },
    selectfield: { control: "array" },
    sx: { control: "object" },
    renderOption: { control: false },
    renderValue: { control: false },
    handleChange: { control: false },
    hidden: { control: "boolean" },
  },
} as Meta;

const selectfield = [
  { value: "Option 1", label: "Andorra", img: "./Assets/icons/c1.svg" },
  { value: "Option 2", label: "United Kingdom", img: "./Assets/icons/c2.svg" },
  { value: "Option 3", label: "Austria", img: "./Assets/icons/c3.svg" },
];

const Template: StoryFn<typeof SelectInput> = (args: any) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selected = event.target.value as string;
    const selectedField = selectfield.find((option: { value: string; }) => option.value === selected);
    if (selectedField) {
      setValue(selected);
      args.handleChange?.(selectedField);
    }
  };
  const renderValue = (selected: any) => {
    const selectedField = args.selectfield.find((option: { value: any; }) => option.value === selected);
    return selectedField ? selectedField.label : "";
  };
  return (
    <SelectInput
      value={value}
      handleChange={handleChange}
      renderValue={renderValue}
      selectfield={selectfield}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select an option",
  select: true,
  selectfield: selectfield,
  defaultValue: "",
};
