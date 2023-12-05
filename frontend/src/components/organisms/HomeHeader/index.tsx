import React from "react";
import Theme from "../../../themes";
import { Stack, ThemeProvider, useMediaQuery } from "@mui/material";
import Image from "./../../atoms/Image";
import Avatar from "../../atoms/Avatar";
import MyText from "../../atoms/Typography";
import { homeHeader } from "../../../utils/constants";

export interface HomeHeaderProps {
  handleAvatarClick?:any
  name?: string
}

export const HomeHeader = (props: HomeHeaderProps) => {


  const isSmallScreen = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={Theme}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        gap={Theme.spacing(3)}
        alignItems={isSmallScreen ? "flex-start" : "center"}
        justifyContent={isSmallScreen ? "flex-start" : "flex-end"}
        sx={{
          width: "97%",
          paddingY: Theme.spacing(4),
          paddingX: Theme.spacing(8),
          boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.05)",
          backgroundColor: Theme.palette.structuralColors.white
        }}
      >
        {!isSmallScreen && (
          <Image
            src="./assets/bell.svg"
          />
        )}
        <Stack direction="row" alignItems="center" gap={Theme.spacing(2)}>
          <Avatar
            data-testid="home-avatar"
            src={homeHeader.src}
            onClick={props.handleAvatarClick}
            sx={{
              cursor: "pointer"
            }}
          />
          {!isSmallScreen && (
            <MyText color={Theme.palette.text.medium} variant={'c1'}>{props.name}</MyText>
          )}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};