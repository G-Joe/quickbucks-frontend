import { Tabs } from "antd";

import headerLogo from "assets/cash-money.svg";
import { Button, Input } from "components";
import Header from "components/Dashboard/Header/Header";

import "./index.scss";

const LoanCalculator = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={headerLogo} title="Loan Calculator" />

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Payday Loan",
              key: "1",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Salary Advance Loan",
              key: "2",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Device Finance Loan",
              key: "3",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Small Ticket Personal Loan",
              key: "4",
              children: <LoanCalculatorTab />,
            },
          ]}
        ></Tabs>
      </div>
    </>
  );
};

const LoanCalculatorTab = () => {
  return (
    <div className="loan-calculator">
      <div className="row">
        <div className="card card--white card--xl">
          <div className="card card--blue card--md">
            <div className="wrapper">
              <div className="content">
                <p>Eligible Amount</p>
                <h4>
                  75% of monthly salary but aubject to a max of N1,000,000
                </h4>
              </div>
            </div>
          </div>

          <div className="loan-details">
            <div className="loan-details-row">
              <p>Tenor:</p>
              <span>
                30 days or next salary date <br /> (whichever comes first)
              </span>
            </div>
            <hr />
            <div className="loan-details-row">
              <p>Interest:</p>
              <span>4% flat</span>
            </div>
            <hr />
            <div className="loan-details-row">
              <p>Collateral:</p>
              <span>No</span>
            </div>
          </div>
          <Input type="number" label="Enter proposed loan amount" />
          <div className="btn-wrapper">
            <Button label="proceed" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
