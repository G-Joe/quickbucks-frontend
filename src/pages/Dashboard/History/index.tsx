import historyLogo from "assets/history.svg"
import Header from "components/Dashboard/Header/Header";
import Tab from "./tab";
import { Input, Button } from "components";
import "./index.scss"





const History = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={historyLogo} title="History" />
      </div>
      <div className="tab-content">
        <div className="search">
          <div className="search-button">
            
            <Button label="Filter" variant="secondary--outline" />
          </div>
          <div className="search-box">
            
            <Input label="" type="search" placeholder="Search by loan type" />
          </div>
        </div>
            <Tab/>
      </div>
    </>
  );
};

export default History;
