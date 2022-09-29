import AccountSum from "./account-sum";
import "./index.css";

const Summary = () => {
  return (
    <div className="summary">
      {AccountSum.map((item) => (
        <div className={`summary-box ${item.classname}`}>
          <div className="title">{item.title}</div>
          <div className="value">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
