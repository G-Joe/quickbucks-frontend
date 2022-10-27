import { Modal } from "antd";
import { Button, Input } from "components";
import useDisclosure from "components/shared/Modal/useDisclosure";
import cancelIcon from "assets/cancel.svg";

import "../MyDetails.scss";

const EditEmployee = ({ next, prev }: any) => {
  const modalPreview = useDisclosure();

  return (
    <div className="edit-emp form-card">
      <Input label="Name" type="text" />
      <Input label="RC number (optional)" type="number" />
      <Input label="Employer name" type="text" />
      <Input label="Salary amount" type="number" />
      <Input label="Salary Payment date" type="date" />
      <Input label="Mobile number" type="number" />
      <Input label="Email address" type="email" />
      <Input label="Salary account number" type="number" />

      <div className="row">
        <Button label="Previous" variant="secondary--outline" onClick={prev} />
        <Button label="Next" variant="primary" onClick={modalPreview.onOpen} />
      </div>
      <Modal
        open={modalPreview.isOpen}
        onOk={modalPreview.onClose}
        className="confirm-modal"
        centered
        style={{ top: 100 }}
      >
        <div className="modal-container">
          <h3>Details Preview</h3>
          <div className="row">
            <p>Name</p>
            <span>Solomon addy</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>RC number</p>
            <span>123456789</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Employer name</p>
            <span>Capital FMC LTD</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Salary amount</p>
            <span>N500,000.00</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Salary payment date</p>
            <span>24/10/2022</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Mobile number</p>
            <span>08023654987</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Email address </p>
            <span>sol.abs@gmail.com</span>
          </div>
          <hr className="view-emp-hr" />
          <div className="row">
            <p>Salary account number </p>
            <span>0123654987</span>
          </div>
          <hr className="view-emp-hr" />
          <Button
            label="Continue"
            variant="primary"
            onClick={() => {
              modalPreview.onClose();
              next();
            }}
          />
          <img
            className="close-icon"
            onClick={modalPreview.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </div>
  );
};

export default EditEmployee;
