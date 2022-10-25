import { useState } from "react";
import { Modal } from "antd";

import searchLogo from "assets/Vector copy 4.svg";
import cancelIcon from "assets/cancel.svg";
import checkIcon from "assets/checked-success.svg";

import phone1Img from "assets/image 4 (1).png";
import phone2Img from "assets/image 4.png";
import phone3Img from "assets/image_10.png";
import phone4Img from "assets/image 101.png";
import phone44Img from "assets/blue_device.png";
import phone444Img from "assets/pink_device.png";
import mobile1Img from "assets/image 6.png";
import mobile2Img from "assets/image 7.png";
import mobile3Img from "assets/image 8.png";
import mobile4Img from "assets/image 9.png";

import { Button, Input } from "components";
import useDisclosure from "components/shared/Modal/useDisclosure";
import Device from "../../components/Device/Device";
import Select from "components/shared/Input/Select";

const DeviceFinanceTab = ({ taken, outstanding }: any) => {
  const [showDeviceFinanceLanding, setShowDeviceFinanceLanding] =
    useState(true);
  const [showDeviceOrdered, setShowDeviceOrdered] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState(0);
  const [checked, setChecked] = useState(false);
  const [orderPhone, setOrderPhone] = useState(false);
  const [deviceColor, setDeviceColor] = useState("pink");
  const [deviceColorActive, setDeviceColorActive] = useState("active");

  const modalPay = useDisclosure();
  const modalPin = useDisclosure();
  const modalSuccess = useDisclosure();
  const modalSummary = useDisclosure();
  const modalConfirm = useDisclosure();

  const handleDeviceClicked = () => {
    setShowDeviceFinanceLanding(false);
  };

  const handleChecked = (e: any, id: any) => {
    setChecked(e.target.checked);
  };

  const handleColorChange = (color: string) => {
    setDeviceColor(color);
  };

  return (
    <>
      <div className="my-loans">
        {showDeviceFinanceLanding && !showDeviceOrdered ? (
          <>
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
                  onClick={handleDeviceClicked}
                />
                <Device
                  img={phone2Img}
                  name="Samsung A23"
                  specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
                  amount="N25,000.00"
                  onClick={handleDeviceClicked}
                />
                <Device
                  img={phone3Img}
                  name="Samsung A23"
                  specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
                  amount="N25,000.00"
                  onClick={handleDeviceClicked}
                  noStock
                />
                <Device
                  img={phone1Img}
                  name="Samsung A23"
                  specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
                  amount="N25,000.00"
                  onClick={handleDeviceClicked}
                />
                <Device
                  img={phone3Img}
                  name="Samsung A23"
                  specs={["Dual Sim", "Fingerprint sensors", "Waterproof"]}
                  amount="N25,000.00"
                  onClick={handleDeviceClicked}
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
          </>
        ) : (
          !showDeviceOrdered && (
            <div className="card card--white card--full">
              <div className="device-selected">
                <div className="device-selected--left">
                  <div className="device-details">
                    <div className="device-details--left">
                      <div className="device-wrapper">
                        {deviceColor === "dark_blue" && (
                          <img src={phone4Img} alt="device-img" />
                        )}
                        {deviceColor === "light_blue" && (
                          <img src={phone44Img} alt="device-img" />
                        )}
                        {deviceColor === "pink" && (
                          <img src={phone444Img} alt="device-img" />
                        )}
                      </div>
                    </div>
                    <div className="device-details--right">
                      <p>
                        Samsung Galaxy A23
                        <br /> - 6.6" - <span>4GB Ram 128GB Rom</span> - Dual
                        Sim <br />
                        -5000mAh- Peach
                      </p>
                    </div>
                  </div>
                  <div className="device-color-row">
                    <div
                      onClick={() => handleColorChange("dark_blue")}
                      className={`device-color device-color--blue device-color--${
                        deviceColor === "dark_blue" && `active-${deviceColor}`
                      }`}
                    ></div>
                    <div
                      onClick={() => handleColorChange("light_blue")}
                      className={`device-color device-color--light-blue device-color--${
                        deviceColor === "light_blue" && `active-${deviceColor}`
                      }`}
                    ></div>
                    <div
                      onClick={() => handleColorChange("pink")}
                      className={`device-color device-color--pink device-color--${
                        deviceColor === "pink" && `active-${deviceColor}`
                      }`}
                    ></div>
                  </div>
                  <div className="device-specs">
                    <div className="section">
                      <h3 className="heading">Device details</h3>
                      <ul>
                        <li>-3G/4G LTE Network</li>
                        <li>-143.6 x 70.9 x 7.7mm (5.56 x 2.79 x 0.30 in)</li>
                        <li>-Front/back glass, stainless steel frame build</li>
                        <li>-Nano-SIM and e-SIM</li>
                        <li>
                          -IP68 dust/water resistant (up to 2m for 30 mins)
                        </li>
                        <li>-Apply Pay (Visa, MaterCard, Amex certified)</li>
                        <li>
                          -Super AMOLED capacitive touchscreen, 16M colors
                        </li>
                      </ul>
                    </div>
                    <div className="section">
                      <h3 className="heading">Type</h3>
                      <ul>
                        <li>
                          -5.8 inches, 84.4 cm2 (-82.9% screen-to body ratio)
                        </li>
                      </ul>
                    </div>
                    <div className="section">
                      <h3 className="heading">Size</h3>
                      <ul>
                        <li>
                          -1125 x 2436 pixels, 19.5:9 ratio (-458 ppi density)
                        </li>
                      </ul>
                    </div>
                    <div className="section">
                      <h3 className="heading">Resolution</h3>
                      <ul>
                        <li>-Scratch-resistant glass, oleophobic coating</li>
                      </ul>
                    </div>
                    <div className="section">
                      <h3 className="heading">Protection</h3>
                      <ul>
                        <li>-Dolby Vision/HDR10 Compliant</li>
                        <li>-Wide color gamut diplay</li>
                        <li>-3D Touch Display</li>
                        <li>-True-tone display</li>
                        <li>-120Hz touch-sensing</li>
                        <li>-iOS 12 Operating System</li>
                        <li>-Apple A12 Bionic Chipset</li>
                        <li>-Hexa-core Processor</li>
                        <li>-64 GB, 4GB RAM</li>
                        <li>-12 MP, f/1.8, 28mm, 1.4um, OIS, PDAF</li>
                        <li>-PDAF 2x optical zoom Dual Camera</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="device-selected--right">
                  <div className="custom-radio">
                    <p>RAM(GB)</p>
                    <div className="custom-radio-row">
                      <label className="radio-control">
                        4GB
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-control">
                        16GB
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-control">
                        32GB
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="custom-radio">
                    <p>ROM(GB)</p>
                    <div className="custom-radio-row">
                      <label className="radio-control">
                        32GB
                        <input type="radio" name="radio1" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-control">
                        64GB
                        <input type="radio" name="radio1" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-control">
                        128GB
                        <input type="radio" name="radio1" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="mobile-network">
                    <p>Select mobile network</p>
                    <div className="mobile-network-row">
                      <img
                        onClick={() => setActiveNetwork(1)}
                        className={activeNetwork === 1 ? "active" : ""}
                        src={mobile4Img}
                        alt="mobile-img"
                      />
                      <img
                        onClick={() => setActiveNetwork(2)}
                        className={activeNetwork === 2 ? "active" : ""}
                        src={mobile1Img}
                        alt="mobile-img"
                      />
                      <img
                        onClick={() => setActiveNetwork(3)}
                        className={activeNetwork === 3 ? "active" : ""}
                        src={mobile3Img}
                        alt="mobile-img"
                      />
                      <img
                        onClick={() => setActiveNetwork(4)}
                        className={activeNetwork === 4 ? "active" : ""}
                        src={mobile2Img}
                        alt="mobile-img"
                      />
                    </div>
                  </div>
                  <Select label="Select airtime bundle">
                    <option value="">N1,000.00</option>
                    <option value="">N2,000.00</option>
                    <option value="">N3,500.00</option>
                    <option value="">N7,000.00</option>
                  </Select>
                  <Input label="Valid phone number" type="number" />
                  <Select label="State of Residence">
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Anambra</option>
                    <option value="">Ibadan</option>
                  </Select>
                  <Select label="Select pickup state">
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Anambra</option>
                    <option value="">Ibadan</option>
                  </Select>
                  <Input label="Select pickup location" type="text" />
                  <div className="device-insure">
                    <p>Do you want your device to be insured</p>
                    <div className="device-insure-row">
                      <div className="check">
                        <label className="main">
                          Yes
                          <input
                            type="checkbox"
                            onChange={(e) => handleChecked(e, 1)}
                          />
                          <span className="custom-check"></span>
                        </label>
                      </div>
                      <div className="check">
                        <label className="main">
                          No
                          <input
                            type="checkbox"
                            onChange={(e) => handleChecked(e, 2)}
                          />
                          <span className="custom-check"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    label="Continue"
                    disabled={!checked}
                    variant="primary"
                    onClick={modalSummary.onOpen}
                  />
                </div>
              </div>
            </div>
          )
        )}

        {showDeviceOrdered && (
          <div className="ordered-device">
            <div className="card">
              <div className="device-details">
                <div className="device-wrapper">
                  <img src={phone1Img} alt="device-img" />
                </div>
                <div className="device-info">
                  <h4>Samsung S7</h4>
                  <p>Front Camera: 12MP</p>
                  <p>Rear Camera: 12MP</p>
                  <p>Single Sim</p>
                  <p className="view-details">View Device Details</p>
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

              <Button label="View Pickup Instruction" variant="primary" />
            </div>
          </div>
        )}
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
              !orderPhone && modalSuccess.onOpen();
              orderPhone && modalConfirm.onOpen();
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
          <h3>Request Successful </h3>
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
        open={modalConfirm.isOpen}
        onOk={modalConfirm.onClose}
        className="confirm-modal"
        centered
        style={{ top: 100 }}
      >
        <div className="modal-container">
          <img className="check-icon" src={checkIcon} alt="checkIcon" />
          <h3>Request Submitted Successfully</h3>
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
          <hr />

          <p className="visit">
            Please visit the pickup location within 72 hours
          </p>

          <p className="provide">You will need to provide the following:</p>

          <ul>
            <li>
              1.Any of these ID cards: (International passport, Driver’s
              Licence, Voter’s Card, National ID card)
            </li>

            <li>2.Your Transaction ID (296746)</li>
            <li>3.The last Four(4) digits of your BVN</li>
            <li>
              4.Your Pick up code (OTP)- this will be sent your registered
              e-mail address or phone number via SMS at the point of pick-up
            </li>
          </ul>

          <p className="note">
            Note: your request will expire after 72 hours of no pick-up
          </p>

          <Button
            label="Submit"
            variant="primary"
            onClick={() => {
              modalConfirm.onClose();
              setShowDeviceOrdered(true);
            }}
          />
          <img
            className="close-icon"
            onClick={modalConfirm.onClose}
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
      <Modal
        open={modalSummary.isOpen}
        onOk={modalSummary.onClose}
        className="summary-modal"
        centered
      >
        <div className="modal-container">
          <div className="device-details">
            <div className="device-wrapper">
              <img src={phone1Img} alt="device-img" />
            </div>
            <div className="device-info">
              <h4>Samsung S7</h4>
              <p>Front Camera: 12MP</p>
              <p>Rear Camera: 12MP</p>
              <p>Single Sim</p>
            </div>
          </div>
          <div className="device-summary">
            <h3>Summary</h3>
            <div className="device-summary-row">
              <p>Color</p>
              <span>Black</span>
            </div>
            <div className="device-summary-row">
              <p>Capacity</p>
              <span>64GB </span>
            </div>
            <div className="device-summary-row">
              <p>Mobile Network</p>
              <span>MTN </span>
            </div>
            <div className="device-summary-row">
              <p>AIrtime Bundle</p>
              <span>N1,000.00</span>
            </div>
            <div className="device-summary-row">
              <p>Pickup State</p>
              <span>Lagos</span>
            </div>
            <div className="device-summary-col">
              <p>Pickup Location</p>
              <span>SLOT, Saka Tinubu, Victoria Island Lagos</span>
            </div>
            <div className="device-summary-row">
              <p>Device insurance</p>
              <span>Yes</span>
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

          <p className="note">
            Please note, Device finance will not be disbursed if you have an
            active Payday Loan, or any outstanding loan with Access Bank
          </p>
          <Button
            label="Continue"
            variant="primary"
            onClick={() => {
              modalSummary.onClose();
              modalPin.onOpen();
              setOrderPhone(true);
            }}
          />
          <img
            className="close-icon"
            onClick={modalSummary.onClose}
            src={cancelIcon}
            alt="cancelIcon"
          />
        </div>
      </Modal>
    </>
  );
};

export default DeviceFinanceTab;
