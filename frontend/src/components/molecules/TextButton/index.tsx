import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "../../../themes";
import MyText from "../../atoms/Typography";
interface TextButtonProps{
    text: string;
    variant:"outlined"|"contained"|"text",
    buttonName: any;
    onClick: any;
    sx?:any;
    textvariant?:any
    color?:any;
}
export const  TextButton = (props: TextButtonProps)=> {
    return (
        <ThemeProvider theme={Theme}>
        <MyText color={props.color} variant={props.textvariant}>{props.text}<Button onClick={props.onClick} variant={props.variant} sx={{textTransform:"none",textDecoration: "underline"}} >{props.buttonName} </Button></MyText>
        </ThemeProvider>
    )
}
