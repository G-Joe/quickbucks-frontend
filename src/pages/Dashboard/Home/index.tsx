import Greeting from "../../../components/Dashboard/Home/Greeting";
import Summary from "../../../components/Dashboard/Home/account-summary";

import devicesImg from "assets/devices.svg";
import ticketsImg from "assets/tickets2.svg";
import loanBankImg from "assets/Group copy.svg";
import salaryImg from "assets/salary-svgrepo-com 1.svg";
import ProductCard from "components/Dashboard/Cards/ProductCard/ProductCard";

const Home = () => {
  return (
    <div>
      <div className="main-fit">
        <Greeting />
        <Summary />
      </div>
      <div className="main-fluid">
        <div className="products-section">
          <h2>My Active Loans</h2>
          <div className="products-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
