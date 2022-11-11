import Tab from "../tab";
import { Input, Button } from "components";
import { HiFilter, HiSearch } from "react-icons/hi";

const LoanHistoryTab = () => {
  return (
    <div className="tab-content">
      <div className="search">
        <div className="search-button">
          <HiFilter className="filter-icon" />
          <Button label="Filter" variant="secondary--outline" />
        </div>
        <div className="search-box">
          <HiSearch className="search-icon" />
          <Input label="" type="search" placeholder="Search by loan type" />
        </div>
      </div>
      <Tab />
    </div>
  );
};

export default LoanHistoryTab;
