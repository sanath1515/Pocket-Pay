import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { SideNavItemsType } from "../../../utils/constants";
import Theme from "../../../themes";
import MyText from "../../atoms/Typography";
import Image from "../../atoms/Image";
import { NavItem } from "../../molecules/NavItem";

export type SideNavSubMenuItemType = {
  hidden?: boolean;
};

export type SideNavigationBarProps = {
  data: SideNavItemsType;
};

export const SideNavigationBar = (props: SideNavigationBarProps) => {
  const { data } = props;
  return (
    <Box
      sx={{
        width: "auto",
        minHeight: "96.6vh",
        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Grid item container py={"2.5vh"} justifyContent="center">
        <Image
          alt="pocketpay-logo"
          src="./assets/icons/Brand.svg"
          width={"45%"}
        />
      </Grid>
      <Grid item container direction="column">
        <Grid item container direction="column" rowSpacing={"0.3vh"}>
          {data.mainMenuItems.map((element: any, index: any) => (
            <Grid
              key={`navitem-${index + 1}`}
              item
              px={'1vw'}
              sx={{
                cursor: 'pointer',
                "&:hover": {
                  backgroundColor: Theme.palette.text.low,
                  borderRadius: Theme.spacing(1),
                },
              }}
            >
              <NavItem
                src={element.src}
                text={element.text}
                active={element.active}
                variant={element.textvariant}
                chip={element.chipText}
                chipname={element.chipName}
                color={
                  index === 0
                    ? Theme.palette.primary[500]
                    : Theme.palette.text.medium
                }
              />
            </Grid>
          ))}
        </Grid>
        {data.subMenuItems && (
          <>
            {data.subMenuItems.map(
              (
                element: {
                  hidden: any;
                  label:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  items: any[];
                },
                index: number
              ) => (
                <Grid key={`item-${index + 1}`} item>
                  {!element.hidden && (
                    <Grid container direction="column">
                      <Grid item>
                        <Divider />
                      </Grid>
                      <Grid item container direction="column" p={2.5}>
                        <Grid item pb={2.5}>
                          <MyText
                            children={element.label}
                            variant="caption1"
                            color={Theme.palette.text.secondary}
                          />
                        </Grid>
                        <Grid
                          container
                          item
                          direction="column"
                          rowSpacing={2.5}
                        >
                          {element.items.map(
                            (
                              element: {
                                src: string | undefined;
                                text: string;
                              },
                              i: number
                            ) => (
                              <Grid key={`subitem-${i + 1}`} item>
                                <NavItem
                                  variant="avatar"
                                  src={element.src}
                                  text={element.text}
                                />
                              </Grid>
                            )
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              )
            )}
          </>
        )}
      </Grid>
    </Box>
  );
};
