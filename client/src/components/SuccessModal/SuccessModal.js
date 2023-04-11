import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SuccessModal.css";

const SuccessModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-cont">
          <img src="/assets/modal-img.svg" alt="" />
          <h3>
            Great! <br />
            Your account has been <br /> created successfully
          </h3>
          <Link to="/dashboard/matches">
            <button
              className="home-btn"
              // onClick={() => {
              //   navigate("/dashboard/matches");
              // }}
            >
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
