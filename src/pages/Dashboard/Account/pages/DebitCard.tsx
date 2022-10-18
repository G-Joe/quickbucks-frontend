import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";

const DebitCard = () => {
  return (
    <div>
      <div className="main-fit">
        <Header img={accountLogo} title="Debit Card" />
      </div>
    </div>
  );
};

export default DebitCard;
