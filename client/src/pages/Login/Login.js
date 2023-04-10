import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import jwt_decode from "jwt-decode"
import { useEffect } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [user, setUser] = useState({});

  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handelClick = async (e) => {
    e.preventDefault();
    await login(email, password);
  };


  function handleCallbackResponse(response) {
    // console.log("Encoded JWT  ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
    navigate("/name");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "786188419159-ldtllegicson9td6oso3nb54nuk8lakb.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "none",
      size: "medium",
    });

    google.accounts.id.prompt();
    // eslint-disable-next-line
    // localStorage.clear()
  }, []);

  return (
    <>
      <div className="signup-page">
        <div className="design">
          <div className="row1" onClick={() => navigate("/")}>
            <img src="/assets/Back.png" alt="" />
          </div>
          <h1>Welcome to our blind dating website! </h1>
          <img className="signup-illus" src="/assets/login-illus1.jpg" alt="" />
          <p>
            Welcome to our blind dating website! Join now to discover new
            connections and potentially find love.
          </p>
        </div>
        <div className="signup-form-section">
          <h1>Login Account</h1>

          {/* <button className="cwg">
            <img src="/assets/google.svg" alt="" />
            <p>Continue with Google</p>
          </button> */}
          <div id="signInDiv"></div>
          <p id="or">- OR -</p>

          <form onSubmit={handelClick} className="signup-input-container">
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
              {/* {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null} */}
            </div>
            <div className="input-container" style={{ visibility: "hidden" }}>
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
              {/* {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null} */}
            </div>

            {/* <input type="submit" placeholder="" disabled={isLoading}  className="signup-btn" /> */}
            <button className="signup-btn" type="submit" disabled={isLoading}>
              Sign in
            </button>
          </form>
          <div className="login-text">
            <p>Don't have an account?</p>
            <span onClick={() => navigate("/Signup")}>Signup</span>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Login;
