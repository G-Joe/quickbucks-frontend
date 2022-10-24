import eyeImg from "assets/Group.svg";
import eyeHideImg from "assets/eye-hide-svgrepo-com 1.svg";
import { useState } from "react";
import "./Input.scss";

type InputProps = {
  label: string;
  type: any;
  placeholder?: string;
  toggleVisibility?: () => void;
  secure?: boolean;
  required?:boolean
value?:string
onChange?:any
};

const Input = (props: InputProps) => {
  const [visible, setVisible] = useState(false);

  const { label, type, secure,required, value, onChange } = props;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const setInputType = () => {
    let inputType = type;
    if (secure) {
      if (visible) {
        inputType = "text";
      }
    }
    return inputType;
  };

  return (
    <div className="form-group">
      <label className="capitalize">{label}</label>
      <div className="input-wrapper">
        {secure && (
          <img
            onClick={toggleVisibility}
            className="vector-img"
            src={visible ? eyeImg : eyeHideImg}
            alt="vector-img"
          />
        )}
        <input {...props} type={setInputType()} required={required} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Input;
