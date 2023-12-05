import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  stepConnectorClasses,
  StepIconProps,
  ThemeProvider,
} from "@mui/material";

import { Theme } from "../../../themes/index";
import MyText from "../Typography";

interface CustomStepperProps {
  steps: Array<string>;
  alternativeLabel: boolean;
  activeStep: any;
  orientation?: any;
  vertical?: boolean;
  labelColor?:any;
}

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: Theme.spacing(2.5),
    left: "calc(-50%)",
    right: "calc(50% )",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: `${Theme.palette.primary["100"]}`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: `${Theme.palette.primary["100"]}`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: `${Theme.palette.structuralColors.blue}`,
    borderTopWidth: Theme.spacing(1),
    borderRadius: Theme.spacing(0.25),
  },
}));

const CustomStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    display: "flex",
    height: Theme.spacing(5.5),
    alignItems: "center",
    "& .CustomStepIcon-completedIcon": {
      zIndex: 1,
    },
  })
);

const CustomImg = (
  <img
    src="./Assets/Icons/steppericon.svg"
    height={"50%"}
    alt="img not found"
    className="CustomStepIcon-completedIcon"
  />
);

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;
  let iconToShow = null;
  if (!completed) {
    if (active) {
      iconToShow = CustomImg;
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <CustomStepIconRoot ownerState={{ active }} className={className}>
        {iconToShow}
      </CustomStepIconRoot>
    </ThemeProvider>
  );
};

const CustomStepper = (props: CustomStepperProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Stepper {...props} connector={<CustomStepConnector />}>
        {props.steps.map((label: any,index:number) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
            >
              <MyText variant={'b2'} color={props.labelColor[index]?Theme.palette.primary[500]:Theme.palette.text.lowemphasis}>{label}</MyText>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
};

export default CustomStepper;
