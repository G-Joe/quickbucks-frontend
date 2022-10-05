import Button from "components/shared/Button/Button";

import "./ProductCard.scss";

const ProductCard2 = ({ productType, loanAmount, loanImg, loanTenor }: any) => {
  return (
    <div className="product">
      <div className="product-top-section">
        <div className="left-2-section">
          <h4>{productType}</h4>
          <p>
            Meet your personal <br /> needs with loans up to <b>{loanAmount}</b>
            <br />
            and repay over <b>{loanTenor}</b>
          </p>
          <div className="btn-wrapper">
            <Button label="Apply" variant="primary" size="md" />
          </div>
        </div>
        <div className="right-section">
          <img src={loanImg} alt="loanBankImg" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
