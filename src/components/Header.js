import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src= {LOGO_URL}
        alt="Logo"
      />

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Header;