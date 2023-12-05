import React from "react";
import { ThemeProvider, Typography, TypographyProps } from "@mui/material";
import { Theme } from "../../../themes";

interface MyTextProps extends TypographyProps {
  children?: React.ReactNode;
  variant?: any;
  color?: any;
}

const MyText = (props: MyTextProps) => {
  Theme.typography.h1 = {
    "@media (max-width:1920px)": {
      fontSize: "1.5rem",
      fontWeight: "150",
      lineHeight: "2.5rem",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "1.45rem",
    //   fontWeight: "150",
    //   lineHeight: "2.45rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "1.25rem",
      fontWeight: "150",
      lineHeight: "2.25rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      fontWeight: "150",
      lineHeight: "2rem",
    },
  };
  
  Theme.typography.b1 = {
    "@media (max-width:1920px)": {
      fontSize: "1.25rem",
      fontWeight: "Regular",
      lineHeight: "2rem",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "1.13rem",
    //     fontWeight: "Regular",
    //     lineHeight: "1.87rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
        fontWeight: "Regular",
        lineHeight: "1.75rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
        fontWeight: "Regular",
        lineHeight: "1.5rem",
    },
  };


  Theme.typography.b2 = {
    "@media (max-width:1920px)": {
      fontSize: "1.063rem",
      fontWeight: "Regular",
      lineHeight: "1.5",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "0.85rem",
    //     fontWeight: "Regular",
    //     lineHeight: "1.37rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "0.8rem",
        fontWeight: "Regular",
        lineHeight: "1.25rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
        fontWeight: "Regular",
        lineHeight: "1.25rem",
    },
  };


  Theme.typography.b3 = {
    "@media (max-width:1920px)": {
      fontSize: "1rem",
    fontWeight: "Regular",
    lineHeight: "1.5rem",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "0.9rem",
    //     fontWeight: "Regular",
    //     lineHeight: "1.4rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "0.85rem",
        fontWeight: "Regular",
        lineHeight: "1.25rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
        fontWeight: "Regular",
        lineHeight: "1rem",
    },
    
    
  };


  Theme.typography.c1 = {
    "@media (max-width:1920px)": {
      fontSize: "0.875rem",
      fontWeight: "Regular",
      lineHeight: "1.313rem",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "0.7rem",
    //   fontWeight: "Regular",
    //   lineHeight: "1.2rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "0.6rem",
      fontWeight: "Regular",
      lineHeight: "0.95rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "0.56rem",
      fontWeight: "Regular",
      lineHeight: "1rem",
    },
  };


  Theme.typography.linkText = {
    "@media (max-width:1920px)": {
      fontSize: "0.875rem",
      fontWeight: "Regular",
      lineHeight: "0.831rem",
    },
    // [Theme.breakpoints.down("xl")]: {
    //   fontSize: "0.75rem",
    //   fontWeight: "Regular",
    //   lineHeight: "0.7rem",
    // },
    [Theme.breakpoints.down("lg")]: {
      fontSize: "0.65rem",
      fontWeight: "Regular",
      lineHeight: "0.7rem",
    },
    [Theme.breakpoints.down("md")]: {
      fontSize: "0.5rem",
      fontWeight: "Regular",
      lineHeight: "0.6rem",
    },
  };
  return (
    <ThemeProvider theme={Theme}>
      <Typography fontFamily={Theme.typography.fontFamily} {...props}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default MyText;
