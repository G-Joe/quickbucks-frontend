import cirleOutlineImg from "assets/Ellipse 19.svg";
import circleFilledImg from "assets/Vector (2).svg";
import "./Box.scss";

type BoxProps = {
  id: number;
  boxIcon: string;
  label: string;
  box: number;
  onClick: () => void;
};

const Box = ({ id, box, onClick, boxIcon, label }: BoxProps) => {
  return (
    <div
      onClick={onClick}
      className={`box-wrapper ${box === id && "box-wrapper--active"}`}
    >
      <div className="box">
        <div className="box box-left">
          <img className="user-img" src={boxIcon} alt="user-img" />
          <p>{label}</p>
        </div>
        <img
          className="circle-outline-img"
          src={box === id ? circleFilledImg : cirleOutlineImg}
          alt="circle-outline-img"
        />
      </div>
    </div>
  );
};

export default Box;
