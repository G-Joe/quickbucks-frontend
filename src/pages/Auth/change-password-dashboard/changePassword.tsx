import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import SettingsImg from "assets/settings-dashboard.svg";
import "styles/index.scss";

const ChangePassword = () => {
  return (
    <div className="Settings">
      <div className="form-wrapper">
        <form className="form">
          <Input label="Old Password" type="password" secure />
          <Input label="New Password" type="password" secure />
          <Input label="Confirm Password" type="password" secure />
          <Button to="#" label="submit" variant="primary" />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
