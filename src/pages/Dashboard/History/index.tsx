import historyLogo from "assets/history.svg"
import Header from "components/Dashboard/Header/Header";
import Tab from "./tab";





const History = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={historyLogo} title="History" />
      </div>
      <div>
        <Tab/>
      </div>
      
    </>
  );
};

export default History;
