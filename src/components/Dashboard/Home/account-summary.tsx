import AccountSum from "./account-sum";
import "./index.css";
import Button from "components/shared/Button/Button";


const Summary = () => {
  return (
    <div className="summary">
      {AccountSum.map((item) => (
        <div className={`summary-box ${item.classname}`}>
          <div className="title">{item.title}</div>
          <div className="value">{item.value}</div>
          <div className="butt">{item.link && <Button 
              label={item.buttonLabel} 
              variant="primary"
              size="lg"
          />}
          </div>
          <div className="status">{item.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
