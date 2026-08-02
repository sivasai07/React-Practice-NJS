import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
        alt="Logo"
      />

      <ul className="nav-items">
        <li>
          Online Status:{" "}
          <span style={{ color: isOnline ? "green" : "red", fontWeight: "bold" }}>
            {isOnline ? "🟢" : "🔴"}
          </span>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>Cart</li>
        <li>Profile</li>

        <button
          className="login"
          onClick={() =>
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;