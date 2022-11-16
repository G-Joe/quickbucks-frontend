
import { Button } from "components";

const Expired = ({ img, setDeviceStatusPage }: any) => {
  return (
    <>
      <div className="ordered-device">
        <div className="card">
          <div className="device-details">
            <div className="device-wrapper">
              <img src={img} alt="device-img" />
            </div>
            <div className="device-info">
              <h4>Samsung S7</h4>
              <p>Front Camera: 12MP</p>
              <p>Rear Camera: 12MP</p>
              <p>Single Sim</p>
            </div>
          </div>
          
          <div className="pay-plan card">
            <div className="pay-plan-row">
              <p>Monthly Repayment to Bank</p>
              <span>N105,150</span>
            </div>
            <hr />
            <div className="pay-plan-row">
              <p>Monthly Airtime Credit</p>
              <span>N3500.00</span>
            </div>
            <hr />
            <div className="pay-plan-row">
              <p>Tenor</p>
              <span>12 Months</span>
            </div>
          </div>

          <p className="req-date expired">Request date: November 20,2019-01:00PM</p>

          <Button label="View Pickup Instruction" variant="disabled" />

          <p className="req-date expired">Your Require Has Exceeded 72hours</p>

          <Button label="Home" variant="primary" />
        </div>
      </div>
      
    </>
  );
};

export default Expired;
