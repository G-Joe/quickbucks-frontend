import "./Input.scss";

type InputProps = {
  label: string;
  children: React.ReactNode;
  style?: any;
};

const Select = (props: InputProps) => {
  const { label, children, style } = props;
  return (
    <div className="form-group" style={style}>
      <label className="capitalize">{label}</label>
      <div className="input-wrapper">
        <select>{children}</select>
      </div>
    </div>
  );
};

export default Select;
