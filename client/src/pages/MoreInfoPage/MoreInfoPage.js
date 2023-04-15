import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import "./MoreInfoPage.css";
import { navigateToHomePage} from "../../utils/routing";
import {useCookies} from "react-cookie";


const MoreInfoPage = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setyear] = useState("");
  const [height, setHeight] = useState("");
  const [aboutme, setAboutme] = useState("");
  const isFormValid = day && month && year && height && aboutme;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    navigateToHomePage(navigate, cookies)
  }, []);

  const handleNext = () => {
    localStorage.setItem('dob_day', day);
    localStorage.setItem('dob_month', month);
    localStorage.setItem('dob_year', year);
    localStorage.setItem('height', height);
    localStorage.setItem('about', aboutme);
    navigate("/select-interest");
  };

  return (
    <>
      <div className="container-namePage">
        <div
          className="row1"
          onClick={() => {
            navigate("/interest");
          }}
        >
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>Let us know more about yourself</h2>

        <div className="container-row1">
          <div className="dob">
            <p>Birthday</p>
            <div className="dob-container">
              <input
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                required="true"
                onChange={(event) => setDay(event.target.value)}
              />
              <input
                type="number"
                min="1"
                max="12"
                placeholder="MM"
                required="true"
                onChange={(event) => setMonth(event.target.value)}
              />
              <input
                type="number"
                min="1900"
                max="2023"
                placeholder="YYYY"
                required="true"
                onChange={(event) => setyear(event.target.value)}
              />
            </div>
          </div>
          <div className="height-container">
            <p>Height</p>
            <input
              type="number"
              placeholder="cm"
              required="true"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
        </div>

        <div className="container-row2">
          <p>About me</p>
          <input
            type="text"
            placeholder="I like long walks..."
            required="true"
            onChange={(event) => setAboutme(event.target.value)}
          />
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
            <span className="process-number">4</span>
            <span className="total-number">/6</span>
          </p>
          <div className="progress-bar">
            <div className="progress-moreinfo"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoPage;
