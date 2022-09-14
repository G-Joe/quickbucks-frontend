import Dots from "components/shared/Dots/Dots";
import LeftPaneElements from "../LeftPaneElements/LeftPaneElements";
import "./LeftPane.scss";

const LeftPane = () => {
  return (
    <>
      <LeftPaneElements />
      <div className="quick-loan-section">
        <div className="content">
          <h2>Do you need a quick loan?</h2>
          <p>
            Let’s make life easier for you. Request for your salary in advance
            with payday Loan
          </p>
        </div>
      </div>
      <Dots />
    </>
  );
};

export default LeftPane;
