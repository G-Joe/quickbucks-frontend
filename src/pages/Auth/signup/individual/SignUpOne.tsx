import { Link } from "react-router-dom";
import logoImg from "assets/Frame 20.png";
import flagImg from "assets/Frame 12.svg";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import appleImg from "assets/App Store Badge US Black.svg";
import androidImg from "assets/Google Play Badge US.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import MobileAppBox from "components/Auth/MobileAppBox/MobileAppBox";

const SignUpOne = () => {
  return (
    <div className="auth-wrapper">
      <div className="pane pane-left">
        <LeftPane />
      </div>
      <div className="pane pane-right">
        <img className="rect-1-img" src={rect1Img} alt="rect-1-img" />
        <img className="rect-2-img" src={rect2Img} alt="rect-2-img" />
        <div className="flag-wrapper">
          <img className="flag-img" src={flagImg} alt="flag-img" />
        </div>
        <div className="form-wrapper">
          <div className="logo-wrapper">
            <img className="logo-img" src={logoImg} alt="logo-img" />
          </div>

          <form className="form">
            <Input label="BVN" type="number" />
            <Input label="Email" type="email" />
            <p className="signin-text signin-text--left">
              Create a password for logging into Quickbucks
            </p>
            <Input label="Password" type="password" />
            <Input label="Retype Password" type="password" />

            <div className="row">
              <Button
                label="previous"
                to="/signup"
                variant="secondary--outline"
              />
              <Button
                label="next"
                to="/signup/individual/2"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpOne;
