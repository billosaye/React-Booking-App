import "./header.css";
import { HeaderIcons } from "./HeaderItems/HeaderIcons";
import { HeaderBanner } from "./HeaderItems/HeaderBanner";
import { DatePicker } from "./DatePicker";
import { Options } from "./Options";
import { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

function MainHeader({ type }) {
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <HeaderIcons />
        {type !== "list" && (
          <>
            <HeaderBanner />
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <DatePicker />
              <Options />
              <button className="headerBtn">Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MainHeader;