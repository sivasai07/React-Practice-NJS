import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login"); 
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
            <button
            className="login"
            onClick={
                () => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    console.log({btnName});
                }
            }>
            {btnName}
            </button>
        </ul>
        </div>
    );
};

export default Header;