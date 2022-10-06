import "./ComingCard.scss";

const ComingCard = ({ img, title }: any) => {
  return (
    <div className="coming-card">
      <img src={img} alt="coming4Image" />
      <h4>{title}</h4>
      <p>Coming soon</p>
    </div>
  );
};

export default ComingCard;
