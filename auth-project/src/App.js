import { useState, useEffect } from "react";

import LoginSignUp from "./components/LoginSignUp";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./components/LandingPage";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleAction = (id) => {
    console.log("inside handleAction", id);
    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          // console.log("response", response);
          setEmail("");
          setPassword("");
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          // console.log("response", response);
          setEmail("");
          setPassword("");
          navigate("/login");

          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          toast.success("User Created Successfully");
          toast.success("Please Login");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log("authToken :>> ", authToken);
    if (authToken) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              <LoginSignUp
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <LoginSignUp
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />

          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
