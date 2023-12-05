import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalenderInput } from ".";
import dayjs from "dayjs";
import { useState } from "react";
import MyText from "../../atoms/Typography";
import Theme from "../../../themes";

export default {
  title: "Molecules/CalenderInput",
  component: CalenderInput,
} as Meta;

const Template: Story = (args) => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
  const datevalue = selectedDate.toDate();
  const handleDateChange = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalenderInput
        onChange={handleDateChange}
        label={
          <MyText variant="b2" sx={{ paddingLeft: Theme.spacing(2.5) }}>
            Date of Birth
          </MyText>
        }
        minDate={today}
      />
    </LocalizationProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {};