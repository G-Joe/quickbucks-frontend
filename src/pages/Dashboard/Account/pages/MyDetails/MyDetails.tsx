import { useState } from "react";
import { Steps } from "antd";
import accountLogo from "assets/account.svg";
import Header from "components/Dashboard/Header/Header";

import "./MyDetails.scss";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";
import UploadDocuments from "./pages/UploadDocuments";

const MyDetails = () => {
  const [current, setCurrent] = useState(0);

  const { Step } = Steps;

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "View employment details",
      content: <ViewEmployee />,
    },
    {
      title: "Edit details",
      content: <EditEmployee next={next} prev={prev} />,
    },
    {
      title: "Upload documents",
      content: <UploadDocuments next={next} prev={prev} />,
    },
  ];

  return (
    <div>
      <div className="main-fit">
        <Header img={accountLogo} title="My Details" />
        <div className="my-details">
          <Steps size="small" current={current} onChange={onChange}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div>{steps[current].content}</div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
