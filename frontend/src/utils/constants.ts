export const SignUpHeading = "Create your PocketPay account";
export const LoginWith = " Or, Login with";
export const AlreadyAccount = " Already have an account ? ";
export const RecipientOptionTitle = "Who are you sending money to?";
export const RecipientOptions = [
  "My Business",
  "Someone else",
  "Business or Charity",
];
export const SendToSomeoneTitle = "Send to someone";
export const RecipientDetails = [
  "Account Number",
  "First Name",
  "Last Name",
  "The Indian Financial System Code",
];
export const ReviewDetailsTitle = "Review details of your transfer";
export const TransferDetails = [
  { Fee: "00.00 GBP" },
  { "Amount we’ll convert": "77.74 GBP" },
  { "Guranteed rate": "1 GBP = 1.14 EUR" },
];
export const ReviewDetails = [
  { Name: "Mario Gabriel" },
  { Email: "mario.gabriel@gmail.com" },
  { "Account Number": "21363738391910" },
  { "Account Type": "Checking" },
];

export const ScheduleDetais = [
  { Sending: "Now" },
  { "Should arrive": "by april 28th" },
  { Repeats: "Never" },
];

export const TransferDetailsReview = [
  { Fee: "00.00 GBP" },
  { "Amount we’ll convert": "77.74 GBP" },
  { "Guranteed rate": "1 GBP = 1.14 EUR" },
];
export const verificationHeading = "What's the purpose for using PocketPay?";
export const verificationInfo =
  "To help us keep PocketPay safe and secure, please tell us what you're using PocketPay for";

export const directorHeading = "Confirm your business directors";
export const directorInfo =
  "Please confirm these details from companies house. If anyone's missing, add them below.";
export const director1 = "Director 1";
export const director2 = "Director 2";
export const directorButton = "Add another director";

export const ownerHeading = "Confirm your business owners";
export const ownerInfo =
  "Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.";
export const owner1 = "Owner 1";
export const owner2 = "Owner 2";
export const ownerButton = "Add another owner";

export const accountTypeTitle =
  "What kind of account would you like to open today?";
export const accountTypeInfo = "You can add another account later on, too.";
export const accountType = [
  {
    src: "./Assets/icons/personalacc.svg",
    title: "Personal account",
    text: "Send, spend, and receive around the world for less.",
  },
  {
    src: "./Assets/icons/businessacc.svg",
    title: "Business account",
    text: "Do business or freelance work internationally.",
  },
];
export const sendingMoneyTitle = "What would you like to do today?";
export const sendingMoney = [
  
  {
    src: "./assets/icons/setup.svg",
    title: "Finish Account Setup",
    text: "Get balances in multiple currencies, and take buisness goals",
  },
  {
    src: "./assets/icons/send.svg",
    title: "Send Money",
    text: "Pay an international employee, invoice, or expense",
  },
];

export const twoFactorAuthTitle = [
  "Verify your phone number with a code",
  "Enter the 6-digit code",
  "Approve another way",
];

export const twoFactorAuthCaptions = [
  "It helps us keep your account secure.",
  "We sent it to +44020 7947 6330",
  "We sent it to +44020 7947 6330",
  "Use a different phone number",
  "I didn’t recieve a code",
];

export const OtherWay = ["Resend code by SMS", "Send code by voice call"];

export const conformationalModelText = {
  data: "We’ll apply this rate if we receive",
  data1: "your money today.",
  buttonText: "OK",
};

export const homeHeader = {
  src: "./assets/Avatar.svg",
  name: "Ross Genes",
};

export type SideNavItemsType = {
  mainMenuItems: {
    text: string;
    active: boolean;
    variant: "icon" | "avatar" | "chip";
    chipText: boolean;
    chipName: string;
    hidden: boolean;
    src: string;
    textvariant: "c1"
  }[];
  subMenuItems: {
    label: string;
    hidden: boolean;
    items: {
      text: string;
      src: string;
      active: boolean;
      variant: string;
    }[];
  }[];
};

export const sideNavItems: SideNavItemsType = {
  mainMenuItems: [
    {
      text: "Home",
      active: true,
      variant: "icon",
      textvariant: "c1",
      chipText: false,
      chipName: "",
      src: "./assets/icons/homeicon.svg",
      hidden: false,
    },
    {
      text: "Cards",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: "./assets/icons/cardsicon.svg",
      hidden: false,
    },
    {
      text: "Recipients",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: "./assets/icons/Person.svg",
      hidden: false,
    },
    {
      text: "Team",
      active: false,
      textvariant: "c1",
      variant: "chip",
      chipText: true,
      chipName: "New",
      src: "./assets/icons/team.svg",
      hidden: false,
    },
    {
      text: "Account",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: "./assets/icons/user.svg",
      hidden: false,
    },
    {
      text: "Invite & earn 150 GBP",
      active: false,
      variant: "icon",
      textvariant: "c1",
      chipName: "",
      chipText: false,
      src: "./assets/icons/gift.svg",
      hidden: false,
    },
    
  ],
  subMenuItems: [
    {
      label: "Balances",
      hidden: true,

      items: [
        {
          src: "./assets/icons/india.svg",
          text: "10,000.00 INR",
          active: false,
          variant: "avatar",
        },
        {
          src: "./assets/icons/ireland.svg",
          text: "1200 GBP",
          active: false,
          variant: "avatar",
        },
        {
          src: "./assets/icons/austurlia.svg",
          text: "192.00 USD",
          active: false,
          variant: "avatar",
        },
        {
          src: "./assets/icons/plusGrey.svg",
          text: "Open a balance",
          active: false,
          variant: "icon",
        },
      ],
    },
    {
      label: "jars",
      hidden: true,

      items: [
        {
          src: "/assets/icons/plusGrey.svg",
          text: "Open a jar",
          active: false,
          variant: "icon",
        },
      ],
    },
  ],
};

export const updates = [
  { "Set up by": "Ross Gener (YOU)" },
  { "Transfer number": "#3227627272" },
];

export const modalHeading = "Share tracking link";
export const modalBody =
  "Share the link above, and they can securely track this transfer.";

export const sureHeading = "Are you sure ?";
export const sureBody = "You want to cancel this transfer ";

export const businessHeading = "Confirm your business details";
export const businessBody =
  " Sole trader, freelancer or not registered with Companies house?";
export const businessCaption = "Business details";
export const businessName = "Business name:";
export const businessNumber = "Registration number:";
export const businessAddress = "Registrated Address:";
export const editText = "Edit";

export const debitCard = "EUR Visa Debit";
export const cardNum1 = "9313";
export const cardDate1 = "09/25";
export const cardNum2 = "3253";
export const cardDate2 = "02/27";
export const saveCard = "SAVED CARD";
export const newCard = "NEW CARD";

export const searchHeading = "Search for your business";
export const searchContent =
  "Sole trader, freelancer or not registered with Companies house?";

export const confirmHeading = "Confirm trading address";
export const confirmAdd =
  "Your trading address is usually the place you work every day. If the    business has multiple trading addresses, add as many as possible";
export const tradAdd = "Trading addresses";
export const addAdd = "Add trading address";
export const edit = "Edit";
export const confirm = "Confirm";
export const add = "Add";
export const cancel = "Cancel";
export const save = "Save";

export const BankDetailsHeading =
  "Next, go to your Lloyds's online banking and make a payment";
export const BankDetailsPaperHeading = "Our bank details for payments in GBP";
export const BankDetailsPaperInfo =
  "Below are the bank details for this payment. Please only send the money from an account in your name";
export const BankDetailsBankLogo = "./assets/icons/Icon.svg";
export const BankDetailsPayeeName = "Mario Gabriel";
export const BankDetailsReferenceId = "#356778810";
export const BankDetailsAmountToSend = "100.00 GBP";
export const BankDetailsSortCode = "24-14-70";
export const BankDetailsAccountNo = 729019188810;
export const BankDetailsBankAddress =
  "TransferWise 56 Shoreditch high Street London E16jj United Kingdom";

export const BankHeading = "Pay from you Lloyds account";
export const BankAccountType = "business";
export const BankAmount = "75.38 GBP";
export const BankDetails1 = "We'll use an encrypted end to end connection.";
export const BankDetails2 =
  "Your bank will not share your login details with PocketPay or anyone else.";
export const BankIcons = "./assets/icons/Logos.svg";
export const currencies = [
  {
    value: "Andorra",
    label: "Andorra",
    img: "./Assets/icons/c1.svg",
    code: "EUR",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
    img: "./Assets/icons/c2.svg",
    code: "GBP",
  },
  {
    value: "Austria",
    label: "Austria",
    img: "./Assets/icons/c3.svg",
    code: "AUD",
  },
  {
    value: "India",
    label: "India",
    img: "./Assets/icons/c4.svg",
    code: "INR",
  },
];

export const countries = [
  {
    label: "India",
    value: "India",
  },
  {
    label: "USA",
    value: "USA",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "United Kingdom",
    value: "United Kingdom",
  },
];

export const VerificationOptions = [
  {
    label: "Paying rent, utilities or property charges",
    value: "Paying rent, utilities or property charges",
  },
  {
    label: "Paying suppliers/contractors/employees",
    value: "Paying suppliers/contractors/employees",
  },
  {
    label: "Paying for goods or services abroad",
    value: "Paying for goods or services abroad",
  },
  {
    label: "Paying tax on profit or property",
    value: "Paying tax on profit or property",
  },
];

export const cancelHeading = "Cancel transfer #3628287220";
export const cancelBody = "Where would you like us to refund the money?";
export const selAcc = "Select Account";
export const exiAcc = "An existing account";
export const newAcc = "New account";

export const add1 =
  "#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054";
export const add2 =
  "3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003";
export const name1 = "Zentech Solutions Pvt Ltd";
export const num1 = "2020ZEN5367GJ";

export const Home = {
  title: "Home",
  button: "continue",
  button1: "Send money",
};

export const amountTransfer = "How much would you like to transfer?";

export const Homebackground = {
  title:
    "This is where you’ll see your activity and transactions. Choose how you’d like to get started.",
  src: "./Assets/icons/Empty state.svg",
};

export const mockServer = "http://18.220.138.167:9191/";

export const bankOptions = [
  {
    src: "./assets/icons/sbi.svg",
    name: "State bank of India",
  },
  {
    src: "./assets/icons/hdfc.svg",
    name: "HDFC",
  },
  {
    src: "./assets/icons/hsbc.svg",
    name: "HSBC",
  },
  {
    src: "./assets/icons/axis.svg",
    name: "Axis",
  },
  {
    src: "./assets/icons/Lloyds bank.svg",
    name: "Lloyds",
  },
  {
    src: "./assets/icons/bankIcon.svg",
    name: "Other bank",
  },
];
export const ChooseBank = "Choose your bank";

export const HomeMainConstants = [
  "UPDATES",
  "DETAILS",
  "General",
  "Cancel the transfer",
  "Your money will be refunded",
  "When we receive your money, we’ll give you a refund. Refunds usually take 3-5 working days.",
];
