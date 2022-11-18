import { Link } from "react-router-dom";
import "./Button.scss";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  to?: string;
  variant?:
    | "primary"
    | "disabled"
    | "secondary"
    | "secondary--outline"
    | "text";
  disabled?: boolean;
  onClick?: () => void;
  size?: "lg" | "md";
  style?: any;
  state?: any;
};

const Button = (props: ButtonProps) => {
  const {
    label,
    type = "submit",
    to,
    variant = "disabled",
    disabled,
    size = "lg",
    state,
  } = props;

  const BTN_BG = disabled ? "disabled" : variant;

  return (
    <Link to={to || ""} state={state}>
      <button
        {...props}
        type={type}
        className={`btn btn-${size} btn-${BTN_BG} `}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
