import eyeImg from "assets/Group.svg";
import "./Input.scss";

type InputProps = {
  label: string;
  type: string;
};

const Input = (props: InputProps) => {
  const { label, type } = props;
  return (
    <div className="form-group">
      <label className="capitalize">{label}</label>
      <div className="input-wrapper">
        {type === "password" && (
          <img className="vector-img" src={eyeImg} alt="vector-img" />
        )}
        <input {...props} type={type} />
      </div>
    </div>
  );
};

export default Input;
