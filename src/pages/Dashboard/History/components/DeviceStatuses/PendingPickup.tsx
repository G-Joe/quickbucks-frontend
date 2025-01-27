import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";

import cancelIcon from "assets/cancel.svg";
import checkFailedIcon from "assets/check-failed.svg";
import { Button } from "components";

const PendingPickup = ({ img, setDeviceStatusPage }: any) => {
  const modalCancel = useDisclosure();
  const modalCancelSuccess = useDisclosure();
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
          <div className="pay-plan card">
            <div className="pay-plan-row">
              <p>Monthly Repayment to Bank</p>
              <span>N105,150</span>
            </div>
            <hr />
            <div className="pay-plan-row">
              <p>Monthly Airtime Credit</p>
              <span>N3500.00</span>
            </div>
            <hr />
            <div className="pay-plan-row">
              <p>Tenor</p>
              <span>12 Months</span>
            </div>
          </div>

          <p className="req-date">Request date: November 20,2019-01:00PM</p>

          <Button label="View Pickup Instruction" variant="primary" />

          <div className="cancel-tranx" onClick={modalCancel.onOpen}>
            <p>Cancel Transaction</p>
          </div>
        </div>
      </div>
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

export default PendingPickup;
