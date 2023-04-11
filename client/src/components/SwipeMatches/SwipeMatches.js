import React, { useEffect, useState } from "react";
import "./SwipeMatches.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const SwipeMatches = ({ matches }) => {
  const [matchedProfiles, setMatchedProfiles] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches.map(({ UserId }) => UserId);
  const UserId = cookies.UserId;
  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches();
  }, [matches]);

  const filteredMatchedProfiles = matchedProfiles?.filter(
    (matchedProfile) =>
      matchedProfile.matches.filter((profile) => profile.user_id === UserId)
        .length > 0
  );

  console.log(filteredMatchedProfiles);

  return (
    <div className="date-match-fixing">
      {!matchedProfiles && (
        <div className="noMatchesDesign">
          <img src="/assets/nomatch-illus.svg" alt="" />
          <h3>Find your matches here</h3>
          <p>Start discovering people to get matches</p>
        </div>
      )}
      {matchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          // onClick={() => setClickedUser(match)}
        >
          <div className="match-img-container">
            <img src={match.url1} alt={match?.first_name + " profile"} />
          </div>
          <div className="second-cont">
          {/* <h3>{match?.first_name}</h3> */}
          <p>Select a place and time</p>
          <button>Schedule a Date</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default SwipeMatches;
