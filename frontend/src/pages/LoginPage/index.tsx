import React from "react";
import { Login } from "../../components/organisms/Login";
import { LoginTemplate } from "../../components/templates/LoginTemplate";

const Loginpage = () => {
  return (
      <LoginTemplate children={<Login/>}/>
  );
};

export default Loginpage;