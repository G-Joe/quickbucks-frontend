import { Button, Input } from "components";
import { Progress } from "antd";
import cancelIcon from "assets/cancel.svg";
import { Modal } from "antd";
import useDisclosure from "components/shared/Modal/useDisclosure";
import "./table.scss";

const Table = () => {



  const modalPin = useDisclosure();
  const modalPay = useDisclosure();
  const modalSuccess = useDisclosure();

  return (
    <>
    <div>
      <table className="table">
        <tr>
          <th>S/N</th>
          <th>Date</th>
          <th>Loan type</th>
          <th>Amount Taken</th>
          <th>Repayment Status</th>
          <th>Tenor</th>
          <th>Action</th>
          <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>12/07/2022</td>
          <td>Payday loan</td>
          <td>N50,000</td>
          <td>
            <Progress
              percent={58}
              strokeColor="#FF9800"
              trailColor="#cddff8"
              showInfo={false}
            />
            N20,000/N50,000
          </td>
          <td>1 Month</td>
          <td>
            <Button label="Pay Back" variant="primary" onClick={modalPay.onOpen}/>
          </td>
          <td>View Statement</td>
        </tr>
        <tr>
          <td>2</td>
          <td>22/04/2022</td>
          <td>Salary Advance</td>
          <td>N100,000</td>
          <td className="progress">
            <Progress
              percent={28}
              strokeColor="#FF505F"
              trailColor="#cddff8"
              showInfo={false}
            />
            N10,000/N100,000
          </td>
          <td>2 Months</td>
          <td>
            <Button label="Pay Back" variant="primary" onClick={modalPay.onOpen}/>
          </td>
          <td>View Statement</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2/01/2022</td>
          <td>Device Finance</td>
          <td>N200,000</td>
          <td>
            <Progress
              percent={88}
              strokeColor="#7BC67E"
              trailColor="#cddff8"
              showInfo={false}
            />
            N150,000/200,000
          </td>
          <td>3 Months</td>
          <td>
            <Button label="Pay Back" variant="primary" onClick={modalPay.onOpen}/>
          </td>
          <td>View Statement</td>
        </tr>
      </table>
      
    </div>
    
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
          <Input label="Amount{N}" type="text" />
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
    </>
  );
};

export default Table;
