import "./Header.scss";

const Header = ({ img, title }: any) => {
  return (
    <div className="header">
      <div className="header-logo-wrapper">
        <img src={img} alt="headerLogo" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
