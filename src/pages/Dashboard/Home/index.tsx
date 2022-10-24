import Greeting from "components/Dashboard/Home/Greeting";
import Summary from "components/Dashboard/Home/account-summary";
import ProductCard1 from "components/Dashboard/Cards/ProductCard/ProductCard1";
import ProductCard2 from "components/Dashboard/Cards/ProductCard/ProductCard2";
import ComingCard from "components/Dashboard/Cards/ComingCard/ComingCard";
import Dots from "components/shared/Dots/Dots";

import devicesImg from "assets/device.svg";
import ticketsImg from "assets/ticket.svg";
import loanBankImg from "assets/Group copy.svg";
import salaryImg from "assets/salary-svgrepo-com 1.svg";
import cashBackImg from "assets/cash back.svg";
import homeBgImage from "assets/Screenshot (4) (1).png";
import coming1Image from "assets/Vector (1) copy.svg";
import coming2Image from "assets/Vector (2) copy.svg";
import coming3Image from "assets/Vector (3).svg";
import coming4Image from "assets/Vector copy 3.svg";

import "./index.scss";

const Home = () => {
  return (
    <>
      <div className="main-fit">
        <Greeting />
        <Summary />
      </div>
      <div className="main-fluid">
        <div className="products-section">
          <h2>My Active Loans</h2>
          <div className="products-wrapper">
            <ProductCard1
              loanType="PayDay Loan"
              loanAmount="N50,000.00"
              loanImg={loanBankImg}
              loanTenor="1 month"
              loanRemain="N62,000"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
            />
            <ProductCard1
              loanType="Salary Advance"
              loanAmount="N100,000.00"
              loanImg={salaryImg}
              loanTenor="2 months"
              loanRemain="N137,460"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
            />
            <ProductCard1
              loanType="Device Finance"
              loanAmount="N200,000.00"
              loanImg={devicesImg}
              loanTenor="3 months"
              loanRemain="N300,000"
              dateTaken="2/2/2022"
              dateDue="2/5/022"
            />
            <ProductCard1
              loanType="Small Ticket Personal Loan"
              loanAmount="N300,000.00"
              loanImg={ticketsImg}
              loanTenor="12 months"
              loanRemain="N139,000"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
            />
          </div>
        </div>
        <div className="products-section">
          <h2>My Products</h2>
          <div className="products-wrapper">
            <ProductCard2
              productType="PayDay Loan"
              loanAmount="N50,000.00"
              loanImg={loanBankImg}
              loanTenor="1 month"
              loanRemain="N62,000"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
              textLine1="Meet your personal"
              textLine2="needs with loans up to"
            />
            <ProductCard2
              productType="Salary Advance"
              loanAmount="N100,000.00"
              loanImg={salaryImg}
              loanTenor="2 months"
              loanRemain="N137,460"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
              textLine1="Meet your personal"
              textLine2="needs with loans up to"
            />
            <ProductCard2
              productType="Small Ticket Personal Loan"
              loanAmount="N200,000.00"
              loanImg={devicesImg}
              loanTenor="3 months"
              loanRemain="N300,000"
              dateTaken="2/2/2022"
              dateDue="2/5/022"
              textLine1="Meet your personal"
              textLine2="needs with loans up to"
            />
            <ProductCard2
              productType="Device Finance"
              loanAmount="N300,000.00"
              loanImg={ticketsImg}
              loanTenor="12 months"
              loanRemain="N139,000"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
              textLine1="Meet your personal"
              textLine2="needs with loans up to"
            />
            <ProductCard2
              productType="Cash backed loan"
              loanAmount="N112,000.00"
              loanImg={cashBackImg}
              loanTenor="1 month"
              loanRemain="N139,000"
              dateTaken="2/2/2022"
              dateDue="2/3/022"
              textLine1="Meet your personal"
              textLine2="needs with loans up to"
            />
          </div>
        </div>
      </div>
      <div className="main-fit">
        <div className="home-bg">
          <img src={homeBgImage} alt="homeBgImage" />
        </div>
        <div className="dots-cover">
          <Dots />
        </div>
        <div className="coming-wrapper">
          <h3>Coming soon</h3>

          <div className="coming-cover">
            <ComingCard img={coming4Image} title="Household Goods Finance" />
            <ComingCard img={coming1Image} title="Energy Financing" />
            <ComingCard img={coming2Image} title="Vehicle Finance" />
            <ComingCard img={coming3Image} title="Mortgage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
