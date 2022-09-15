import appleImg from "assets/App Store Badge US Black.svg";
import androidImg from "assets/Google Play Badge US.svg";
import "./MobileAppBox.scss";

const MobileAppBox = () => {
  return (
    <div className="mobile-wrapper">
      <a
        target="_blank"
        href="https://apps.apple.com/us/app/quickbucks/id1423259718"
        rel="noreferrer"
      >
        <img className="apple-img" src={appleImg} alt="apple-img" />
      </a>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.accessbankplc.quickbucks&hl=en&gl=US"
        rel="noreferrer"
      >
        <img className="android-img" src={androidImg} alt="android-img" />
      </a>
    </div>
  );
};

export default MobileAppBox;
