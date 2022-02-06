// import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ title, setPassword, setEmail, handleAction }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAction();
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>{title}</h1>

        <form>
          <h3>E-mail</h3>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />

          <h3>Password</h3>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            type="submit"
            style={
              title === "Login"
                ? { backgroundColor: "rgb(13, 151, 243)" }
                : { backgroundColor: " rgb(64, 226, 24) " }
            }
            className="login__signInButton"
          >
            {title}
          </button>

          {title === "Login" ? (
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
