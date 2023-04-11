import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dates from "../Dates/Dates";
import SwipeMatches from "../SwipeMatches/SwipeMatches";
import "./MatchesStyle.css";

const Matches = ({ user }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("matches");
  const person = JSON.parse(localStorage.getItem("user"));
  const name = person.name;
  const fullName = name.split(" ");
  const firstName = fullName[0];

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    console.log(user.matches);
  };
  // useEffect(() => {
  //   console.log(user.name)
  // }, [])

  return (
    <div className="dashboard-side-section">
      <div className="info-row">
        <span
          onClick={() => {
            navigate("/profile/editprofile");
          }}
        >
          {/* <img src="/assets/tanishqpic.jpg" alt="" /> */}
          <img src={user && user.url1} alt="" />
        </span>
        <h2>{user && user.name}</h2>
      </div>
      <div className="date-match-switch">
        <div
          onClick={() => handleClick("dates")}
          disabled={activeButton === "dates"}
          className={`${activeButton === "dates" ? "matches" : "dates"}`}
        >
          Dates
        </div>
        <div
          onClick={() => handleClick("matches")}
          disabled={activeButton === "matches"}
          className={`${activeButton === "matches" ? "matches" : "dates"}`}
        >
          Matches
        </div>
      </div>

      {activeButton === "dates" && <Dates />}
      {activeButton === "matches" && <SwipeMatches matches={user.matches}/>}
    </div>
  );
};

export default Matches;
