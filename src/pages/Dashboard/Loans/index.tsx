import { Tabs } from "antd";

import headerLogo from "assets/cash-money.svg";
import Header from "components/Dashboard/Header/Header";
import DeviceFinanceTab from "./components/DeviceFinanceTab/DeviceFinanceTab";
import LoanTab from "./components/LoanTab/LoanTab";
import "./index.scss";

const Loans = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={headerLogo} title="My Loans" />

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Payday Loan",
              key: "1",
              children: (
                <LoanTab
                  title="Payday Loan"
                  amount="N92,000.00"
                  tenor="1 Month"
                  taken="N60,000"
                  outstanding="N10,000"
                />
              ),
            },
            {
              label: "Salary Advance Loan",
              key: "2",
              children: (
                <LoanTab
                  title="Salary Advance Loan"
                  amount="N137,460.00"
                  tenor="6 Months"
                  taken="N100,000"
                  outstanding="N10,000"
                />
              ),
            },
            {
              label: "Device Finance Loan",
              key: "3",
              children: (
                <DeviceFinanceTab taken="N70,000" outstanding="N15,000" />
              ),
            },
            {
              label: "Small Ticket Personal Loan",
              key: "4",
              children: (
                <LoanTab
                  title="Small Ticket Personal Loan"
                  amount="N439,571.00"
                  tenor="12 Months"
                  taken="N100,000"
                  outstanding="N10,000"
                />
              ),
            },
          ]}
        ></Tabs>
      </div>
    </>
  );
};

export default Loans;
