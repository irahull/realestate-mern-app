import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/AppContext";

const Navbar = () => {
  const [navToggle, setnavToggle] = useState(false);
  const navigate = useNavigate();
  const {currentUser}= useContext(Context);
  return (
    <nav className="navbar-main">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="" className="main-logo" />
          <span>RealState</span>
        </Link>
        <div className="nav-menu">
          {/* <div className="nav-item">Home</div> */}
          <Link to="/list" className="nav-item">
            Properties
          </Link>
          {/* <div className="nav-item">Services</div> */}
          <div className="nav-item">Contact</div>
        </div>
      </div>
      <div className="nav-right">
        {currentUser ? (
          <div className="userInfo">
            <img src={currentUser.avatar || "/avatar.png"} alt="" />
            <b>{currentUser.username}</b>
            <div className="profileBtn">
              <span>3</span>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </div>
          </div>
        ) : (
          <div className="nav-button">
            <button onClick={() => navigate("/register")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}

        <div className="nav-icon" onClick={() => setnavToggle((p) => !p)}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={!navToggle ? "mobile-menu" : " mobile-menu active"}>
          <Link to="#" className="mobile-item">
            Home
          </Link>
          <Link to="#" className="mobile-item">
          Properties
          </Link>
          <Link to="#" className="mobile-item">
            Services
          </Link>
          <Link to="#" className="mobile-item">
            Contact
          </Link>
          <Link to="#" className="mobile-item">
            Sign Up
          </Link>
          <Link to="#" className="mobile-item">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
