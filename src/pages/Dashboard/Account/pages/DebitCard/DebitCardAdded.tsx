import accountLogo from "assets/account.svg";
import { Button } from "components";
import Header from "components/Dashboard/Header/Header";
import debitAddedImg from "assets/Frame 469.png";
import debitAddedSlideImg from "assets/Frame 476.png";

const DebitCardAdded = () => {
  return (
    <div className="main-fit">
      <Header img={accountLogo} title="Debit Card" />
      <div className="debit-card-new">
        <div className="form-card">
          <p>
            Securely manage all cards linked with <br /> Quickbucks. Tap on the
            card for more options
          </p>
          <img
            className="debitAddedImg"
            src={debitAddedImg}
            alt="debitAddedImg"
          />
          <img
            className="debitAddedSlideImg"
            src={debitAddedSlideImg}
            alt="debitAddedSlideImg"
          />
          <Button
            label="Add a New Card"
            variant="primary"
            to="/dashboard/account/debit-card/new"
          />
        </div>
      </div>
    </div>
  );
};

export default DebitCardAdded;
