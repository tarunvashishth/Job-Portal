import React, { useState, useEffect } from "react";
import logo from "../images/MyJobs.png";
import arrow from "../images/Icon awesome-caret-down.svg";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const [isLogin, SetIsLogin] = useState(true);
  const [isDropdown, SetIsDropdown] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      SetIsLogin(false);
    }
  },);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav className="navbar">
        <img
          className="logo"
          src={logo}
          alt="MyJobs"
          onClick={() => navigate("/")}
        />
        {isLogin ? (
          <div className="user">
            <div className="logged-in">
              <img
                className="login-img"
                src={`https://ui-avatars.com/api/?name=${props.email}&length=1&rounded=true&background=d9efff&color=303f60`}
                alt="avatar"
              />
              <img
                className="arrow-btn"
                src={arrow}
                alt="arrow-btn"
                onClick={() => SetIsDropdown(!isDropdown)}
              />
            </div>
              {isDropdown && (
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              )}
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className="login">
            Login
          </button>
        )}
      </nav>
    </>
  );
}

export default Navbar;
