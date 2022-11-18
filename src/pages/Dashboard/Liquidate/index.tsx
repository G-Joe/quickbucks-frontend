import headerLogo from "assets/liquidate-card.svg";
import Header from "components/Dashboard/Header/Header";
import Table from "pages/Dashboard/Liquidate/table";
import MobileTab from "./mobile-tab";
import { Input, Button } from "components";
import "./table.scss";
import { HiFilter, HiSearch } from "react-icons/hi";

const Liquidate = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={headerLogo} title="Liquidate" />
      </div>
      <div className="table-content">
        <div className="search">
          <div className="search-button">
            <HiFilter  className="search-icon" />
            <Button label="Filter" variant="secondary--outline" />
          </div>
          <div className="search-box">
            <HiSearch className="search-icon" />
            <Input label="" type="search" placeholder="Search by loan type" />
          </div>
        </div>
        <div className="table">
           <Table />
        </div>
       
      </div>
      <div className="mobile-table">
        <h3>S/N</h3>
        <MobileTab/>
      </div>
    </>
  );
};

export default Liquidate;
