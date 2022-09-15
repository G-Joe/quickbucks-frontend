import { Link } from "react-router-dom";
import "./Button.scss";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  to: string;
  variant?: "primary" | "disabled" | "secondary" | "secondary--outline";
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { label, type = "submit", to, variant = "disabled", disabled } = props;

  const BTN_BG = disabled ? "disabled" : variant;

  return (
    <Link to={to}>
      <button {...props} type={type} className={`btn btn-${BTN_BG}`}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
