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

const SignInOne = () => {
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
          <p className="signin-text">
            Sign in to continue meeting your your urgent needs
          </p>
          <form className="form">
            <Input label="Username" type="text" />
            <Input label="Password" type="password" />
            <Link className="forgot-password" to="/forgot-password">
              Forgot password?
            </Link>
            <Button label="login" to="/!#" variant="primary" />
            <p className="signup signup-new">
              New user? &nbsp;
              <Link className="signup signup-main" to="/signup">
                Sign Up
              </Link>
            </p>
            <div className="mobile-wrapper">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/quickbucks/id1423259718"
              >
                <img className="apple-img" src={appleImg} alt="apple-img" />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.accessbankplc.quickbucks&hl=en&gl=US"
              >
                <img
                  className="android-img"
                  src={androidImg}
                  alt="android-img"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInOne;
