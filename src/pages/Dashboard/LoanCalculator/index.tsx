import { useState } from "react";
import { Tabs, Modal } from "antd";

import headerLogo from "assets/cash-money.svg";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import { Button, Input } from "components";
import Header from "components/Dashboard/Header/Header";
import useDisclosure from "components/shared/Modal/useDisclosure";

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
              label: "Payday",
              key: "1",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Salary Advance",
              key: "2",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Device Finance",
              key: "3",
              children: <LoanCalculatorTab />,
            },
            {
              label: "Small Ticket Personal",
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
  const [showRightPanel, setShowRightPanel] = useState(false);

  const modalSuccess = useDisclosure();

  return (
    <>
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
              <Button
                label="proceed"
                variant="primary"
                onClick={() => setShowRightPanel(true)}
              />
            </div>
          </div>
          {showRightPanel && (
            <div className="right-panel">
              <h3>Total cost to customer</h3>
              <div className="card card--blue card--lg">
                <div className="wrapper">
                  <div className="repayment-details">
                    <div className="repayment-details-row">
                      <p>Total repayment </p>
                      <span>
                        30 days or next salary date <br /> (whichever comes
                        first)
                      </span>
                    </div>
                    <hr />
                    <p className="pay-back">
                      This means you will pay back <span>N5.15</span> kobo for
                      every <span>N1,000</span> borrowed
                    </p>
                    <hr />
                    <p className="annual-rate">
                      Annual percentage Rate (APR) <span>48%</span>. this
                      reflects the total cost of the credits on a yearly basis
                      expressed as percentage, using the information of the
                      disclosure date it is{" "}
                    </p>
                  </div>
                </div>
              </div>
              <h3>Specific information about your Payday loan</h3>
              <div className="card card--blue card--lg">
                <div className="wrapper">
                  <div className="repayment-details">
                    <div className="repayment-details-row">
                      <p>Loan Received</p>
                      <span>N100,000</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>
                        Interest rate:
                        <br />( variable interest rate may change)
                      </p>
                      <span>4% flat</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>
                        Total Interest charges <br />
                        ( Total interest you will pay): <br />( variable
                        interest rate may change)
                      </p>
                      <span> N4,000</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>
                        Total Cost of Credit: <br />( This is made up of total
                        interest and others)
                      </p>
                      <span>N5,150</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>
                        Repayment Amount: <br />
                        (Amount you will need to repay on due)
                      </p>
                      <span>N105,150</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>
                        Date of Repayment <br />
                        Next salary payment or 30days after loan
                      </p>
                      <span></span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>Date on which other</p>
                      <span>N/A</span>
                    </div>
                    <hr />
                    <div className="repayment-details-row">
                      <p>Total Number of Repayment</p>
                      <span>1</span>
                    </div>
                    <hr />
                    <div className="btn-wrapper">
                      <Button
                        label="Email Offer Letter"
                        variant="primary"
                        onClick={modalSuccess.onOpen}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        open={modalSuccess.isOpen}
        onOk={modalSuccess.onClose}
        className="success-modal"
        centered
      >
        <div className="modal-container">
          <img className="check-icon" src={checkIcon} alt="checkIcon" />
          <h3>Email Sent Successful </h3>
          <p className="check-email">
            Please check your email <span>ag***@gmail.com</span> to read the
            full statement
          </p>
          <Button
            label="Return To Calculator"
            variant="primary"
            onClick={() => {
              modalSuccess.onClose();
            }}
          />
          <img
            className="close-icon"
            onClick={modalSuccess.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </>
  );
};

export default LoanCalculator;
