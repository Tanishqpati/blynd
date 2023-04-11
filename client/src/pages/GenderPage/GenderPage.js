import React, {useEffect, useState} from "react";
import "./GenderPage.css";
import { useNavigate } from "react-router-dom";
import { navigateToHomePage} from "../../utils/routing";
import {useCookies} from "react-cookie";


const GenderPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const isFormValid = gender;
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    navigateToHomePage(navigate, cookies)
  }, []);

  const handleNext = () => {
    localStorage.setItem('gender_identity', gender);
    navigate("/interest");
  };

  return (
    <>
      <div className="container-namePage">
        <div
          className="row1"
          onClick={() => {
            navigate("/name");
          }}
        >
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>What's your gender?</h2>

        <div className="gender-input-container">
          <div
            className={`male-cont ${gender === "male" ? "male-selected" : ""}`}
            onClick={() => setGender("male")}
          >
            <div className="select">
              <img src="/assets/select.svg" alt="" />
            </div>
            <div className="gender-sign">
              <span>
                <img src="/assets/male.svg" alt="" />
              </span>
              <p>Man</p>
            </div>
          </div>

          <div
            className={`female-cont ${
              gender === "female" ? "female-selected" : ""
            }`}
            onClick={() => setGender("female")}
          >
            <div className="select">
              <img src="/assets/select.svg" alt="" />
            </div>
            <div className="gender-sign">
              <span>
                <img src="/assets/female.svg" alt="" />
              </span>
              <p>Woman</p>
            </div>
          </div>
        </div>

        <div className={`forward-btn ${isFormValid ? "enabled" : "disabled"}`}>
          <button
            type="submit"
            disabled={!isFormValid}
            onClick={handleNext}
          >
            <div>
              <img src="/assets/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="progress-tracker">
          <p className="progress-number">
            <span className="process-number">2</span>
            <span className="total-number">/4</span>
          </p>
          <div className="progress-bar">
            <div className="progress-gender"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderPage;
