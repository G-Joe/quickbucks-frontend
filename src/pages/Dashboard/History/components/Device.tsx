const Device = ({ img, name, id, label, labelVariant, onClick }: any) => {
  return (
    <div className="device" onClick={onClick}>
      <img src={img} alt="phone1Img" />
      <p className="device-title">{name} </p>
      <p className="device-trans-id">
        Trans ID: <span>{id}</span>
      </p>
      <div className={`device-bg ${labelVariant}`}>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Device;
