import { useState, useEffect } from "react";
import { CDN_LOGO_URL, LOGO_URL } from "../utils/constant";
import {Link} from "react-router-dom";
import mk from "../utils/constant";
const Header = () => {
  const [btnName, signInSignUpTrigger] = useState("Login");
  useEffect(() => {
    console.log("Header useEffect called");
  }, [btnName]);
  return (
    <div className="header-container">
      <div className="logo-container">
        {/* <img className="logo" src="./images/Namaste_Kitchen_Logo.png"/> */}
        <img className="logo" src={CDN_LOGO_URL} />
        {/* <img className="logo" src={LOGO_URL}/>
                {mk} */}
      </div>
      <div className="nav-items">
        <ul>
          
          
          
          <li><Link to="/">Home</Link></li>          
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login"
                ? signInSignUpTrigger("Logout")
                : signInSignUpTrigger("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
