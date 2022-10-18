import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";

const MyDetails = () => {
  return (
    <div>
      <div className="main-fit">
        <Header img={accountLogo} title="My Details" />
      </div>
    </div>
  );
};

export default MyDetails;
