import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "assets/Frame 20.png";
import flagImg from "assets/Frame 12.svg";
import rect1Img from "assets/Rectangle 4.svg";
import rect2Img from "assets/Rectangle 4 copy.svg";
import buildingImg from "assets/Vector (1).svg";
import userImg from "assets/Vector.svg";
import LeftPane from "components/Auth/LeftPane/LeftPane";
import Button from "components/shared/Button/Button";
import Box from "components/Auth/Box/Box";
import MobileAppBox from "components/Auth/MobileAppBox/MobileAppBox";

const SelectCustomerType = () => {
  const [box, setBox] = useState(0);

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
            <Box
              id={1}
              box={box}
              onClick={() => setBox(1)}
              boxIcon={userImg}
              label="Individual"
            />
            <Box
              id={2}
              box={box}
              onClick={() => setBox(2)}
              boxIcon={buildingImg}
              label="Corporate /SME"
            />

            <Button
              label="Proceed"
              to="/signup/individual/1"
              variant={box === 0 ? "disabled" : "primary"}
              disabled={box === 0}
            />
            <p className="signup signup-new">
              Already a user? &nbsp;
              <Link className="signup signup-main" to="/login">
                Sign In
              </Link>
            </p>
            <MobileAppBox />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectCustomerType;
