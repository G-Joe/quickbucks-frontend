import logoImg from "assets/Frame 20.png";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import FlagSelect from "components/Auth/FlagSelect/FlagSelect";

const SignUpFour = () => {
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
              Create a 4-digit PIN for authorising <br /> your transaction each
              time you make <br /> a loan request or make a transaction
            </p>
            <Input label="PIN" type="password" secure />
            <Input label="Retype PIN" type="password" secure />

            <div className="row">
              <Button
                label="previous"
                to="/signup/individual/3"
                variant="secondary--outline"
              />
              <Button
                label="next"
                to="/signup/individual/5"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFour;
