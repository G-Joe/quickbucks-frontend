import logoImg from "assets/Frame 20.png";
import flagImg from "assets/Frame 12.svg";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import Input from "components/shared/Input/Input";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import Select from "components/shared/Input/Select";

const SignUpThree = () => {
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
            <p className="onetime-text">
              Before you begin to enjoy instant <br /> loans we need just a few
              pieces
              <br /> of missing information
            </p>
            <Input
              label="Name"
              type="text"
              placeholder="Solomon Adebayo Abey"
            />
            <Input label="Date of birth" type="date" />
            <Select label="Gender">
              <option value="">Male</option>
              <option value="">Female</option>
            </Select>
            <Select label="State of residency">
              <option value="">Lagos</option>
              <option value="">Abuja</option>
              <option value="">Edo</option>
              <option value="">Ogun</option>
              <option value="">Ondo</option>
            </Select>
            <Input label="Residential address" type="text" />

            <div className="row">
              <Button
                label="previous"
                to="/signup/individual/2"
                variant="secondary--outline"
              />
              <Button
                label="next"
                to="/signup/individual/4"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpThree;
