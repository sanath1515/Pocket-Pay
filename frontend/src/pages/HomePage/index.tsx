import React, { useEffect, useState } from "react";
import Template from "../../components/templates/Landing";
import { SideNavigationBar } from "../../components/organisms/NavBar";
import {
  Home,
  Homebackground,
  mockServer,
  sideNavItems,
} from "../../utils/constants";
import HomeBackground from "../../components/molecules/HomeBackground";
import { Box, Grid, Stack } from "@mui/material";
import { Theme } from "../../themes";
import MyText from "../../components/atoms/Typography";
import Button from "../../components/atoms/Button";
import Logout from "../../components/organisms/Logout";
import { useNavigate } from "react-router-dom";
import { HomeMainHeading } from "../../components/molecules/HomeMainHeading";
import axios from "axios";
import { HomeMain } from "../../components/organisms/HomeMain";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/reducers";
import { HomeHeader } from "../../components/organisms/HomeHeader";

export const HomePage = () => {
  const user = useSelector((state: any) => state.users);
  const [loading, setLoading] = useState(false);

  const dispatch=useDispatch()
  console.log(user);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [data, setData] = useState<boolean[]>([]);
  const fetchTransactionAsync = async () => {
    try {
      const result = await axios
        .get(mockServer + "transactions/user/"+user.id)
        .then((response: any) => {
          console.log(response.data.length);
          setTransactions(response.data);
          if(data.length!==response.data.length) {
          setData(response.data.map(() => false));
          }
        });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTransactionAsync();
      } catch (error) {
        console.error('Error fetching transaction:', error);
      }
    };

    fetchData()
    .then((response)=>
    console.log("In then block"))
    .catch((err)=>
    console.log("In catch block"))

    setLoading(false)
  }, [loading]);
  const navigate = useNavigate();
  const [logout, openLogout] = useState(false);
  const handleLogout = () => {
    console.log("hii");
    dispatch(setUser([]))
    navigate("/login");
  };
  const handleAvatarClick = () => {
    openLogout(true);
  };
  return (
    <Template
      leftxs={1.88}
      rightxs={10}
      leftChildren={<SideNavigationBar data={sideNavItems} />}
      Heading={
        <>
          <HomeHeader handleAvatarClick={handleAvatarClick} name={user.username}/>
          <Logout
            logout={logout}
            openLogout={openLogout}
            handleLogout={handleLogout}
            name={user.username}
            id={user.id}
          />
        </>
      }
      mainsx={{
        height: "90.5vh",
        width: "84vw",
        backgroundColor: Theme.palette.structuralColors.blue,
      }}
      main={
        <Box paddingX={"2vw"} height={"100%"}>
          <Stack
            direction={"row"}
            height={"13vh"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <MyText variant={"h1"} color={Theme.palette.text.high}>
              {Home.title}
            </MyText>
            <Button
              variant="contained"
              name={
                <MyText
                  variant={"b2"}
                  color={Theme.palette.structuralColors.white}
                >
                  {Home.button1}
                </MyText>
              }
              sx={{
                height: "6.5vh",
                width: "9vw",
                borderRadius: Theme.spacing(15),
                textTransform: "none",
                "&:hover": {
                  backgroundColor: Theme.palette.primary[300],
                },
              }}
              onClick={() => {
                navigate("/sendMoney");
              }}
            />
          </Stack>
          {!transactions[0] && (
            <Box
              bgcolor={Theme.palette.structuralColors.white}
              paddingX={"27vw"}
            >
              <HomeBackground
                src={Homebackground.src}
                variant={"b1"}
                text={Homebackground.title}
                textsx={{
                  textAlign: "center",
                }}
              ></HomeBackground>
            </Box>
          )}{" "}
          {transactions && (
            <Stack data-testid={"abc"} gap={Theme.spacing(7)}>
              {transactions.map((transaction, index) => {
                const shouldDisplay = data[index] || !data.some((value, i) => i !== index && value);
           
                return (
                  shouldDisplay &&(
                  <Grid item key={transaction.recipient.firstName+transaction.recipient.lastName} style={{ display: data[index] ? "block" : "initial" }}>
                    <HomeMainHeading
                      name={transaction.recipient.firstName+transaction.recipient.lastName}
                      status={transaction.status}
                      recievingAmount={transaction.recievingAmount}
                      sendingAmount={transaction.sendingAmount}
                      showData={(e: any) => {
                        setData((prevData) => {
                          const newData = prevData.map((value, i) => (i === index ? !value : false));
                          return newData;
                        });
                      }}
                      src={
                        !data[index]
                          ? "./Assets/icons/dropdown.svg"
                          : "./Assets/icons/dropup.svg"
                      }
                    />
                    {(data[index] )&& (
                      <HomeMain
                        transferStatus={transaction.status}
                        transactionid={transaction.id}
                        name={transaction.recipient.firstName+transaction.recipient.lastName}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    )}
                  </Grid>
)                );
              })}
            </Stack>
          )}
        </Box>
      }
    />
  );
};
