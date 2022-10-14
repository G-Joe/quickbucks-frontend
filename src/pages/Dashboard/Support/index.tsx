import { Tabs, Collapse } from "antd";
import Header from "components/Dashboard/Header/Header";
import headerLogo from "assets/cash-money.svg";

const Support = () => {
  return (
    <>
      <div className="main-fit">
        <Header img={headerLogo} title="Support" />

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Payday Loan",
              key: "1",
              children: <SupportTab />,
            },
            {
              label: "Salary Advance Loan",
              key: "2",
              children: <SupportTab />,
            },
            {
              label: "Device Finance Loan",
              key: "3",
              children: <SupportTab />,
            },
            {
              label: "Small Ticket Personal Loan",
              key: "4",
              children: <SupportTab />,
            },
          ]}
        ></Tabs>
      </div>
    </>
  );
};

const SupportTab = () => {
  const { Panel } = Collapse;

  const text = `
  Lorem ipsum dolor sit amet 
  consectetur adipisicing elit. 
  Corporis, perspiciatis, sed at 
  repellendus autem harum consectetur
   non id accusamus eum voluptatem eos.
    Earum placeat ipsa obcaecati libero 
    ullam similique debitis!
  Ducimus, maiores provident laborum 
  reiciendis dolor amet vitae nisi praesentium.
`;
  return (
    <div>
      <Collapse accordion expandIconPosition="right" className="collapse">
        <Panel header="What is Payday Loan" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="How does Payday Loan work" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="How do i Liquidate" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="What is Payday Loan" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="How does Payday Loan work" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="How do i Liquidate" key="6">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Support;
