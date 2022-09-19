import logoImg from "assets/Frame 20.png";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import FlagSelect from "components/Auth/FlagSelect/FlagSelect";

const SignUpTwo = () => {
  return (
    <div className="auth-wrapper">
      <div className="pane pane-left">
        <LeftPane />
      </div>
      <div className="pane pane-right">
        <img className="rect-1-img" src={rect1Img} alt="rect-1-img" />
        <img className="rect-2-img" src={rect2Img} alt="rect-2-img" />
        <div className="flag-wrapper">
          <FlagSelect />
        </div>
        <div className="form-wrapper">
          <div className="logo-wrapper">
            <img className="logo-img" src={logoImg} alt="logo-img" />
          </div>

          <form className="form">
            <p className="onetime-text">
              A One Time Password (OTP) has been sent to your BVN registered{" "}
              <br />
              phone number or email <br />
              <span>+234813*****35</span> or <br />{" "}
              <span>ero*****@gmail.com</span>
            </p>
            <Input label="OTP" type="password" secure />

            <div className="row">
              <Button
                label="previous"
                to="/signup/individual/1"
                variant="secondary--outline"
              />
              <Button
                label="next"
                to="/signup/individual/3"
                variant="primary"
              />
            </div>

            <div className="otp-wrapper">
              <p className="otp-text otp-text-1">Didn’t get an OTP?</p>
              <p className="otp-text otp-text-2">Resend OTP</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpTwo;
