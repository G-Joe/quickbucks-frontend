import { Button } from "components";

const Payday = ({ onClick }: any) => {
  return (
    <div className="right-panel">
      <h3>Total cost to customer</h3>
      <div className="card card--blue card--lg">
        <div className="wrapper">
          <div className="repayment-details">
            <div className="repayment-details-row">
              <p>Total repayment </p>
              <span>
                30 days or next salary date <br /> (whichever comes first)
              </span>
            </div>
            <hr />
            <p className="pay-back">
              This means you will pay back <span>N5.15</span> kobo for every{" "}
              <span>N1,000</span> borrowed
            </p>
            <hr />
            <p className="annual-rate">
              Annual percentage Rate (APR) <span>48%</span>. this reflects the
              total cost of the credits on a yearly basis expressed as
              percentage, using the information of the disclosure date it is{" "}
            </p>
          </div>
        </div>
      </div>
      <h3>Specific information about your Payday loan</h3>
      <div className="card card--blue card--lg">
        <div className="wrapper">
          <div className="repayment-details">
            <div className="repayment-details-row">
              <p>Loan Received</p>
              <span>N100,000</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Interest rate:
                <br />( variable interest rate may change)
              </p>
              <span>4% flat</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Total Interest charges <br />
                ( Total interest you will pay): <br />( variable interest rate
                may change)
              </p>
              <span> N4,000</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Total Cost of Credit: <br />( This is made up of total interest
                and others)
              </p>
              <span>N5,150</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Repayment Amount: <br />
                (Amount you will need to repay on due)
              </p>
              <span>N105,150</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Date of Repayment <br />
                Next salary payment or 30days after loan
              </p>
              <span></span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>Date on which other</p>
              <span>N/A</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>Total Number of Repayment</p>
              <span>1</span>
            </div>
            <hr />
            <div className="btn-wrapper">
              <Button
                label="Email Offer Letter"
                variant="primary"
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payday;
