import accountLogo from "assets/account.svg";
import { Button, Input } from "components";
import Header from "components/Dashboard/Header/Header";

const DebitCardNew = () => {
  return (
    <div className="main-fit">
      <Header img={accountLogo} title="Debit Card" />
      <div className="debit-card-new">
        <div className="form-card">
          <Input label="Card number" type="number" />
          <Input label="Expiry (mm/yy)" type="date" />
          <Input label="CVV" type="number" />
          <Input label="PIN" type="password" secure />
          <Button
            label="Link New Card"
            variant="primary"
            to="/dashboard/account/debit-card/cards"
          />
        </div>
      </div>
    </div>
  );
};

export default DebitCardNew;
