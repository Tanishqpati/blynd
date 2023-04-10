import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import SettingsSideSection from "../../components/SettingsSideSection/SettingsSideSection";
import "./DateProfile.css";
import { useCookies } from "react-cookie";
import axios from "axios";

const DateProfile = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const UserId = cookies.UserId;
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user", {
        params: { UserId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="dashboard-container">
      <SettingsSideSection user={user} />

      <div className="main-section-dateprofile">
        <div className="mainrow1">
          <h1>Date Profile</h1>
        </div>

        <div className="image-container">
          <div className="col1">
            <div className="big-box">
              <div className="picture-preview-enabled">
              { user && user.url1 &&  <img src={user && user.url1} alt="" />}
              </div>
            </div>
            <div className="small-box-cont">
              <div className="small-box">
                {/* <div className="inner-img-box"></div> */}
                <div className="picture-preview-small">
                { user && user.url2 &&  <img src={user && user.url2} alt="" />}
                </div>
              </div>
              <div className="small-box">
                <div className="picture-preview-small">
                { user && user.url3 &&  <img src={user && user.url3} alt="" />}
                </div>
              </div>
            </div>
          </div>

          <div className="col2">
            <div className="small-box">
              <div className="picture-preview-small">
              { user && user.url4 &&  <img src={user && user.url4} alt="" />}
              </div>
            </div>
            <div className="small-box">
              <div className="picture-preview-small">
              { user && user.url5 &&  <img src={user && user.url5} alt="" />}
              </div>
            </div>
            <div className="small-box">
              <div className="picture-preview-small">
              { user && user.url6 &&  <img src={user && user.url6} alt="" />}
              </div>
            </div>
          </div>
        </div>

        <div className="verification">
          <p>Verification</p>
          <button className="verify-btn">
            Verify your account
            <BsArrowRightShort size="1.6rem" fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateProfile;
