import React from "react";
import { SignUp } from "../../components/organisms/SignUp";
import { LoginTemplate } from "../../components/templates/LoginTemplate";

const SignUppage = () => {
  return (
    <LoginTemplate children={<SignUp/>}/>
  );
};

export default SignUppage;