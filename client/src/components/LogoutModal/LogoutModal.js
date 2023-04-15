import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import "./LogoutModal.css";

const LogoutModal = (props) => {
  const { logout } = useLogout();

  const navigate = useNavigate();
  return (
    <div className="modal-wrapper">
      <div className="logout-modal-cont">
        <span className="logout-illus">
          <BiLogOut fill="white" size="3rem" />
        </span>
        <h2>Confirm Logout</h2>
        <p>
          Are you sure you want to logout? We'll miss you! But we understand if
          you need to go.
        </p>
        <button
          className="yes-logout"
          onClick={() => {
            logout();
          }}
        >
          Yes, I want to logout
        </button>
        <button
          className="no-login"
          onClick={() => {
            props.setOpenModal(false);
          }}
        >
          No, I want to stay logged in
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
