import React from "react";
import Image from "../../atoms/Image";
import MyText from "../../atoms/Typography";
import { Stack, ThemeProvider } from "@mui/material";
import { Theme } from "../../../themes";
import { ChipComponent } from "../../atoms/Chip";

interface NavItemProps {
  src?: string;
  alt?: string;
  variant: any;
  text: string;
  label?: string;
  chip?: any;
  onClick?: any;
  active?: boolean;
  color?:any
  chipname?:any
  cursor?:any
}

export const NavItem = (props: NavItemProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Stack
        onClick={props.onClick}
        sx={{
          cursor: props.cursor,
          "&:hover": {
            backgroundColor: Theme.palette.text.low,
            borderRadius:Theme.spacing(1)
          },
        }}
        direction="row"
        alignItems="center"
        width={'auto'}
        height={'4vh'}
        paddingX={'1vw'}
        paddingY={'1.5vh'}
        spacing={'1.5vw'}
      >
          <Image {...props} height="auto" />
          <MyText paddingRight={'1vw'} variant={props.variant} color={props.color}>{props.text}</MyText>
    
        {props.chip && (
            <ChipComponent
              label={props.chipname}
              variant={"filled"}
              color={"primary"}
              sx={{
                fontSize:'1.5vh',
                color:Theme.palette.primary[500],
                backgroundColor:Theme.palette.structuralColors.buttonHover,
                width:"3.41vw"
              }}
            />
          
        )}
      
      </Stack>
    </ThemeProvider>
  );
};
