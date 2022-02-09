import React from "react";
import "./topbar.css";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Adesoji admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            Notifications
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            Language 
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            Settings 
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
