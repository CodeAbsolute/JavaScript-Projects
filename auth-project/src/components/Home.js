import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    // console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  const HomeStyle = {
    backgroundColor: "#f5f5f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const LogoUt = {
    background: "red",
    width: "100px",
    height: " 30px",
    border: "1px",
    marginTop: "10px",
    cursor: "pointer",
  };
  return (
    <div style={HomeStyle}>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleLogout} style={LogoUt}>
        Log out
      </button>
    </div>
  );
}
