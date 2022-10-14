import { Tabs } from "antd";

import headerLogo from "assets/cash-money.svg";
import Header from "components/Dashboard/Header/Header";
import useDisclosure from "components/shared/Modal/useDisclosure";
import LoanCalculatorTab from "./components/LoanCalculatorTab";

import DeviceFinance from "./RightPanel/DeviceFinance";
import Payday from "./RightPanel/Payday";
import SalaryAdvance from "./RightPanel/SalaryAdvance";
import SmallTicket from "./RightPanel/SmallTicket";
import "./index.scss";

const LoanCalculator = () => {
  const modalSuccess = useDisclosure();

  return (
    <>
      <div className="main-fit">
        <Header img={headerLogo} title="Loan Calculator" />

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Payday",
              key: "1",
              children: (
                <LoanCalculatorTab
                  elig_amt_percent="75%"
                  elig_amt_max="N1,000,000.00"
                  tenor="30 days or next salary date"
                  tenor_alt={true}
                  interest="4% flat"
                  collateral="No"
                  modalSuccess={modalSuccess}
                  rightPanel={<Payday onClick={modalSuccess.onOpen} />}
                />
              ),
            },
            {
              label: "Salary Advance",
              key: "2",
              children: (
                <LoanCalculatorTab
                  elig_amt_percent="200%"
                  elig_amt_max=""
                  tenor="180 days (six months)"
                  tenor_alt={false}
                  interest="1.9% on reduction"
                  collateral="No"
                  modalSuccess={modalSuccess}
                  rightPanel={<SalaryAdvance onClick={modalSuccess.onOpen} />}
                />
              ),
            },
            {
              label: "Device Finance",
              key: "3",
              children: (
                <LoanCalculatorTab
                  elig_amt_percent="30%"
                  elig_amt_max="N500,000.00"
                  tenor="360 days (twelve months)"
                  tenor_alt={false}
                  interest="27%"
                  collateral="No"
                  modalSuccess={modalSuccess}
                  rightPanel={<DeviceFinance onClick={modalSuccess.onOpen} />}
                />
              ),
            },
            {
              label: "Small Ticket Personal",
              key: "4",
              children: (
                <LoanCalculatorTab
                  elig_amt_percent="200%"
                  elig_amt_max=""
                  tenor="180 days (six months)"
                  tenor_alt={false}
                  interest="1.9% on reduction"
                  collateral="No"
                  modalSuccess={modalSuccess}
                  rightPanel={<SmallTicket onClick={modalSuccess.onOpen} />}
                />
              ),
            },
          ]}
        ></Tabs>
      </div>
    </>
  );
};

export default LoanCalculator;
