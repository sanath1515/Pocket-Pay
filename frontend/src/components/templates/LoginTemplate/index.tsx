import { Grid } from "@mui/material";
import React from "react";
import Template from "../Landing";
import Image from "../../atoms/Image";
import { Theme } from "../../../themes";

interface LoginTemplateProps{
    children ?: any
}
export const LoginTemplate = (props: LoginTemplateProps) => {
  return (
    <Template
      data-testid="template-component"
      headingsx={{
        paddingTop: "3vh",
        paddingLeft: "5vw",
        height: "15%",
        width: "100%",
      }}
      Heading={
        <Grid container alignItems="center">
          <Grid item xs={6} sm={3}>
            <Image
              src="./assets/icons/Brand.svg"
              width={Theme.spacing(30.5)}
              data-testid="brand-image"
            />
          </Grid>
        </Grid>
      }
      main={
        <Grid container>
          <Grid item xs={6} sm={3}>
            {props.children}
          </Grid>
        </Grid>
      }
      mainsx={{
        marginX: "35vw",
        marginTop: "7vh",
      }}
    />
  );
};
