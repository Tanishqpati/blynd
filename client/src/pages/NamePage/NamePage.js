import React, {  useState } from "react";
import "./NamePage.css";
import { useNavigate } from "react-router-dom";

const NamePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const isFormValid = name;
  

  const handleNext = () => {
    localStorage.setItem('name', name);
    navigate("/gender");
  };

  return (
    <>
      <div className="container-namePage">
        <div
          className="row1"
          id="name-back"
          onClick={() => {
            navigate("/name");
          }}
        >
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>What's your name?</h2>
        <input
          className="input"
          type="text"
          spellCheck="false"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

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
            <span className="process-number">1</span>
            <span className="total-number">/6</span>
          </p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NamePage;
