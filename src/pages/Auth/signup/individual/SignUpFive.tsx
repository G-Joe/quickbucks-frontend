import logoImg from "assets/Frame 20.png";
import flagImg from "assets/Frame 12.svg";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import Select from "components/shared/Input/Select";

const SignUpFive = () => {
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
            <p className="onetime-text">Employment details</p>
            <Input label="Place of employment" type="text" />
            <Select label="Type of contact">
              <option value="">Contract 1</option>
              <option value="">Contract 2</option>
            </Select>
            <Select label="Duration of employment">
              <option value="">3 months</option>
              <option value="">6 months</option>
              <option value="">1 year</option>
            </Select>
            <Input label="Salary Account number" type="text" />
            <Input label="Monthly salary" type="text" />

            <div className="row">
              <Button
                label="previous"
                to="/signup/individual/4"
                variant="secondary--outline"
              />
              <Button
                label="next"
                to="/signup/individual/t&c"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFive;
