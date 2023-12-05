import { Dependencies } from "../robots/pocketpay/basic.cy";
import { SignUpPageRobotEyes } from "../robots/pocketpay/signupPage.cy";

const dependencies = new Dependencies();
const signUpPageRobotEyes=new SignUpPageRobotEyes();

context("Test PocketPay application",()=>{
  describe("Open application",()=>{

    it("visits application url",()=>{
      dependencies.accessUrl(Cypress.env("url"))

      signUpPageRobotEyes.AssertTitle();
      dependencies.signUp()
      
      dependencies.selectAccountType( );
    })
  })
})