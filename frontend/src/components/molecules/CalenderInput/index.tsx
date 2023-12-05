import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SxProps, ThemeProvider } from "@mui/material";
import Theme from "../../../themes";

interface CalendarProps {
  value?: any;
  onChange?: any;
  renderDay?: any;
  label?: any;
  sx?: SxProps;
  minDate?: any;
  maxDate?: any;
}
export const CalenderInput = (props: CalendarProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          minDate={props.minDate}
          maxDate={props.maxDate}
          label={props.label}
          sx={{
            "& input": {
              paddingLeft:'1vw',
              height: "3.5vh",
              "@media (max-width: 1920px)": {
                height: "3.5vh",
              },
              "@media (max-width: 1440px)": {
                height: "3vh",
              },
              "@media (max-width: 1080px)": {
                height: "2vh",
              },
            },
            ...props.sx,
          }}
          value={props.value}
          onChange={props.onChange}
          format="DD-MM-YYYY"
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
