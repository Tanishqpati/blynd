import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../LogoutModal/LogoutModal";
import "./SettingsSideSection.css";

const SettingsSideSection = ({user}) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(
    window.location.pathname.slice(9, window.location.pathname.length)
  );

  // useEffect(() => {
  //   setActiveButton("");
  // }, [navigate]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
 
    switch (buttonName) {
      case "editprofile":
        navigate("/profile/editprofile");
        break;
      case "settings":
        navigate("/profile/settings");
        break;
      case "contactfaqs":
        navigate("/profile/contactfaqs");
        break;
      case "logout":
        setOpenModal(true);
        
        break;
      default:
        break;
    }
  };

  // const handleLogout = () => {
  //   setOpenModal(false);
  //   navigate("/");
  // };

  const [openModal, setOpenModal] = useState(false);
  // console.log(activeButton)

  return (
    <div className="settings-side-section">
      <img
        id="back-btn"
        src="/assets/Back.png"
        alt=""
        onClick={() => {
          navigate("/dashboard/matches");
        }}
      />
      <div className="settings-side-row1">
        <span
          onClick={() => {
            navigate("/dashboard/matches");
          }}
        >
          <img src={user && user.url1} alt="" />
        </span>
      </div>

      <div className="side-section-menu">
        <p
          onClick={() => {
            handleClick("editprofile");
          }}
          className={activeButton === "editprofile" ? "active" : "non-active"}
        >
          Edit Profile
        </p>
        <p
          onClick={() => handleClick("settings")}
          className={activeButton === "settings" ? "active" : "non-active"}
        >
          Settings
        </p>

        <p
          onClick={() => handleClick("contactfaqs")}
          className={activeButton === "contactfaqs" ? "active" : "non-active"}
        >
          Contact & FAQs
        </p>
        <button onClick={() => setOpenModal(true)} className="logout">
          Log out
        </button>
      </div>
      {openModal && <LogoutModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default SettingsSideSection;
