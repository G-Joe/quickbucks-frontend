import LeftPaneElements from "components/Auth/LeftPaneElements/LeftPaneElements";
import Dots from "components/shared/Dots/Dots";

const SignInOne = () => {
  return (
    <div className="auth-wrapper">
      <div className="pane pane-left">
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
      </div>
      <div className="pane pane-right"></div>
    </div>
  );
};

export default SignInOne;
