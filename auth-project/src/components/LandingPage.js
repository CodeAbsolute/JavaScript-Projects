import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="container">
      <div className="header">React Firebase Authentication Project</div>
      <div className="buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
