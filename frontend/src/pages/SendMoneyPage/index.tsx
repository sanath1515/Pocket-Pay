import React, { useEffect, useState } from "react";
import Template from "../../components/templates/Landing";
import Amount from "../../components/organisms/Amount";
import CustomStepper from "../../components/atoms/Stepper";
import { Theme } from "../../themes";
import Stack from "@mui/material/Stack";
import Image from "../../components/atoms/Image";
import Button from "../../components/atoms/Button";
import { Recipient } from "../../components/organisms/Recipient";
import { SendToSomeone } from "../../components/organisms/SendToSomeone";
import ReviewDetails from "../../components/organisms/Review";
import Grid from "@mui/material/Grid";
import { Verification } from "../../components/organisms/AmountVerification";
import { ConfirmVerification } from "../../components/organisms/ConfirmVerification";
import {
  directorHeading,
  directorInfo,
  director1,
  directorButton,
  director2,
  owner1,
  owner2,
  ownerButton,
  ownerHeading,
  ownerInfo,
  sendingMoney,
  sendingMoneyTitle,
} from "../../utils/constants";
import { PaymentOptions } from "../../components/organisms/PaymentOptions";
import CardType from "../../components/organisms/CardType";
import PaymentDetails from "../../components/organisms/PaymentDetails";
import AccountType from "../../components/organisms/AccountType";
import { useNavigate } from "react-router-dom";
import { SelectingBank } from "../../components/organisms/SelectingBank";
import { LloydsPaymentDetails } from "../../components/organisms/LloydsPaymentDetails";
import MyText from "../../components/atoms/Typography";
import { ConfirmCardPurchase } from "../../components/organisms/ConfirmPurchase";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipients,
  setCurrency,
  setPurpose,
  setDirectors,
  setOwners,
} from "../../state/reducers";

const SendMoney = () => {
  console.log("SendMoney");

  const [recipientData, setRecipientData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    accno: "",
    IFSC: "",
    acctype: "",
  });
  const [cur, setCur] = useState({ send: "", recieve: "" });
  const [purp, setPurp] = useState("");
  const [director, setDirector] = useState([]);
  const [owner, setOwner] = useState([]);

  const recip = useSelector((state: any) => state.recipients);
  const currency = useSelector((state: any) => state.currency);
  const purpose = useSelector((state: any) => state.purpose);
  const directors = useSelector((state: any) => state.directors);
  const owners = useSelector((state: any) => state.owners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRecipients(recipientData));
    dispatch(setCurrency(cur));
    dispatch(setPurpose(purp));
    dispatch(setDirectors(director));
    dispatch(setOwners(owner));
  }, [recipientData, cur, purp, director, owner, dispatch]);

  const Navigate = useNavigate();
  const [steppervalue, setSteppervalue] = useState(0);
  const [lylodsPayment, setLylodsPayment] = useState(false);
  const [amount, setAmount] = useState(false);
  const [bank, setBank] = useState(false);
  const [accountType, setAccountType] = useState(true);
  const [recipient, setRecipient] = useState(false);
  const [sendMoney, setSendMoney] = useState(false);
  const [review, setReview] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showDirectorVerification, setShowDirectorVerification] =
    useState(false);
  const [showOwnerVerification, setShowOwnerVerification] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState(false);
  const [showcard, setShowcard] = useState(false);
  const [lloyds, lloydsPayment] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [rvalue, setRvalue] = useState("");
  const [cardType, setCardType] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [payment, setPayment] = useState(false);
  const [steplabel, setStepLabel] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleRadioChange = (value: any) => {
    setRadioValue(value);
  };
  const handleRadioButtonChange = (value: any) => {
    console.log(rvalue);
    setRvalue(value);
  };
  const backButton = () => {
    switch (true) {
      case accountType: {
        Navigate(-1);
        break;
      }
      case amount: {
        setAmount(false);
        setAccountType(true);
        break;
      }
      case recipient: {
        setCur({ send: "", recieve: "" });
        setRecipient(false);
        setAmount(true);
        setSteppervalue(0);
        const label = [...steplabel];
        label[1] = false;
        label[2] = false;
        setStepLabel(label);

        break;
      }
      case sendMoney: {
        setRecipientData({
          email: "",
          accno: "",
          firstname: "",
          lastname: "",
          IFSC: "",
          acctype: "",
        });
        setSendMoney(false);
        setRecipient(true);
        break;
      }
      case showVerification: {
        setRecipientData({
          email: "",
          accno: "",
          firstname: "",
          lastname: "",
          IFSC: "",
          acctype: "",
        });
        setPurp("");
        setSteppervalue(2);
        const label = [...steplabel];
        label[3] = false;
        setStepLabel(label);

        setShowVerification(false);
        setSendMoney(true);
        break;
      }
      case showDirectorVerification: {
        setPurp("");
        setShowDirectorVerification(false);
        setShowVerification(true);
        const updatedDirectors = [...director];
        updatedDirectors.splice(0, 1);
        setDirector(updatedDirectors);
        break;
      }
      case showOwnerVerification: {
        const updatedDirectors = [...director];
        updatedDirectors.splice(0, 1);
        setDirector(updatedDirectors);
        setShowOwnerVerification(false);
        setShowDirectorVerification(true);
        const updatedOwners = [...owner];
        updatedOwners.splice(0, 1);
        setOwner(updatedOwners);
        break;
      }
      case review: {
        const updatedOwners = [...owner];
        updatedOwners.splice(0, 1);
        setOwner(updatedOwners);
        setReview(false);
        setSteppervalue(3);
        const label = [...steplabel];
        label[4] = false;
        setStepLabel(label);

        setShowOwnerVerification(true);
        break;
      }
      case paymentOptions: {
        setPayment(false);
        setRadioValue("");
        setPaymentOptions(false);
        setShowcard(false);
        setSteppervalue(4);
        const label = [...steplabel];
        label[5] = false;
        setStepLabel(label);
        setReview(true);
        break;
      }
      case cardType: {
        setCardType(false);
        setPaymentOptions(true);
        setRadioValue("");
        break;
      }
      case purchase: {
        setPurchase(false);
        setCardType(true);
        break;
      }
      case bank: {
        if (lylodsPayment) {
          setLylodsPayment(false);
        } else {
          setPayment(true);
          setRadioValue("");
          setBank(false);
          setPaymentOptions(true);
          setShowcard(true);
        }
        break;
      }
      case lloyds: {
        lloydsPayment(false);
        setBank(true);
        setLylodsPayment(true);
        break;
      }
      default: {
        break;
      }
    }
  };
  const handlePayment = () => {
    console.log(radioValue);
    if (radioValue === "debit") {
      setPaymentOptions(false);
      setCardType(true);
      setRadioValue("debitConfirm");
    } else if (radioValue === "debitConfirm") {
      setPurchase(true);
      setCardType(false);
    } else if (radioValue === "bank") {
      setPaymentOptions(false);
      setShowcard(false);
      setBank(true);
      setPayment(false);
    }
  };
  const sendMoneyTo = () => {
    setRecipient(false);
    setSendMoney(true);
  };

  const handleConfirmButton = () => {
    setReview(false);
    setSteppervalue(5);
    const label = [...steplabel];
    label[5] = true;
    setStepLabel(label);
    setPaymentOptions(true);
    setShowcard(true);
    setPayment(true);
  };

  const selectAccount = (option?: any) => {
    if (option.title === "Send Money") {
      setAccountType(false);
      setSteppervalue(0);
      setAmount(true);
    }
  };

  const continueToPay = () => {
    setBank(false);
    lloydsPayment(true);
  };

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
          <Stack
            width={"72vw"}
            paddingRight={Theme.spacing(18)}
            paddingTop={Theme.spacing(1.6)}
          >
            {!accountType && (
              <CustomStepper
                labelColor={steplabel}
                steps={[
                  "Amount",
                  "You",
                  "Recipient",
                  "Verification",
                  "Review",
                  "Pay",
                ]}
                alternativeLabel={true}
                activeStep={steppervalue}
              />
            )}
            <Stack
              paddingLeft={"4vw"}
              paddingTop={"5vh"}
              right={showcard ? "93vw" : "none"}
              top={showcard ? "15vh" : "none"}
              position={showcard ? "absolute" : "unset"}
              sx={{
                "& > *:hover": {
                  backgroundColor: Theme.palette.text.low,
                  borderRadius: Theme.spacing(4),
                },
              }}
            >
              <Image
                data-testid="back"
                src="./assets/icons/Back.svg"
                alt="image not found"
                width={Theme.spacing(4)}
                sx={{ cursor: "pointer" }}
                onClick={backButton}
              ></Image>
            </Stack>
          </Stack>
          <Stack
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            paddingTop={Theme.spacing(1)}
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
      }}
      rightxs={12}
      main={
        <Grid
          container
          justifyContent={showcard ? "start" : "center"}
          alignItems={"center"}
          height="100%"
        >
            <Grid item spacing={Theme.spacing(6)} direction="column" >
              {accountType && (
                <Grid item>
                  {" "}
                  <AccountType
                    data={sendingMoney}
                    Title={sendingMoneyTitle}
                    selectAccount={selectAccount}
                  />
                </Grid>
              )}

              {amount && (
                <Grid item>
                  <Amount currency={cur} setCurrency={setCur} />
                </Grid>
              )}
              {recipient && (
                <Grid item>
                  <Recipient onClick={sendMoneyTo} />
                </Grid>
              )}
              {sendMoney && (
                <Grid item>
                  <SendToSomeone
                    recipientData={recipientData}
                    setRecipientData={setRecipientData}
                  />
                </Grid>
              )}
              {showVerification && (
                <Grid item>
                  <Verification purpose={purp} setPurpose={setPurp} />
                </Grid>
              )}
              {showDirectorVerification && (
                <Grid item>
                  <ConfirmVerification
                    Heading={directorHeading}
                    Info={directorInfo}
                    Id1={director1}
                    ButtonName={directorButton}
                    Id2={director2}
                    directors={director}
                    setDirectors={setDirector}
                    role={"director"}
                  />
                </Grid>
              )}
              {showOwnerVerification && (
                <Grid item>
                  <ConfirmVerification
                    Heading={ownerHeading}
                    Info={ownerInfo}
                    Id1={owner1}
                    Id2={owner2}
                    ButtonName={ownerButton}
                    directors={owner}
                    setDirectors={setOwner}
                    role={"shareholder"}
                  />
                </Grid>
              )}
              {review && (
                <Grid item>
                  <ReviewDetails
                    handleConfirmButton={handleConfirmButton}
                    currency={cur}
                    setCurrency={setCur}
                    recipientData={recipientData}
                    setRecipientData={setRecipientData}
                  />
                </Grid>
              )}

              {payment && (
                <Grid item>
                  <Stack
                    data-testid="payment-methods"
                    direction={"row"}
                    gap={"2vw"}
                    justifyContent={"center"}
                    width="98vw"
                    sx={{
                      overflowY: "auto",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                    height={"65vh"}
                  >
                    {paymentOptions && (
                      <PaymentOptions onRadioChange={handleRadioChange} />
                    )}
                    {
                      <Stack gap={"3vh"} data-testid="Card">
                        {(cardType || purchase) && (
                          <MyText
                            variant={"h1"}
                            color={Theme.palette.text.high}
                          >
                            Pay with your card
                          </MyText>
                        )}
                        {cardType && (
                          <CardType
                            onRadioButtonChange={handleRadioButtonChange}
                          />
                        )}
                        {purchase && <ConfirmCardPurchase />}
                      </Stack>
                    }
                    {showcard && (
                      <PaymentDetails
                        onClick={handlePayment}
                        purchase={purchase}
                      />
                    )}
                  </Stack>
                </Grid>
              )}

              {bank && (
                <Grid item data-testid="select-bank">
                  <SelectingBank
                    lylodsPayment={lylodsPayment}
                    setLylodsPayment={setLylodsPayment}
                    continueToPay={continueToPay}
                  />
                </Grid>
              )}

              {lloyds && (
                <Grid item>
                  <LloydsPaymentDetails />
                </Grid>
              )}
              {(amount ||
                sendMoney ||
                showVerification ||
                showDirectorVerification ||
                showOwnerVerification) && (
                <Grid item>
                  <Button
                    data-testid={"continue"}
                    variant="contained"
                    name={<MyText variant={'b2'}>Continue</MyText>}
                    sx={{
                      "&:hover": {
                        backgroundColor: Theme.palette.primary[300],
                      },
                      height: "6.2vh",
                      width: "7.3vw",
                      marginTop: "30%",
                      borderRadius: Theme.spacing(16),
                      textTransform: "none",
                      right: "21vw",
                      bottom: "5vh",
                      position: "absolute",
                    }}
                    onClick={() => {
                      if (
                        amount &&
                        currency.send !== "" &&
                        currency.recieve !== ""
                      ) {
                        setAmount(false);
                        setRecipient(true);
                        setSteppervalue(2);
                        const label = [...steplabel];
                        label[1] = true;
                        label[2] = true;
                        setStepLabel(label);
                      } else if (
                        sendMoney &&
                        recip.email &&
                        recip.firstname &&
                        recip.accno &&
                        recip.lastname &&
                        recip.IFSC &&
                        recip.acctype
                      ) {
                        setShowVerification(true);
                        setSendMoney(false);
                        setSteppervalue(3);
                        const label = [...steplabel];
                        label[3] = true;
                        setStepLabel(label);
                      } else if (showVerification && purpose !== "") {
                        setShowVerification(false);
                        setShowDirectorVerification(true);
                      } else if (
                        showDirectorVerification &&
                        directors[0] &&
                        directors[0].firstName &&
                        directors[0].lastName &&
                        directors[0].dob &&
                        directors[0].country
                      ) {
                        console.log(directors);
                        setShowDirectorVerification(false);
                        setShowOwnerVerification(true);
                      } else if (
                        showOwnerVerification &&
                        owners[0] &&
                        owners[0].firstName &&
                        owners[0].lastName &&
                        owners[0].dob &&
                        owners[0].country
                      ) {
                        setShowOwnerVerification(false);
                        setReview(true);
                        setSteppervalue(4);
                        const label = [...steplabel];
                        label[4] = true;
                        setStepLabel(label);
                      }
                    }}
                  />
                </Grid>
              )}
            </Grid>
        </Grid>
      }
    />
  );
};

export default SendMoney;
