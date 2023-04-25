import React from "react";
import { useLogout } from "../../hooks/useLogout";

const NotAuthenticated = () => {
    const { logout } = useLogout();
  return (
    <div className="container-namePage">
      <div className="modal-wrapper">
        <div className="modal-cont" style={{"padding":"3rem 2rem", "gap": "0.3rem"}}>
            <img src="/assets/noauthillus.jpg" alt="" />

        <h3 style={{"color":"black", "marginTop":"3rem"}}>You are not authenticated</h3>
        <p style={{"fontSize":"1.1rem"}}>Please log in to access this page.</p>
        <a href="/login" style={{"marginTop":"3rem"}} onClick={()=>{
            logout();
        }}>
            <button className="home-btn" style={{"padding":"1rem 7rem", "fontSize":"1.2rem"}}>
            Go to Login Page
            </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default NotAuthenticated;
