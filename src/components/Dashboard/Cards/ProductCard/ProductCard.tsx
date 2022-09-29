import { Progress } from "antd";

import loanBankImg from "assets/Group copy.svg";

const ProductCard = () => {
  return (
    <div className="product">
      <div className="product-top-section">
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
      <div className="product-bottom-section">
        <p>
          Your tenor is: <b className="text-black">1 month</b>
        </p>
        <p>
          You can still take: <b className="text-yellow">N62,000</b>
        </p>
        <Progress
          percent={28}
          strokeColor="#1a6ad7"
          trailColor="#cddff8"
          showInfo={false}
        />
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
  );
};

export default ProductCard;
