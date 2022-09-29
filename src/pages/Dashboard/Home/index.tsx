import React from "react";
import Greeting from "../../../components/Dashboard/Home/Greeting";
import Summary from "../../../components/Dashboard/Home/account-summary";

const Home = () => {
  return (
    <div>
      <Greeting />
      <Summary />
      <div className="products-section">
        <h2>My Products</h2>
        <div className="products-wrapper">
          <div className="product"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
