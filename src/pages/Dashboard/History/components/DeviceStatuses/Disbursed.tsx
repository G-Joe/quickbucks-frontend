import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";
import checkIcon from "assets/checked-success.svg";
import cancelIcon from "assets/cancel.svg";

import { Button , Input} from "components";

const Disbursed = ({ img, setDeviceStatusPage }: any) => {
  const modalCancel = useDisclosure();
  const modalPin = useDisclosure();
  const modalSuccess = useDisclosure();
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

          <div className="pending-box">
            <p className="pending">Loan Amount settled</p>
            <p className="pending-price">N239,571.00</p>
          </div>

          <div className="outstanding-box">
            <p className="outstand">Loan Amount Outstanding</p>
            <p className="outstand-price">N239,571.00</p>
          </div>


          <p className="req-date disbursed">Request date: November 20,2019-01:00PM</p>

          <Button label="Self-liquidate" variant="primary" onClick={modalPin.onOpen}/>

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
          <h3>Liquidation was <br/>Successful </h3>
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
      
    </>
  );
};

export default Disbursed;
