import { useState } from "react";
import { Input } from "components";
import SearchImg from "assets/search2.png";
import FilterImg from "assets/filter2.png";

import phone1Img from "assets/image 4 (1).png";
import phone2Img from "assets/image 4.png";
import phone3Img from "assets/image_10.png";
import Device from "./Device";
import PendingPickup from "./DeviceStatuses/PendingPickup";
import Outstanding from "./DeviceStatuses/Outstanding";

const DeviceFinanceTab = () => {
  const [deviceStatusPage, setDeviceStatusPage] = useState("");

  const handleDeviceClicked = (label: string) => {
    setDeviceStatusPage(label);
  };

  const renderDeviceStatusPage = (status: any) => {
    const statuses: any = {
      pending_pickup: (
        <PendingPickup
          img={phone1Img}
          setDeviceStatusPage={setDeviceStatusPage}
        />
      ),
      outstanding: (
        <Outstanding
          img={phone1Img}
          setDeviceStatusPage={setDeviceStatusPage}
        />
      ),
    };
    return statuses[status];
  };
  return (
    <>
      <div className="dev-finance">
        {!deviceStatusPage && (
          <>
            <div className="search-box">
              <div className="search">
                <div className="search-icon">
                  <img src={SearchImg} alt="search-icon" />
                </div>
                <Input label="" placeholder="Search For Device" type="text" />
                <div className="filter-icon">
                  <img src={FilterImg} alt="filter-icon" />
                </div>
              </div>
            </div>
            <div className="grid-row">
              <Device
                img={phone1Img}
                name="Samsung A23"
                id="296746"
                label="Outstanding"
                labelVariant="blue"
                onClick={() => handleDeviceClicked("outstanding")}
              />
              <Device
                img={phone2Img}
                name="Apple iPhone X"
                id="296746"
                label="Pending Pickup"
                labelVariant="yellow"
                onClick={() => handleDeviceClicked("pending_pickup")}
              />
              <Device
                img={phone3Img}
                name="Samsung Galaxy A23"
                id="296746"
                label="Disbursed"
                labelVariant="green"
              />
              <Device
                img={phone2Img}
                name="Xiaomi Note 10s"
                id="296746"
                label="Canceled"
                labelVariant="red"
              />
              <Device
                img={phone1Img}
                name="Tecno Spark"
                id="296746"
                label="Expired"
                labelVariant="grey"
              />
            </div>
          </>
        )}
        {renderDeviceStatusPage(deviceStatusPage)}
      </div>
    </>
  );
};

export default DeviceFinanceTab;
