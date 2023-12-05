import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box } from "@mui/material";
import { SideNavItemsType} from "../../../utils/constants";
import Theme from "../../../themes";
import { SideNavigationBar, SideNavSubMenuItemType } from ".";
export default {
  title: "Organisms/SideNavigationBar",
  component: SideNavigationBar,

} as Meta;

const Template: StoryFn<typeof SideNavigationBar> = (args:any) => (
  <Box sx={{ width: Theme.spacing(70), height: Theme.spacing(192) }}>
    <SideNavigationBar {...args} />
  </Box>
);

const defaultData: SideNavItemsType = {
  mainMenuItems: [
    {
      text: "Home",
      active: true,
      variant: "icon",
      chipText: false,
      chipName: "",
      src: "./assets/icons/homeicon.svg",
      hidden: false,
      textvariant: "c1",
    },
    {
      text: "Cards",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: "./assets/icons/cardsicon.svg",
      hidden: false,
    },
    {
      text: "Recipients",
      active: false,
      variant: "icon",
      chipText: false,
      textvariant: "c1",
      chipName: "",
      src: "./assets/icons/Person.svg",
      hidden: false,
    },
    {
      text: "Team",
      active: false,
      variant: "chip",
      chipText: true,
      chipName: "New",
      textvariant: "c1",
      src: "./assets/icons/team.svg",
      hidden: false,
    },
    {
      text: "Account",
      active: false,
      variant: "icon",
      textvariant: "c1",
      chipText: false,
      chipName: "",
      src: "./assets/icons/user.svg",
      hidden: false,
    },
    {
      text: "Invite & earn 150 GBP",
      active: false,
      variant: "icon",
      textvariant: "c1",
      chipName: "",
      chipText: false,
      src: "./assets/icons/gift.svg",
      hidden: false,
    },
  ],
      subMenuItems: [
        {
          label: "Balances",
          hidden:true,
    
          items: [
            {
              src:"./assets/icons/india.svg",
              text: "10,000.00 INR",
              active: false,
              variant: "avatar",
             
              
            },
            {
              src:"./assets/icons/ireland.svg",
              text: "1200 GBP",
              active: false,
              variant: "avatar",
            },
            {
              src:"./assets/icons/austurlia.svg",
              text: "192.00 USD",
              active: false,
              variant: "avatar",
            },
            {
              src:"./assets/icons/plusGrey.svg",
              text: "Open a balance",
              active: false,
              variant: "icon",
            },
          ],
        },
        {
          label: "jars",
          hidden: true,
    
          items: [
            { src: "/assets/icons/plusGrey.svg", text: "Open a jar", active: false, variant: "icon" },
          ],
        },
      ],
    };
    

const subMenuItem: SideNavSubMenuItemType = {
  hidden: true,
};

export const HiddenSubMenu = Template.bind({});
HiddenSubMenu.args = {
  data: {
    mainMenuItems: defaultData.mainMenuItems,
    subMenuItems: defaultData.subMenuItems,
  },
};
