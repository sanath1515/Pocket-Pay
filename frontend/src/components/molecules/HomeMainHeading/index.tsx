import { Grid, Stack } from "@mui/material";
import React from "react";
import Theme from "../../../themes";
import Image from "../../atoms/Image";
import MyText from "../../atoms/Typography";
import { ReviewDetails } from "../../../utils/constants";

interface HomeMainHeadingProps {
  name?: string;
  status?: string;
  sendingAmount?: string;
  recievingAmount?: string;
  showData?: any;
  src?: string;
  id?: any;
}

export const HomeMainHeading = (props: HomeMainHeadingProps) => {
  return (
    <Grid
      data-testid="home-heading"
      paddingX={'1.8vw'}
      paddingY={'2.4vh'}
      height="9.5vh"
      width={"100%"}
      display={"flex"}
      bgcolor={Theme.palette.structuralColors.white}
      borderBottom={"1px solid" + Theme.palette.grey[100]}
    >
      <Stack
        minWidth={40}
        minHeight={40}
        alignItems={"center"}
        justifyContent={"space-around"}
        bgcolor={Theme.palette.structuralColors.blue}
        borderRadius={"50%"}
      >
        <Image
          height={'14vh'}
          width={'14vw'}
          src="./Assets/icons/arrowcross.svg"
        />
      </Stack>

      <Stack
        width={'25vw'}
        paddingLeft={'1.5vw'}
      >
        <MyText variant={"b2"} color={Theme.palette.text.high}>
          {props.name ? props.name : ReviewDetails[0].Name}
        </MyText>
        <MyText variant={"c1"} color={Theme.palette.text.medium}>
          {props.status ? props.status : "Sending"}
        </MyText>
      </Stack>
      <Stack width="100%" gap={Theme.spacing(1)} alignItems={"flex-end"}>
        <MyText variant={"c1"} color={Theme.palette.text.high}>
          {props.sendingAmount ? props.sendingAmount : "100 GBP"}
        </MyText>
        <MyText variant={"c1"} color={Theme.palette.text.medium}>
          {props.recievingAmount ? props.recievingAmount : "114.68 EUR"}
        </MyText>
      </Stack>
      <Stack paddingLeft={'2vw'} justifyContent={"space-around"}>
        <Image
          id={props.id}
          data-testid="show-data"
          src={props.src}
          onClick={props.showData}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </Grid>
  );
};
