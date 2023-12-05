import { ThemeProvider } from "@mui/material";
import React from "react";
import { Theme } from "../../../themes";

interface ImageProps {
  src?: string;
  onClick?: any;
  sx?: any;
  height?: string;
  width?: string;
  alt?: string;
  hidden?: boolean;
  id?: any;
}

const Image = (props: ImageProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <img id={props.id} {...props} style={props.sx} alt={props.alt} />
    </ThemeProvider>
  );
};

export default Image;
