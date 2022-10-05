import "./Benefit.scss";

const Benefit = ({ content }: any) => {
  return (
    <div className="benefit">
      <div className="benefit-point"></div>
      <p>{content}</p>
    </div>
  );
};

export default Benefit;
