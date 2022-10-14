import { Button } from "components";

const SalaryAdvance = ({ onClick }: any) => {
  return (
    <div className="right-panel">
      <h3>Total cost to customer</h3>
      <div className="card card--blue card--lg">
        <div className="wrapper">
          <div className="repayment-details">
            <div className="repayment-details-row">
              <p>Total repayment </p>
              <span>N107, 850</span>
            </div>
            <hr />
            <p className="annual-rate">
              Annual percentage Rate (JUN) <span>22.8%</span>. this reflects the
              total cost of the credits on a yearly basis expressed as
              percentage, using the information of the disclosure date it is{" "}
            </p>
          </div>
        </div>
      </div>
      <h3>Specific information about your Salary Advance loan</h3>
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
              <span>1.9% on reducing</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Total Interest charges <br />
                ( Total interest you will pay): <br />( variable interest rate
                may change)
              </p>
              <span> N6,650</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Total Cost of Credit: <br />( Total other charges will pay{" "}
                <br />
                throughout the duration of loan)
              </p>
              <span>N1,200</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Total Cost of Credit: <br />( This is made up of total interest
                and others)
              </p>
              <span>N7,850</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>
                Repayment Amount: <br />
                (Amount you will need to repay on due)
              </p>
            </div>
            <br />
            <div className="repayment-details-row mb-5">
              <p>UpFront</p>
              <span>N1,200</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 1</p>
              <span>N18,566.67</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 2</p>
              <span>N18,250.00</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 3</p>
              <span>N17,933.33</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 4</p>
              <span>N17,617.67</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 5</p>
              <span>N17,300.00</span>
            </div>
            <div className="repayment-details-row mb-5">
              <p>Month 6</p>
              <span>N16,983.33</span>
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
              <span>Anniversary date</span>
            </div>
            <hr />
            <div className="repayment-details-row">
              <p>Total Number of Repayment</p>
              <span>6</span>
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

export default SalaryAdvance;
