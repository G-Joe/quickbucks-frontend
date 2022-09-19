import eyeImg from "assets/Group.svg";
import eyeHideImg from "assets/eye-hide-svgrepo-com 1.svg";
import { useState } from "react";
import "./Input.scss";

type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  toggleVisibility?: () => void;
};

const Input = (props: InputProps) => {
  const [visible, setVisible] = useState(false);

  const { label, type } = props;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="form-group">
      <label className="capitalize">{label}</label>
      <div className="input-wrapper">
        {type === "password" && (
          <img
            onClick={toggleVisibility}
            className="vector-img"
            src={visible ? eyeImg : eyeHideImg}
            alt="vector-img"
          />
        )}
        <input
          {...props}
          type={type === "password" && visible ? "text" : "password"}
        />
      </div>
    </div>
  );
};

export default Input;
