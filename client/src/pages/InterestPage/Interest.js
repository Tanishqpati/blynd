import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Interest.css";

const Interest = () => {
  const navigate = useNavigate();
  const [interest, setInterest] = useState("");
  const isFormValid = interest;

  const handleNext = () => {
    localStorage.setItem('gender_interest', interest);

    navigate("/more-info");
  };

  return (
    <>
      <div className="container-namePage">
        <div
          className="row1"
          onClick={() => {
            navigate("/gender");
          }}
        >
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2 id="interest-question">Who you want to date?</h2>

        <div className="gender-input-container">
          <div
            className={`male-cont ${
              interest === "male" ? "male-selected" : ""
            }`}
            onClick={() => setInterest("male")}
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
              interest === "female" ? "female-selected" : ""
            }`}
            onClick={() => setInterest("female")}
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
          <button type="submit" disabled={!isFormValid} onClick={handleNext}>
            <div>
              <img src="/assets/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="progress-tracker">
          <p className="progress-number">
            <span className="process-number">3</span>
            <span className="total-number">/6</span>
          </p>
          <div className="progress-bar">
            <div className="progress-interest"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;
