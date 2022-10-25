import historyLogo from "assets/history.svg"
import Header from "components/Dashboard/Header/Header";
import Tab from "./tab";
import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";
import { Input, Button } from "components";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import { HiFilter, HiSearch } from "react-icons/hi";
import "./index.scss"





const History = () => {

  const modalSuccess = useDisclosure();
  return (
    <>
      <div className="main-fit">
        <Header img={historyLogo} title="History" />
      </div>
      <div className="tab-content">
      <div className="search">
          <div className="search-button">
            <HiFilter  className="filter-icon" />
            <Button label="Filter" variant="secondary--outline" />
          </div>
          <div className="search-box">
            <HiSearch className="search-icon" />
            <Input label="" type="search" placeholder="Search by loan type"/>
          </div>
        </div>
            <Tab/>
      </div>

      <Modal
        open={modalSuccess.isOpen}
        onOk={modalSuccess.onClose}
        className="success-modal"
        centered
      >
        <div className="modal-container">
          <img className="check-icon" src={checkIcon} alt="checkIcon" />
          <h3>Account creation <br/>Successful </h3>
          <p className="check-email">
            Your account number is <br/><span className="acc-num">2345568903</span>
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
