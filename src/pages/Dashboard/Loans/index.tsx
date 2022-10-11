import { Modal, Tabs } from "antd";

import headerLogo from "assets/cash-money.svg";
import searchLogo from "assets/Vector copy 4.svg";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";

import phone1Img from "assets/image 4 (1).png";
import phone2Img from "assets/image 4.png";
import phone3Img from "assets/image_10.png";

import { Button, Input } from "components";
import Header from "components/Dashboard/Header/Header";
import useDisclosure from "components/shared/Modal/useDisclosure";
import LoanTab from "./components/LoanTab/LoanTab";

import "./components/LoanTab/LoanTab.scss";
import Device from "./components/Device/Device";

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
                  title="Payday Loan"
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
              children: <DeviceFinance taken="N70,000" outstanding="N15,000" />,
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

const DeviceFinance = ({ taken, outstanding }: any) => {
  const modalPay = useDisclosure();
  const modalPin = useDisclosure();
  const modalSuccess = useDisclosure();

  return (
    <>
      <div className="my-loans">
        <div className="row">
          <div className="search">
            <div className="dropdown">
              <select>
                <option value="">Categories</option>
              </select>
            </div>
            <div className="input-wrapper">
              <input placeholder="product name, brand" type="text" />
              <div className="search-btn">
                <img src={searchLogo} alt="searchLogo" />
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
        <div className="row">
          <div className="devices">
            <Device
              img={phone3Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone2Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone3Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
              noStock
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone3Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
              noStock
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
            />
            <Device
              img={phone1Img}
              name="Samsung A23"
              specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
              amount="N25,000.00"
              noStock
            />
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

export default Loans;
