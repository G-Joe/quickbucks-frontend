import { Modal } from "antd";
import { Button } from "components";
import uploadIconImg from "assets/upload_icon.svg";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import useDisclosure from "components/shared/Modal/useDisclosure";

const UploadDocuments = ({ next, prev }: any) => {
  const modalSuccess = useDisclosure();

  return (
    <>
      <div className="upload-emp form-card">
        <div className="upload-group">
          <label>Company ID</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Recent pay slip</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Employment/contact letter</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Goverment Issued ID</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="upload-group">
          <label>Proof of address</label>
          <div className="upload-group-box">
            <input className="upload-input" type="file" />
            <img src={uploadIconImg} alt="uploadIconImg" />
            <p>Upload</p>
          </div>
        </div>
        <div className="row">
          <Button
            label="Previous"
            variant="secondary--outline"
            onClick={prev}
          />
          <Button
            label="Submit"
            variant="primary"
            onClick={modalSuccess.onOpen}
          />
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
          <h3>Upload Successful </h3>
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

export default UploadDocuments;
