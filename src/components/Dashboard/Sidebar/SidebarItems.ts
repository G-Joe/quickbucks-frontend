import homeIcon from "assets/home.svg";
import loanImg from "assets/loans.svg";
import calcImg from "assets/calcImg.svg";
import liquidateImg from "assets/liquidate.svg";
import supportImg from "assets/support.svg";
import settingstImg from "assets/settings-avatar.svg";
import accountImg from "assets/account-avatar.svg";
import historyImg from "assets/history-icon.svg";

const SidebarItems = [
  {
    title: "home",
    path: "/dashboard/home",
    icon: homeIcon,
  },
  {
    title: "my loans",
    path: "/dashboard/loans",
    icon: loanImg,
  },
  {
    title: "loan calculator",
    path: "/dashboard/loan-calculator",
    icon: calcImg,
  },
  {
    title: "liquidate",
    path: "/dashboard/liquidate",
    icon: liquidateImg,
  },
  {
    title: "support",
    path: "/dashboard/support",
    icon: supportImg,
  },
  {
    title: "settings",
    path: "/dashboard/settings",
    icon: settingstImg,
  },

  {
    title: "account",
    path: "/dashboard/account",
    icon: accountImg,
  },
  {
    title: "history",
    path: "/dashboard/history",
    icon: historyImg,
  },
];

export default SidebarItems;
