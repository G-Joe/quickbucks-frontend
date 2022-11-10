import historyLogo from "assets/history.svg";
import Header from "components/Dashboard/Header/Header";
import { Modal, Tabs } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";
import { Button } from "components";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";

import "./index.scss";
import LoanHistoryTab from "./components/LoanHistoryTab";
import DeviceFinanceTab from "./components/DeviceFinanceTab";

const History = () => {
  const modalSuccess = useDisclosure();
  return (
    <>
      <div className="main-fit">
        <Header img={historyLogo} title="History" />

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Loan History",
              key: "1",
              children: <LoanHistoryTab />,
            },
            {
              label: "Device Finance",
              key: "2",
              children: <DeviceFinanceTab />,
            },
          ]}
        ></Tabs>
      </div>

      <Modal
        open={modalSuccess.isOpen}
        onOk={modalSuccess.onClose}
        className="success-modal"
        centered
      >
        <div className="modal-container">
          <img className="check-icon" src={checkIcon} alt="checkIcon" />
          <h3>
            Account creation <br />
            Successful{" "}
          </h3>
          <p className="check-email">
            Your account number is <br />
            <span className="acc-num">2345568903</span>
          </p>
          <Button
            label="Go To Home"
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

export default History;
