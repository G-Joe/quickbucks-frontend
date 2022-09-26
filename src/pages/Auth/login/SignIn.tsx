import { Link } from "react-router-dom";
import {logoImg, rect1Img, rect2Img} from "assets";
import { Button, Input, LeftPane, MobileAppBox, FlagSelect } from "components";



const SignIn = () => {
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
          <p className="signin-text">
            Sign in to continue meeting your your urgent needs
          </p>
          <form className="form">
            <Input label="Username" type="text" />
            <Input label="Password" type="password" secure />
            <Link className="forgot-password" to="/forgot-password/1">
              Forgot password?
            </Link>
            <Button to="/home" label="login" variant="primary" />
            <p className="signup signup-new">
              New user? &nbsp;
              <Link className="signup signup-main" to="/signup">
                Sign Up
              </Link>
            </p>
            <MobileAppBox />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
