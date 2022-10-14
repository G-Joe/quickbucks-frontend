import { Tabs } from "antd";
import ChangePin from "pages/Auth/change-pin-dashboard/changePin";
import ChangePassword from "pages/Auth/change-password-dashboard/changePassword";
import headerLogo from "assets/cash-money.svg";
import Header from "components/Dashboard/Header/Header";

const Settings = () => {
  return (
    <div className="main-fit">
      <Header img={headerLogo} title="Settings" />

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Change Pin",
            key: "1",
            children: <ChangePin />,
          },
          {
            label: "Change Password",
            key: "2",
            children: <ChangePassword />,
          },
        ]}
      ></Tabs>
    </div>
  );
};

export default Settings;
