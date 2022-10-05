import headerLogo from "assets/cash-money.svg";
import { Input } from "components";

const Loans = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo-wrapper">
          <img src={headerLogo} alt="headerLogo" />
        </div>
        <h3>My Loans</h3>
      </div>

      <div className="loan-card">
        <div className="loan-card-contain">
          <div className="eligible-card">
            <div className="eligible-card-content">
              <p>Eligible Amount</p>
              <h4>N92,000.00</h4>
            </div>
            <div className="eligible-card-content">
              <p>Tenor</p>
              <h4>N92,000.00</h4>
            </div>
          </div>

          <p>Enter amount less than N92,000.00</p>

          <Input label="Amount" type="text" />

          <div className="eligible-card">
            <div className="content">
              <p>
                Repayment Amount: <br />
                (Amount you will need to repay on due)
              </p>
              <p>N105,150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
