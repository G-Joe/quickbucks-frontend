import "./Input.scss";

type InputProps = {
  label: string;
  children: React.ReactNode;
};

const Select = (props: InputProps) => {
  const { label, children } = props;
  return (
    <div className="form-group">
      <label className="capitalize">{label}</label>
      <div className="input-wrapper">
        <select>{children}</select>
      </div>
    </div>
  );
};

export default Select;
