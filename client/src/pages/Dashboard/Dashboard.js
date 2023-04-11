import React from "react";
import TinderCard from "react-tinder-card";
import ReportModal from "../../components/ReportModal/ReportModal";
import axios from "axios";
import { useRef, useMemo, useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import "./Dashboard.css";
import Matches from "../../components/Matches/Matches";
import {useNavigate} from "react-router-dom";
import {navigateToLoginPage} from "../../utils/routing";

const db = [
  {
    name: "Ojasvi",
    age: 21,
    url: "https://www.scrolldroll.com/wp-content/uploads/2022/12/Hania-Amir-beautiful-pakistani-actresses.jpg",
  },
  {
    name: "Ira",
    age: 22,
    url: "https://imgeng.jagran.com/webstories/7791/pakistani-actress-hania-amir-is-breathtaking-in-these-western-looks-1671693359.jpeg",
  },
  {
    name: "Aanya",
    age: 23,
    url: "https://cdn.siasat.com/wp-content/uploads/2023/02/hania-amir.jpg",
  },
  {
    name: "Lasya",
    age: 24,
    url: "https://lollywoodcity.com/wp-content/uploads/2022/03/haniaheheofficial_272875010_971176673531365_4582770850327121465_n-819x1024.jpg",
  },
  {
    name: "Aakriti",
    age: 25,
    url: "https://m.timesofindia.com/photo/96518055/96518055.jpg",
  },
];

const Dashboard = () => {
  //getting users from database
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const UserId = cookies.UserId;
  const navigate = useNavigate()
  useEffect(() => {
    navigateToLoginPage(navigate, cookies)
  }, []);
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

  const [genderedUsers, setGenderedUsers] = useState(null);

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const matchedUserIds = user?.matches
    .map(({ UserId }) => UserId)
    .concat(UserId);

  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser.UserId)
  );

  console.log("filteredGenderedUsers ", filteredGenderedUsers);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      console.log(localStorage.getItem("url1"));

      getGenderedUsers();
    }
  }, [user]);
  console.log(user);
  console.log(genderedUsers);

  // const characters = filteredGenderedUsers;
  const [lastDirection, setLastDirection] = useState();
  const [currentIndex, setCurrentIndex] = useState([filteredGenderedUsers]?.length - 1);
  // const [profiles, setProfiles] = useState(null);
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array([filteredGenderedUsers]?.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canGoBack = currentIndex < [filteredGenderedUsers]?.length - 1;

  const canSwipe = currentIndex >= 0;
  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:4000/addmatch", {
        UserId,
        matchedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < [filteredGenderedUsers].length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  useEffect(() => {
    document.querySelector("html").classList.add("overflow-hidden");
  }, []);

  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className="dashboard-container">
      {showReportModal && (
        <ReportModal setShowReportModal={setShowReportModal} />
      )}
      {user && <Matches user={user} />}
      <div className="main-section">
        <div className="logo-filter">
          <img src="/assets/image5.png" alt="" />
          <div className="filter">
            <img src="/assets/filter.png" alt="" />
            <p>Filters</p>
          </div>
        </div>
        <div
          className={`swipecard-container ${
            !showReportModal ? "" : "swipe-hidden"
          }`}
        >
          {filteredGenderedUsers?.map((character, index) => {
            return ( character.url1 &&
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                onSwipe={(dir) => swiped(dir, character.UserId)}
                onCardLeftScreen={() => {
                  outOfFrame(character.name, index);
                }}
              >
                <div className="profile-container">
                  <div
                    className="img-container"
                    style={{ backgroundImage: "url(" + character.url1 + ")" }}
                  ></div>
                  <div className="name-container">
                    <div className="name-container">
                      <div className="name">
                        <h3>
                          {character.name}, {character.dob_year}
                        </h3>

                        <div className="verify">
                          <img src="/assets/image15.png" alt="" />
                          <p>Photo verified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TinderCard>
            );
          })}
          {/* {profiles.map((character, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={character._id}
                onSwipe={(dir) => swiped(dir, character.first_name, index)}
                onCardLeftScreen={() => outOfFrame(character.first_name, index)}
              >
                <div className="profile-container">
                  <div
                    className="img-container"
                    style={{ backgroundImage: "url(" + character.url1 + ")" }}
                  ></div>
                  <div className="name-container">
                    <div className="name-container">
                      <div className="name">
                        <h3>
                          {character.first_name}, {character.dob_year}
                        </h3>

                        <div className="verify">
                          <img src="/assets/image 15.png" alt="" />
                          <p>Photo verified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TinderCard>
            );
          })} */}
        </div>

        <div className="report">
          <span
            onClick={() => {
              setShowReportModal(true);
            }}
          >
            <img src="/assets/report.png" alt="" />
            <p>Block and Report</p>
          </span>
        </div>

        <div className={`swipe-btns ${!showReportModal ? "" : "swipe-hidden"}`}>
          <span className="left-swipe" onClick={() => swipe("left")}>
            <img src="/assets/cross.png" alt="" />
          </span>

          <span className="undo-btn" onClick={() => goBack()}>
            <img src="/assets/undo.png" alt="" />
          </span>

          <span className="right-swipe" onClick={() => swipe("right")}>
            <img src="/assets/right-heart.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
