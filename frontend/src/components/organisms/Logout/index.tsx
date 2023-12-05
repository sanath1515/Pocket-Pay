import Box from "@mui/material/Box";
import React from "react";
import MyText from "../../atoms/Typography";
import Divider from "@mui/material/Divider";
import Theme from "../../../themes";
import { Modal, Stack } from "@mui/material";
import { NavItem } from "../../molecules/NavItem";

interface LogoutProps {
  handleLogout?: any;
  logout?: any;
  openLogout?: any;
  name?: string
  id?: any
}

const Logout = (props: LogoutProps) => {
  return (
    <Modal
    data-testid="logout-modal"
      
      open={props.logout}
      onClose={() => {
        props.openLogout(false);
      }}
      sx={{ left: "85.5%", top: "7.2%",position: "absolute"}}
    >
      <Box
        data-testid='modal-content'
       sx={{"&:focus-visible": { outline: "none" } }}
       width={'12.5vw'}
       minHeight={'26.5vh'}
        paddingTop={Theme.spacing(4)}
        paddingBottom={Theme.spacing(3.25)}
        bgcolor={Theme.palette.structuralColors.white}
        borderRadius={Theme.spacing(2)} 
        boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.05)"}
        alignItems={"flex-end"}

      >
        <Stack paddingLeft={Theme.spacing(5)} paddingBottom={Theme.spacing(2)}>
          <MyText
            variant={"b2"}
            sx={{
              paddingBottom: Theme.spacing(0.25),
            }}
            color={Theme.palette.text.high}
          >
            {props.name}
          </MyText>
          <MyText
            variant={"c1"}
            sx={{
              paddingTop: Theme.spacing(0.25),
            }}
            color={Theme.palette.text.lowemphasis}
          >
            {props.id}
          </MyText>
        </Stack>

        <Divider></Divider>


        <NavItem
          variant={"b2"}
          text={"your details"}
          src="./Assets/icons/user.svg"
        />
        <NavItem variant={"b2"} text={"settings"} src="./assets/setting.svg" />
        <NavItem variant={"b2"} text={"Help Center"} src="./assets/help.svg" />
        <NavItem
        data-testid="logout-button"
          
          cursor="pointer"
          variant={"b2"}
          text={"Logout"}
          src="./assets/logout.svg"
          onClick={props.handleLogout}
        />


      </Box>
    </Modal>
  );
};
export default Logout;
