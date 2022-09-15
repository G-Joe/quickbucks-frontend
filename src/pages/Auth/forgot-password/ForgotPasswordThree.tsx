import logoImg from "assets/Frame 20.png";
import flagImg from "assets/Frame 12.svg";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";

const ForgotPasswordThree = () => {
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
          <p className="onetime-text text-center">
            Please create a new password
          </p>
          <form className="form">
            <Input label="Password" type="password" />
            <Input label="Retype password" type="password" />

            <Button to="/login" label="submit" variant="primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordThree;
