import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";

import checkIcon from "assets/checked-success.svg";
import cancelIcon from "assets/cancel.svg";
import checkFailedIcon from "assets/check-failed.svg";
import { Button, Input } from "components";
import Select from "components/shared/Input/Select";

const Outstanding = ({ img, setDeviceStatusPage }: any) => {
  const modalPin = useDisclosure();
  const modalSuccess = useDisclosure();
  const modalCancel = useDisclosure();
  const modalCancelSuccess = useDisclosure();
  const modalLiquidate = useDisclosure();

  return (
    <>
      <div className="ordered-device">
        <div className="card">
          <div className="device-details">
            <div className="device-wrapper">
              <img src={img} alt="device-img" />
            </div>
            <div className="device-info">
              <h4>Samsung S7</h4>
              <p>Front Camera: 12MP</p>
              <p>Rear Camera: 12MP</p>
              <p>Single Sim</p>
            </div>
          </div>
          <div className="outstanding-box">
            <p className="outstand">Loan Amount Outstanding</p>
            <p className="outstand">N239,571.00</p>
          </div>

          <Input label="Enter Amount(N)" type="text" />
          <Select label="Select Account">
            <option value="Current account - 88300337">
              Current account - 88300337
            </option>
            <option value="Current account - 88300337">
              Savings account - 0022234333
            </option>
          </Select>
          <div className="mb-10" />
          <Button
            label="Self Liquidate"
            variant="primary"
            onClick={modalLiquidate.onOpen}
          />

          <div className="cancel-tranx" onClick={modalCancel.onOpen}>
            <p>Cancel Transaction</p>
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
          <h3>Liquidation was Successful </h3>
          <Button
            label="Go Home"
            variant="primary"
            onClick={() => {
              modalSuccess.onClose();
            }}
            to="/dashboard/home"
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
        open={modalLiquidate.isOpen}
        onOk={modalLiquidate.onClose}
        className="liquidate-modal"
        centered
      >
        <div className="modal-container">
          <div className="liq-row">
            <div className="left">
              <p>Device Finance</p>
              <b>N250,000</b>
            </div>
            <div className="right">
              <p>Samsung S7</p>
              <b>Trans ID: 216746</b>
              <p className="text-blue">Active</p>
            </div>
          </div>
          <div className="outstanding-box">
            <p className="outstand">Loan Amount Outstanding</p>
            <p className="outstand">N239,571.00</p>
          </div>
          <div className="liq-pay">
            <p>You are about to pay</p>
            <h2>N100,000</h2>
          </div>
          <div className="liq-from">
            <p>From</p>
            <div className="liq-from-card">
              <p>Current account - 88300337</p>
              <p>GAFAR POPOOLA</p>
              <b>N450,000.00</b>
            </div>
          </div>
          <Button
            label="Self Liquidate"
            variant="primary"
            onClick={() => {
              modalLiquidate.onClose();
              modalPin.onOpen();
            }}
          />
          <div className="cancel-tranx" onClick={modalLiquidate.onClose}>
            <p>Cancel</p>
          </div>
          <img
            className="close-icon"
            onClick={modalLiquidate.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
      <Modal
        open={modalCancel.isOpen}
        onOk={modalCancel.onClose}
        className="cancel-tranx-modal"
        centered
      >
        <div className="modal-container">
          <h3 className="cancel-tranx">
            Are you sure you want to cancel this transaction
          </h3>
          <div className="outstanding-box outstanding-box-row">
            <p>Transaction ID</p>
            <b>296746</b>
          </div>
          <div className="device-summary-col">
            <p>Pickup Location</p>
            <span>SLOT, Saka Tinubu, Victoria Island Lagos</span>
          </div>
          <div className="pay-plan-row">
            <p>Contact Number</p>
            <span>08033990982</span>
          </div>

          <Button
            label="Cancel transaction"
            variant="primary"
            onClick={() => {
              modalCancel.onClose();
              modalCancelSuccess.onOpen();
            }}
          />
          <div className="cancel-tranx" onClick={modalCancel.onClose}>
            <p>Go back</p>
          </div>
          <img
            className="close-icon"
            onClick={modalCancel.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
      <Modal
        open={modalCancelSuccess.isOpen}
        onOk={modalCancelSuccess.onClose}
        className="cancel-tranx-modal"
        centered
      >
        <div className="modal-container">
          <img
            className="check-failed-icon"
            src={checkFailedIcon}
            alt="checkIcon"
          />
          <h3 className="cancel-tranx">Transaction Canceled</h3>
          <div className="outstanding-box outstanding-box-row">
            <p>Transaction ID</p>
            <b>296746</b>
          </div>
          <div className="device-summary-col">
            <p>Pickup Location</p>
            <span>SLOT, Saka Tinubu, Victoria Island Lagos</span>
          </div>
          <div className="pay-plan-row">
            <p>Contact Number</p>
            <span>08033990982</span>
          </div>

          <Button
            label="Go To Home"
            variant="primary"
            onClick={() => {
              modalCancelSuccess.onClose();
            }}
            to="/dashboard/home"
          />

          <div
            className="cancel-tranx"
            onClick={() => {
              modalCancelSuccess.onClose();
              setDeviceStatusPage("");
            }}
          >
            <p>Return To Device Finance</p>
          </div>

          <img
            className="close-icon"
            onClick={modalCancelSuccess.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </>
  );
};

export default Outstanding;
