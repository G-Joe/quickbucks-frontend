import Greeting from "../../../components/Dashboard/Home/Greeting";
import Summary from "../../../components/Dashboard/Home/account-summary";

import devicesImg from "assets/devices-svgrepo-com 1.svg";
import ticketsImg from "assets/tickets-ticket-svgrepo-com 2.svg";
import loanBankImg from "assets/Group copy.svg";
import salaryImg from "assets/salary-svgrepo-com 1.svg";

const Home = () => {
  return (
    <div>
      <Greeting />
      <Summary />
      <div className="products-section">
        <h2>My Active Loans</h2>
        <div className="products-wrapper">
          <div className="product">
            <div className="top-section">
              <div className="left-section">
                <h4>PayDay Loan</h4>
                <div className="amount-main-wrapper">
                  <div className="amount-main-status"></div>
                  <p>N500,000.00</p>
                </div>
              </div>
              <div className="right-section">
                <img src={loanBankImg} alt="loanBankImg" />
              </div>
            </div>
            <div className="bottom-section">
              <p>
                Your tenor is: <b className="">1 month</b>
              </p>
              <p>
                You can still take: <b className="text-yellow">N62,000</b>
              </p>
              <progress
                className="progress-bar"
                value="32"
                max="100"
              ></progress>
              <div className="date-wrapper">
                <div className="date">
                  <div className="date-status"></div>
                  <p>
                    Date Taken: <b>2/2/2022</b>
                  </p>
                </div>
                <div className="date">
                  <div className="date-status"></div>
                  <p>
                    Date Due: <b>2/3/2022</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
