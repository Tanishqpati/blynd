import React, {useEffect, useState} from "react";
import {
  FcMusic,
  FcSportsMode,
  FcReadingEbook,
  FcCamera,
} from "react-icons/fc";
import { MdBrunchDining, MdLocalMovies } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaGamepad, FaPlaceOfWorship } from "react-icons/fa";
import { GiBandana, GiCook, GiDress } from "react-icons/gi";
import { TbDog } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import { BsMusicNoteList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./SelectInterest.css";
import {navigateToHomePage} from "../../utils/routing";
import {useCookies} from "react-cookie";

const SelectInterest = () => {
  const navigate = useNavigate();

  const [selectedInterests, setSelectedInterests] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    useEffect(() => {
        navigateToHomePage(navigate, cookies)
    }, []);

  const handleNext = () => {
    localStorage.setItem('personal_interests', selectedInterests);

    navigate("/upload-pictures");
  };

  const handleSelectInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const isFormValid = selectedInterests.length >= 5;

  return (
    <div className="container-namePage">
      <div
        className="row1"
        onClick={() => {
          navigate("/more-info");
        }}
      >
        <img src="/assets/Back.png" alt="" />
      </div>

      <h2>Select atleast 5 interests</h2>

      <div className="interest-container">
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Music"
            style={{
              backgroundColor: selectedInterests.includes("Music")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Music")
                ? "#FF7676"
                : "Black",
            }}
            onClick={(e) => handleSelectInterest("Music")}
          >
            <FcMusic />
            Music
          </button>
          <button
            className="interest-btn"
            value="Sports"
            style={{
              backgroundColor: selectedInterests.includes("Sports")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Sports")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Sports")}
          >
            <FcSportsMode />
            Sports
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Brunch"
            style={{
              backgroundColor: selectedInterests.includes("Brunch")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Brunch")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Brunch")}
          >
            <MdBrunchDining fill="brown" />
            Brunch
          </button>
          <button
            className="interest-btn"
            value="Gym"
            style={{
              backgroundColor: selectedInterests.includes("Gym")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Gym")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Gym")}
          >
            <CgGym />
            Gym
          </button>
          <button
            className="interest-btn"
            value="Singing"
            style={{
              backgroundColor: selectedInterests.includes("Singing")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Singing")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Singing")}
          >
            <BsMusicNoteList fill="blue" />
            Singing
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="E-Sports"
            style={{
              backgroundColor: selectedInterests.includes("E-Sports")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("E-Sports")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("E-Sports")}
          >
            <FaGamepad fill="green" />
            E-Sports
          </button>
          <button
            className="interest-btn"
            value="Dancing"
            style={{
              backgroundColor: selectedInterests.includes("Dancing")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Dancing")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Dancing")}
          >
            <GiBandana />
            Dancing
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Cooking"
            style={{
              backgroundColor: selectedInterests.includes("Cooking")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Cooking")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Cooking")}
          >
            <GiCook fill="blue" />
            Cooking
          </button>
          <button
            className="interest-btn"
            value="Mountains"
            style={{
              backgroundColor: selectedInterests.includes("Mountains")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Mountains")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Mountains")}
          >
            <FaPlaceOfWorship fill="brown" />
            Mountains
          </button>
          <button
            className="interest-btn"
            value="BTS"
            style={{
              backgroundColor: selectedInterests.includes("BTS")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("BTS")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("BTS")}
          >
            <FcMusic />
            BTS
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Book"
            style={{
              backgroundColor: selectedInterests.includes("Book")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Book")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Book")}
          >
            <FcReadingEbook />
            Book
          </button>
          <button
            className="interest-btn"
            value="Animals"
            style={{
              backgroundColor: selectedInterests.includes("Animals")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Animals")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Animals")}
          >
            <TbDog fill="brown" />
            Animals
          </button>
          <button
            className="interest-btn"
            value="Movies"
            style={{
              backgroundColor: selectedInterests.includes("Movies")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Movies")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Movies")}
          >
            <MdLocalMovies />
            Movies
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Travel & Places"
            style={{
              backgroundColor: selectedInterests.includes("Travel & Places")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Travel & Places")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Travel & Places")}
          >
            <SiYourtraveldottv fill="blue" />
            Travel & Places
          </button>
          <button
            className="interest-btn"
            value="Photography"
            style={{
              backgroundColor: selectedInterests.includes("Photography")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Photography")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Photography")}
          >
            <FcCamera />
            Photography
          </button>
        </div>
        <div className="interest-btns-row">
          <button
            className="interest-btn"
            value="Fashion"
            style={{
              backgroundColor: selectedInterests.includes("Fashion")
                ? "#F8E8E6"
                : "white",
              borderColor: selectedInterests.includes("Fashion")
                ? "#FF7676"
                : "black",
            }}
            onClick={(e) => handleSelectInterest("Fashion")}
          >
            <GiDress fill="red" />
            Fashion
          </button>
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
          <span className="process-number">5</span>
          <span className="total-number">/6</span>
        </p>
        <div className="progress-bar">
          <div className="progress-selectinterest"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectInterest;
