import accountLogo from "assets/account.svg"
import Header from "components/Dashboard/Header/Header";
import ReferralImg from "assets/referral.svg"
import Input from "components/shared/Input/Input"
import Button from "components/shared/Button/Button";
import "./account.scss"

const Referral = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={accountLogo} title="Account" />
        <div className="referral">
            <h3>Refer QuickBucks to a friend and family and<br/>
                get a 5% discount on any of your loans!</h3>
            <img src={ReferralImg}  alt="referralImg"/>
            <Input label="Your Referral Code:" type="text" placeholder="REF42Q13"/>
            <Button to="#" label="Share Code" variant="primary"/>

        </div>
       
      </div>
    </>
  );
};



export default Referral;
