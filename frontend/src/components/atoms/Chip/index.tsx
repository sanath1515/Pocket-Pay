import { Chip, SxProps, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../../themes";

export interface ChipProps{
    label: string;
    onClick?:()=>void;
    color?:"default"|"primary"|"secondary";
    variant:"outlined"|"filled";
    sx?:SxProps;
    disabled?:boolean;
}

export const ChipComponent=(props:ChipProps) =>{
    return(
        <ThemeProvider theme={theme}>
            <Chip
                data-testid="chip"
                label={props.label}
                onClick={props.onClick}
                color={props.color}
                variant={props.variant}
                sx={props.sx}
                disabled={props.disabled}
            />
        </ThemeProvider>
    )
}

