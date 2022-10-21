import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";
import debitImg from "assets/debit_card.png";
import { Button } from "components";
import "./DebitCard.scss";

const DebitCard = () => {
  return (
    <div className="main-fit">
      <Header img={accountLogo} title="Debit Card" />
      <div className="debit-card-wrapper">
        <img src={debitImg} alt="debitImg" />
        <h4>
          You have no cards linked <br />
          with this account
        </h4>
        <div className="btn-wrapper">
          <Button
            label="Add a new card"
            variant="primary"
            to="/dashboard/account/debit-card/new"
          />
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
