import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SuccessModal.css";

const SuccessModal = ({ loading }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-cont">
         
          {
            loading && <>
            <img src="/assets/1482.gif" alt="" style={{"height":"6rem"}}/>
            <h3 style={{"textAlign":"justify"}}>Please wait while your account is being created</h3>
            </>
          }

          {!loading && <>
          <img src="/assets/modal-img.svg" alt="" />
              <h3>
                Great! <br />
                Your account has been <br/> created successfully
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
              </>}
              
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
