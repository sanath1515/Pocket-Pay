import { BaseEyes } from "../BaseRobot";
import { RobotEyes, RobotHands } from "./basic.cy";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();


export class SignUpPageRobotEyes extends BaseEyes{
    AssertTitle(){
        baseRobotEyes.seesDomContainText("h1","Create your PocketPay account")
        
    }
}