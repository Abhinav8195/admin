import React from "react";
import "./topbar.css";
import { IoIosNotifications } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";



export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoIosNotifications size={20} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage size={20}/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoIosSettings size={20} />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
