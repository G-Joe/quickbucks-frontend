import homeIcon from "assets/home.svg";
import loanImg from "assets/loans.svg";
import calcImg from "assets/calcImg.svg";
import liquidateImg from "assets/liquidate.svg";
import supportImg from "assets/support.svg";
import settingstImg from "assets/settings-avatar.svg";
import accountImg from "assets/account-avatar.svg";
import historyImg from "assets/history-icon.svg";

const SidebarItems =[
    {
        title:"home",
        path:"/home",
        icon: homeIcon
    },
    {
        title:"my loans",
        path:"/loans",
        icon: loanImg
    },
    {
        title:"loan calculator",
        path:"/loan-calculator",
        icon: calcImg
    },
    {
        title:"liquidate",
        path:"/liquidate",
        icon: liquidateImg
    },
    {
        title:"support",
        path:"/support",
        icon: supportImg
    },
    {
        title:"settings",
        path:"/settings",
        icon: settingstImg,
            submenu:[{
                title:"change password",
                path:"/settings"
            },
            {
                title: "change pin",
                path:"/change-pin"
            }]
    },
    {
        title:"account",
        path:"/account",
        icon: accountImg
    },
    {
        title:"history",
        path:"/history",
        icon: historyImg
    },
]

 
export default SidebarItems