import headerLogo from "assets/liquidate-card.svg";
import Header from "components/Dashboard/Header/Header";
import Table from "pages/Dashboard/Liquidate/table";
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
            <HiFilter />
            <Button label="Filter" variant="secondary--outline" />
          </div>
          <div className="search-box">
            <HiSearch />
            <Input label="" type="search" placeholder="Search by loan type" />
          </div>
        </div>
        <Table />
      </div>
    </>
  );
};

export default Liquidate;
