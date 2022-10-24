import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";
import "../account.scss"
import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";
import { useState } from "react";


const OTP = ({message, prev, OtpSuccess}:any) => {
  const [otp, setOtp]=useState("")

  const modalSuccess = useDisclosure();
    return (
      <>
      <div className="edit-details">
        <div className="form-wrapper">
          <form className="otp-open-account">
          <h3>A One Time Passwword(OTP) has been sent to <br/>
          your BVN regsitered phone number or email<br/>
                <span className="otp-num">+234813****35</span> or <span className="otp-num">ero@****@gmail.com</span>
            </h3>
            <Input label="OTP" type="text" required value={otp} onChange={(e:any)=> setOtp(e.target.value)} />
            <div className="account-buttons">
              <Button  label="Previous" variant="primary" onClick={prev}/>
              <Button to="" label="Submit" variant="primary" onClick={modalSuccess.onOpen}  />
           </div>
           <p>Didn't get an OTP?<br/>
                Resend OTP
           </p>
          </form>
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
  



export default OTP;
