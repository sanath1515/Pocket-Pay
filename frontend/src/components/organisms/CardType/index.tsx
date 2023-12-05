import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { Theme } from "../../../themes";
import MyText from "../../atoms/Typography";
import { Divider } from "@mui/material";
import {
  cardDate1,
  cardDate2,
  cardNum1,
  cardNum2,
  debitCard,
  newCard,
  saveCard,
} from "../../../utils/constants";
import RadioText from "../../molecules/RadioText";
import { InputField } from "../../atoms/InputField";
import Image from "../../atoms/Image";

interface CardTypeProps {
  onRadioButtonChange?: any;
}

const creditcard = "./assets/creditcard.svg";

const CardType = (props: CardTypeProps) => {

  const [card1,setCard1] =useState("")
  const [card2,setCard2] =useState("")
  const [selectvalue, setSelectedvalue] = useState("");
  const handleChange = (event: any) => {
    setSelectedvalue(event.target.value);
    props.onRadioButtonChange(selectvalue);
    if(event.target.value === "option1"){
      setCard2("")
    }else if(event.target.value === "option2"){
      setCard1("")
    }
  };

  const inputChange=(event: any) => {
    if(event.target.name === 'card1' && event.target.value.length <=3 && selectvalue==="option1"){
      setCard1(event.target.value);
    }
    else if(event.target.name === 'card2'&& event.target.value.length <=3 && selectvalue==="option2"){
      setCard2(event.target.value);
    }
  }

  return (
    <Stack
      data-testid="CardType"
      width={"24.79"}
      height={"54.8vh"}
      bgcolor={Theme.palette.structuralColors.white}
      
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        marginTop={'2vh'}
        marginBottom={Theme.spacing(4)}
      >
        <MyText
          variant={"b3"}
          color={Theme.palette.primary["500"]}
          sx={{
            borderBottom: `2px solid ${Theme.palette.primary[500]}`,
            paddingBottom: "3px",
          }}
        >
          {saveCard}
        </MyText>
        <MyText variant={"b3"} color={Theme.palette.text.medium}>
          {newCard}
        </MyText>
      </Stack>
      <Divider
        sx={{
          height:"0.42vh",
          width: "25.6vw",
          color: Theme.palette.otherColors.stroke2,
        }}
      ></Divider>
      <RadioText
        data-testid="radio-button1"
        stackheight="13.15vh"
        stackwidth="27.9vw"
        title={debitCard}
        text={`Last four digit ${cardNum1} Expiry date ${cardDate1}`}
        size={"medium"}
        titleColor={Theme.palette.text.high}
        titleVariant={"b2"}
        textVariant={"b2"}
        textColor={Theme.palette.text.medium}
        innerstacksx={{
          gap: '1vh',
          paddingLeft: '0.3vw',
        }}
        outerstacksx={{
          gap: '1.5vw',
          alignItems: "center",
          paddingLeft: '0.5vw',
          type: "radio",
        }}
        value="option1"
        checked={selectvalue === "option1"}
        onChange={handleChange}
      ></RadioText>
      <InputField
        name="card1"
        variant="outlined"
        placeholder="CVV / CVC"
        endicon={<Image src={creditcard} />}
        sx={{
          paddingLeft: Theme.spacing(20),
        }}
        width={'20vw'}
        onChange={inputChange}
        value={card1}
      ></InputField>
      <RadioText
        stackheight="13.15vh"
        stackwidth="27.9vw"
        title={debitCard}
        text={`Last four digit ${cardNum2} Expiry date ${cardDate2}`}
        size={"medium"}
        titleColor={Theme.palette.text.high}
        titleVariant={"b2"}
        textVariant={"b2"}
        textColor={Theme.palette.text.medium}
        innerstacksx={{
          paddingLeft: '0.3vw',
          gap: '1vh',
        }}
        outerstacksx={{
          gap: '1.5vw',
          alignItems: "center",
          paddingLeft: '0.5vw',
          type: "radio",
        }}
        value="option2"
        checked={selectvalue === "option2"}
        onChange={handleChange}
      ></RadioText>
      <InputField
        value={card2}
        name="card2"
        onChange={inputChange}
        variant="outlined"
        placeholder="CVV / CVC"
        width={'20vw'}
        endicon={<Image src={creditcard} />}
        sx={{
          paddingLeft: Theme.spacing(20),
        }}
      ></InputField>
    </Stack>
  );
};

export default CardType;
