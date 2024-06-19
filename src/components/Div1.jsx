import React from "react";
import "./Div1.css";
function Div1() {
  return (
    <>
      <div className="story"></div>
      <div className="mainDiv">
        <div className="user-lock myClass">
          <i class="fa-solid fa-user-lock">
            <span>My cloud</span>
          </i>
        </div>

        <div className="user-lock">
          <i class="fa-solid fa-users">
            <span>Sheared files</span>
          </i>
        </div>

        <div className="user-lock">
          <i class="fa-solid fa-star">
            <span>Favorites</span>
          </i>
        </div>

        <div className="user-lock">
          <i class="fa-solid fa-cloud-arrow-up">
            <span>Upload files</span>
          </i>
        </div>
      </div>

      <div className="bottom">
        <div className="setting user-lock">
          <i class="fa-solid fa-gear"> <span>Settings</span></i>
        </div>
        <div className="logout user-lock">
          <i class="fa-solid fa-right-from-bracket"> <span>Log out</span></i>
      </div>
        </div>
    </>
  );
}

export default Div1;
