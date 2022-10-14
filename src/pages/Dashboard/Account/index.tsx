import React from "react";
import accountLogo from "assets/account.svg"
import Header from "components/Dashboard/Header/Header";

const Account = () => {
  return (
    <div>
       <div className="main-fit">
        <Header img={accountLogo} title="Account" />
      </div>
      
    </div>
  );
};

export default Account;
