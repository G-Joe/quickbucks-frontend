import { useState } from "react";
import { Modal } from "antd";

import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import { Button, Input } from "components";

const LoanCalculatorTab = ({
  elig_amt_percent,
  elig_amt_max,
  tenor,
  tenor_alt,
  interest,
  collateral,
  rightPanel,
  modalSuccess,
}: any) => {
  const [showRightPanel, setShowRightPanel] = useState(false);

  return (
    <>
      <div className="loan-calculator">
        <div className="row">
          <div className="calc card card--white card--xl">
            <div className="card card--blue card--md">
              <div className="wrapper">
                <div className="content">
                  <p>Eligible Amount</p>
                  <h4>
                    {elig_amt_percent} of monthly salary{" "}
                    {elig_amt_max && `but subject to a max of ${elig_amt_max}`}
                  </h4>
                </div>
              </div>
            </div>

            <div className="loan-details">
              <div className="loan-details-row">
                <p>Tenor:</p>
                <span>
                  {tenor} <br /> {tenor_alt && `(whichever comes first)`}
                </span>
              </div>
              <hr />
              <div className="loan-details-row">
                <p>Interest:</p>
                <span>{interest}</span>
              </div>
              <hr />
              <div className="loan-details-row">
                <p>Collateral:</p>
                <span>{collateral}</span>
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
          {showRightPanel && rightPanel}
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

export default LoanCalculatorTab;
