import { Progress } from "antd";

import "./ProductCard.scss";

const ProductCard1 = ({
  loanType,
  loanAmount,
  loanImg,
  loanTenor,
  loanRemain,
  dateTaken,
  dateDue,
}: any) => {
  return (
    <div className="product">
      <div className="product-top-section">
        <div className="left-section">
          <h4>{loanType}</h4>
          <div className="amount-main-wrapper">
            <div className="amount-main-status"></div>
            <p>{loanAmount}</p>
          </div>
        </div>
        <div className="right-section">
          <img src={loanImg} alt="loanBankImg" />
        </div>
      </div>
      <div className="product-bottom-section">
        <p>
          Your tenor is: <b className="text-black">{loanTenor}</b>
        </p>
        <p>
          You can still take: <b className="text-yellow">{loanRemain}</b>
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
              Date Taken: <b>{dateTaken}</b>
            </p>
          </div>
          <div className="date">
            <div className="date-status"></div>
            <p>
              Date Due: <b>{dateDue}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
