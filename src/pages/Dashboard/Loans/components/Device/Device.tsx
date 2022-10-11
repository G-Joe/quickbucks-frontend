import "./Device.scss";

const Device = ({ img, name, amount, specs, noStock }: any) => {
  return (
    <div className="device">
      <img src={img} alt="phone3Img" />
      <div className="device-info">
        <h4 className="device-info-header">{name}</h4>
        <div className="device-info-body">
          <div className="device-info-body-1">
            {specs.map((spec: any) => (
              <p>{spec} </p>
            ))}
          </div>
          <div className="device-info-body-2">
            <p>
              From: <br />
              {amount} per month
            </p>
          </div>
        </div>
      </div>
      {noStock && <div className="stock-tag">Out of Stock</div>}
    </div>
  );
};

export default Device;
