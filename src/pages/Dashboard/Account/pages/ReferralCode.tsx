import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";

const ReferralCode = () => {
  return (
    <div>
      <div className="main-fit">
        <Header img={accountLogo} title="Referral Code" />
      </div>
    </div>
  );
};

export default ReferralCode;
