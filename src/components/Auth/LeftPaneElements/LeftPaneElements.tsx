import dotsImg from "assets/dots.svg";
import rectangle1Img from "assets/Rectangle 2.svg";
import ellipse1Img from "assets/Ellipse 1.svg";
import person1Img from "assets/images/Frame 648.svg";
import person2Img from "assets/images/Frame 649.svg";

import "./LeftPaneElements.scss";

const LeftPaneElements = () => {
  return (
    <div>
      <img className="dots-img" src={dotsImg} alt="dots-img" />

      <img
        className="person person-1-img"
        src={person1Img}
        alt="person-1-img"
      />
      <img
        className="person person-2-img"
        src={person2Img}
        alt="person-1-img"
      />
      <img
        className="rectangle-1-img"
        src={rectangle1Img}
        alt="rectangle-1-img"
      />
      <img className="ellipse-1-img" src={ellipse1Img} alt="ellipse-1-img" />
    </div>
  );
};

export default LeftPaneElements;
