import React from "react";
import { MdLineStyle } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { CiBoxList } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { MdTimeline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdAddToQueue } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineQueuePlayNext } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdReport } from "react-icons/md";

import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <GoGraph className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <FaRegUser className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <FaRegCirclePlay className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <CiBoxList className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/newMovie" className="link">
              <li className="sidebarListItem">
                <MdAddToQueue className="sidebarIcon" />
                Add Movie
              </li>
            </Link>
            <Link to="/newList" className="link">
              <li className="sidebarListItem">
                <MdOutlineQueuePlayNext className="sidebarIcon" />
                Add List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CiMail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <VscFeedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <FaRegMessage className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdOutlineManageAccounts className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}