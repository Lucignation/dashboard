import businessInActive from "../assets/images/business-account-inactive.png";
import businessActive from "../assets/images/business-account-active.png";
import taxReserveInActive from "../assets/images/tax-reserve-inactive.png";
import taxReserveActive from "../assets/images/tax-reserve-active.png";
import businessSavingInActive from "../assets/images/business-saving-inactive.png";
import businessSavingActive from "../assets/images/business-saving-active.png";

import { FaDropbox, FaSpotify } from "react-icons/fa";
import { SiZendesk } from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import { EMoneyFlow } from "../enum/moneyFlow.enum";

export const overviewData = [
  {
    id: 1,
    inactiveIcon: businessInActive,
    activeIcon: businessActive,
    title: "Business Account",
    percentage: "12.3%",
    isLoss: false,
    amount: 33842,
    btnText: "View Account Details",
  },
  {
    id: 2,
    inactiveIcon: taxReserveInActive,
    activeIcon: taxReserveActive,
    title: "Tax Reserve",
    percentage: "-2.1%",
    isLoss: true,
    amount: 700,
    btnText: "Edit Tax Automation",
  },
  {
    id: 3,
    inactiveIcon: businessSavingInActive,
    activeIcon: businessSavingActive,
    title: "Business Savings",
    percentage: "",
    isLoss: false,
    amount: 1623,
    btnText: "View Account Details",
  },
];

export const transactions = [
  {
    id: 1,
    companyLogo: () => <GrStripe size={35} />,
    companyName: "Stripe",
    timeDay: "2024-04-17T18:11:00",
    department: "Business",
    amount: 1223,
    isLoss: false,
  },
  {
    id: 2,
    companyLogo: () => <FaDropbox size={35} />,
    companyName: "DropBox",
    timeDay: "2024-04-16T18:11:00",
    department: "Equipment",
    amount: 200,
    isLoss: true,
  },
  {
    id: 3,
    companyLogo: () => <SiZendesk size={35} />,
    companyName: "Zendesk",
    timeDay: "2024-04-14T18:11:00",
    department: "Marketing",
    amount: 1223.18,
    isLoss: true,
  },
  {
    id: 4,
    companyLogo: () => <FaSpotify size={35} />,
    companyName: "Spotify",
    timeDay: "2024-04-11T18:11:00",
    department: "Entertainment",
    amount: 19,
    isLoss: true,
  },
];

export const moneyData = [
  {
    id: 1,
    title: "MONEY IN",
    amount: 5083,
    flowType: EMoneyFlow.MONEY_IN,
  },
  {
    id: 2,
    title: "MONEY OUT",
    amount: 485.64,
    flowType: EMoneyFlow.MONEY_OUT,
  },
];

export const CashFlowData = [
  {
    id: 1,
    title: "Stripe",
    color: "#C1B4F8",
    percentage: 70,
    amount: 3514.72,
  },
  {
    id: 2,
    title: "Crypto Academy",
    color: "#9DE9FA",
    percentage: 20,
    amount: 1017.49,
  },
  {
    id: 3,
    title: "Wire Return",
    color: "#F6C0D9",
    percentage: 6,
    amount: 318.44,
  },
];
