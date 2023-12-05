import React, { useEffect, useState } from "react";
import Template from "../../components/templates/Landing";
import CustomStepper from "../../components/atoms/Stepper";
import { Theme } from "../../themes";
import Stack from "@mui/material/Stack";
import Image from "../../components/atoms/Image";
import Button from "../../components/atoms/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import BusinessSearch from "../../components/organisms/BusinessSearch";
import ConfirmBusiness from "../../components/organisms/ConfirmBusiness";
import ConfirmAddress from "../../components/organisms/ConfirmAddress";
import { useDispatch, useSelector } from "react-redux";
import { setBusiness, setTradingAddress, setUser } from "../../state/reducers";
import { BusinessActivity } from "../../components/organisms/BusinessActivity";
import { DetailsFilling } from "../../components/organisms/DetailsFilling";
import axios from "axios";
import { mockServer } from "../../utils/constants";

const Business = () => {
  const Navigate = useNavigate();
  const [steppervalue, setSteppervalue] = useState(0);
  const [businessSearch, setBusinessSearch] = useState(true);
  const [confirmBusiness, setConfirmBusiness] = useState(false);
  const [showTradingAddress, setShowTradingAddress] = useState(false);
  const [businessActivity, setBusinessActivity] = useState(false);
  const [detailsfilling, setDetailsfilling] = useState(false);
  const users = useSelector((state: any) => state.users);
  const business = useSelector((state: any) => state.business);
  const trading = useSelector((state: any) => state.tradingAddress);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    ...users,
  });
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    registrationNumber: "",
    businessAddress: "",
    category: "",
    subCategory: "",
    sizeOfBusiness: "",
  });
  const [tradingAdd, setTradingAdd] = useState([]);
  const [label, setLabel] = useState([true, false, false]);

  useEffect(() => {
    dispatch(setBusiness(businessDetails));
    dispatch(setTradingAddress(tradingAdd));
    dispatch(setUser(userData));
  }, [dispatch, businessDetails, tradingAdd, userData]);

  return (
    <Template
      headingsx={{
        paddingTop: "3vh",
        paddingLeft: "5vw",
        paddingRight: "5.1vw",
        height: "15%",
        width: "100%",
      }}
      Heading={
        <Stack direction="row" height={"100%"} spacing={"6vw"}>
          <Stack>
            <Image src="./assets/icons/Brand.svg" width={Theme.spacing(30.5)} />
          </Stack>
          <Stack width={"65vw"} paddingTop={Theme.spacing(1.6)}>
            {
              <CustomStepper
                steps={["Your business", "Business activity", "Your details"]}
                alternativeLabel={true}
                activeStep={steppervalue}
                labelColor={label}
              />
            }
            <Stack
              paddingLeft={"4vw"}
              paddingTop={"5vh"}
              sx={{
                "& > *:hover": {
                  backgroundColor: Theme.palette.text.low,
                  borderRadius: Theme.spacing(4),
                },
              }}
            >
              {!businessSearch && (
                <Image
                  data-testid="back"
                  src="./assets/icons/Back.svg"
                  alt="image not found"
                  width={Theme.spacing(4)}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    if (confirmBusiness) {
                      setConfirmBusiness(false);
                      setBusinessSearch(true);
                    } else if (showTradingAddress) {
                      setShowTradingAddress(false);
                      setConfirmBusiness(true);
                      setTradingAdd([]);
                    } else if (businessActivity) {
                      setShowTradingAddress(true);
                      setBusinessActivity(false);
                      setSteppervalue(0);
                      setLabel([true, false, false]);
                    } else if (detailsfilling) {
                      setDetailsfilling(false);
                      setBusinessActivity(true);
                      setSteppervalue(1);
                      setLabel([true, true, false]);
                      setDisabled(true);
                    }
                  }}
                />
              )}
            </Stack>
          </Stack>
          <Stack
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            paddingTop={Theme.spacing(1)}
            paddingRight={"4vw"}
          >
            <Image
              data-testid={"cross"}
              src="./Assets/icons/cross.svg"
              alt="close not found"
              width={Theme.spacing(3.5)}
              onClick={() => {
                Navigate(-1);
              }}
            ></Image>
          </Stack>
        </Stack>
      }
      mainsx={{
        paddingTop: "10vh",
        height: "85%",
        paddingX: "35vw",
      }}
      rightxs={12}
      main={
        <Grid container alignItems={"center"} height="100%">
          <Grid item xs={12} sm={6} md={4}>
            <Grid spacing={Theme.spacing(6)} direction="column">
              {businessSearch && (
                <Grid item>
                  <BusinessSearch
                    handleSelectBusiness={(e: string) => {
                      setBusinessSearch(false);
                      setConfirmBusiness(true);
                      console.log(e);
                      setBusinessDetails({
                        ...businessDetails,
                        businessName: e,
                      });
                    }}
                  />
                </Grid>
              )}
              {confirmBusiness && (
                <Grid item>
                  <ConfirmBusiness
                    businessDetails={businessDetails}
                    setBusinessDetails={setBusinessDetails}
                    handleConfirm={() => {
                      setConfirmBusiness(false);
                      setShowTradingAddress(true);
                    }}
                  />
                </Grid>
              )}
              {showTradingAddress && (
                <ConfirmAddress
                  tradingAddress={tradingAdd}
                  setTradingAddress={setTradingAdd}
                  confirmClick={() => {
                    setShowTradingAddress(false);
                    setBusinessActivity(true);
                    setSteppervalue(1);
                    setLabel([true, true, false]);
                  }}
                />
              )}
              {businessActivity && (
                <Grid item>
                  <BusinessActivity
                    businessDetails={businessDetails}
                    setBusinessDetails={setBusinessDetails}
                    setDisabled={setDisabled}
                  />
                </Grid>
              )}
              {detailsfilling && (
                <Grid item>
                  <DetailsFilling
                    userData={userData}
                    setUserData={setUserData}
                    setDisabled={setDisabled}
                  />
                </Grid>
              )}
              {(businessActivity || detailsfilling) && (
                <Button
                  variant={"contained"}
                  disabled={disabled}
                  name={"Continue"}
                  onClick={async () => {
                    if (businessActivity) {
                      console.log(users);
                      console.log(business);
                      setBusinessActivity(false);
                      setDetailsfilling(true);
                      setSteppervalue(2);
                      setLabel([true, true, true]);
                      setDisabled(true);
                    } else if (detailsfilling) {
                      const Trading = {
                        ...trading,
                        business: {
                          ...business,
                        },
                      };
                      var recipient_id;
                      console.log(users);
                      console.log(Trading);
                      await axios
                        .post(mockServer + "business/trading_address", {
                          ...Trading,
                        })
                        .then(async (response: any) => {
                          const id = response.data.id;
                          console.log(id);
                          await axios
                            .get(mockServer + "business/trading_address/" + id)
                            .then((result: any) => {
                              recipient_id = result.data.business.id;
                              console.log(recipient_id);
                            })
                            .catch((e: any) => {
                              console.error(e);
                            });
                        })
                        .catch((error: any) => {
                          console.error("Error:", error);
                        });
                      await axios.post(mockServer + "users", {
                        ...users,
                        business: {
                          id: recipient_id,
                        },
                      });
                      Navigate("/home");
                    }
                  }}
                  sx={{
                    opacity: disabled ? 0.26 : 1,
                    width: "7.03vw",
                    height: "6.14vh",
                    borderRadius: Theme.spacing(14),
                    textTransform: "none",
                    position: "absolute",
                    right: "25vw",
                    bottom: "5vh",
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      }
    />
  );
};

export default Business;
