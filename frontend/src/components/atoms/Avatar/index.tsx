import React from "react";
import MuiAvatar from "@mui/material/Avatar";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../../themes";

interface AvatarProps {
  src?: string;
  alt?: string;
  sx?: any;
  onClick?: any;
}

const Avatar = (props: AvatarProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <MuiAvatar {...props} />
    </ThemeProvider>
  );
};

export default Avatar;
