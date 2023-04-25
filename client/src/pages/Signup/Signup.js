import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { navigateToDashboard } from "../../utils/routing";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  // const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    navigateToDashboard(navigate, cookies);
  }, []);
  const handelClick = async (e) => {
    e.preventDefault();
    const finalName = name.split(" ");
    await signup(finalName[0], email, password);
  };

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT  ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    sessionStorage.setItem("user", JSON.stringify(userObject));
    navigate("/name");
  }

  useEffect(() => {
    sessionStorage.clear()
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "none",
      size: "medium",
    });

    google.accounts.id.prompt();
  }, []);
  // const passwordError =
  //   password === confirmPassword ? "" : "Password must match";

  return (
    <>
      <div className="signup-page">
        <div className="design">
          <div
            className="row1"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/assets/Back.png" alt="" />
          </div>
          <h1>Welcome to our blind dating website! </h1>
          <img className="signup-illus" src="/assets/signup-illus.jpg" alt="" />
          <p>
            Welcome to our blind dating website! Join now to discover new
            connections and potentially find love.
          </p>
        </div>
        <div className="signup-form-section">
          <h1>Create Account</h1>

          <div id="signInDiv"></div>
          {/* <button className="cwg">

          </button> */}
          <p id="or">- OR -</p>

          <form onSubmit={handelClick} className="signup-input-container">
            <div className="input-container">
              <input
                type="text"
                name="name"
                required={true}
                className="input-field"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <input
                type="email"
                name="email"
                required={true}
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                name="password"
                className="input-field"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* <div className="input-container">
              <input
                type="password"
                required={true}
                name="confirmPassword"
                className="input-field"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              {passwordError ? <p>{passwordError}</p> : null}
            </div> */}

            <button className="signup-btn" type="submit" disabled={isLoading}>
              Sign up
            </button>
          </form>
          <div className="login-text">
            <p>Already have an account?</p>
            <span onClick={() => navigate("/Login")}>Signin</span>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Signup;
