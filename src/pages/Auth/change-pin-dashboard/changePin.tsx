import Input from "components/shared/Input/Input";
import Button from "components/shared/Button/Button";
import SettingsImg from "assets/settings-dashboard.svg";
import "styles/index.scss";

const ChangePin = () => {
  return (
    <div className="Settings">
      <div className="form-wrapper">
        <form className="form">
          <Input label="Old PIN" type="password" secure />
          <Input label="New PIN" type="password" secure />
          <Input label="Confirm PIN" type="password" secure />
          <Button to="#" label="submit" variant="primary" />
        </form>
      </div>
    </div>
  );
};

export default ChangePin;
