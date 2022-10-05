import { useState } from "react";
import { Modal } from "antd";

import Benefit from "../Benefit/Benefit";
import { Button, Input } from "components";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import "./LoanTab.scss";
import useDisclosure from "components/shared/Modal/useDisclosure";

const LoanTab = ({ title, amount, tenor, taken, outstanding }: any) => {
  const [checked, setChecked] = useState(false);

  const modalPin = useDisclosure();
  const modalSuccess = useDisclosure();
  const modalPay = useDisclosure();

  return (
    <>
      <div className="my-loans">
        <div className="row">
          <div className="card card--white card--xxl">
            <div className="card-contain">
              <div className="card card--blue card--md">
                <div className="wrapper">
                  <div className="content">
                    <p>Eligible Amount</p>
                    <h4>{amount}</h4>
                  </div>
                  <div className="content">
                    <p>Tenor</p>
                    <h4>{tenor}</h4>
                  </div>
                </div>
              </div>

              <div className="loan-form">
                <p>Enter amount less than {amount}</p>

                <Input label="Amount{N}" type="text" />
              </div>

              <div className="card card--blue card--md">
                <div className="wrapper2">
                  <div className="content">
                    <p>
                      Repayment Amount: <br />
                      (Amount you will need to repay on due)
                    </p>
                    <p>N105,150</p>
                  </div>
                </div>
              </div>

              <div className="terms-wrapper">
                <h3>Terms and Conditions</h3>

                <div className="terms-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quae recusandae odit sit, minima ab sed facilis nulla
                  voluptatum laboriosam totam quam nisi amet voluptas,
                  aspernatur velit expedita accusantium id.0
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quae recusandae odit sit, minima ab sed facilis nulla
                  voluptatum laboriosam totam quam nisi amet voluptas,
                  aspernatur velit expedita accusantium id.0
                </div>
                <div className="terms-accept">
                  <input
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    type="checkbox"
                  />
                  <p>
                    I hereby accept the terms and conditions of this letter.{" "}
                    <span>View offer letter</span>
                  </p>
                </div>
              </div>

              <div className="benefits">
                <h3>{title}</h3>

                <div className="benefits-wrapper">
                  <Benefit content="Interest for Access Bank customers: 6.5% flat" />
                  <Benefit content="Interest for Non-Access Bank customers: 7.5% flat" />
                  <Benefit content="Management Fee: 1% flat" />
                  <Benefit content="Credit Life Insurance: 0.3% flat" />
                  <Benefit content="Penal Charge: 1% per month, upon default" />
                  <Benefit
                    content="Loan would mature on your next PayDay or a
 maximum of 31 days (whichever comes first)."
                  />
                </div>
              </div>

              <div className="btn-wrapper">
                <Button
                  label="continue"
                  variant={checked ? "primary" : "disabled"}
                  onClick={modalPin.onOpen}
                />
              </div>
            </div>
          </div>

          <div className="card card--white card--sm">
            <div className="pay-back">
              <div className="content">
                <p>Loan taken</p>
                <h3>{taken}</h3>
              </div>

              <div className="content">
                <p>Loan outstanding </p>
                <h3>{outstanding}</h3>
              </div>
              <Button
                onClick={modalPay.onOpen}
                label="Pay Back"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalPin.isOpen}
        onOk={modalPin.onClose}
        className="pin-modal"
        centered
      >
        <div className="modal-container">
          <h3>Please enter your PIN </h3>
          <Input label="PIN" type="password" secure />
          <Button
            label="Submit"
            variant="primary"
            onClick={() => {
              modalPin.onClose();
              modalSuccess.onOpen();
            }}
          />
          <img
            className="close-icon"
            onClick={modalPin.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
      <Modal
        open={modalSuccess.isOpen}
        onOk={modalSuccess.onClose}
        className="success-modal"
        centered
      >
        <div className="modal-container">
          <img className="check-icon" src={checkIcon} alt="checkIcon" />
          <h3>Loan Request Successful </h3>
          <Button
            label="Go Home"
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
      <Modal
        open={modalPay.isOpen}
        onOk={modalPay.onClose}
        className="payback-modal"
        centered
      >
        <div className="modal-container">
          <div className="outstanding-box">
            <p>Loan amount outstanding</p>
            <b>N239,571.00</b>
          </div>
          <Input label="Enter Amount{N}" type="text" />
          <Button
            label="Liquidate"
            variant="primary"
            onClick={() => {
              modalPay.onClose();
              modalPin.onOpen();
            }}
          />
          <img
            className="close-icon"
            onClick={modalPay.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </>
  );
};

export default LoanTab;
