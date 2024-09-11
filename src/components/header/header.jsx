import "./header.css";

import "react-date-range/dist/styles.css"; // from  'react-date-range' liblary
import "react-date-range/dist/theme/default.css"; // from  'react-date-range' liblary
import { DateRange } from "react-date-range"; // from  'react-date-range' liblary
import { useState } from "react";
import { format } from "date-fns"; // from  'date-fns' libl. It is added using the  'pnpm add date-fns' command.


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  // start from 'react-date-range' liblary
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // End from 'react-date-range' liblary
  const [openDatePicker, setOpenDatePicker] = useState(false); // Toggle state for date picker
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Discover the secret to affordable travel - BilBra's got you covered
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick = {()=> setOpenDatePicker(!openDatePicker)}  className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>            
            {/* We now add a calendar liblary. This code is from the 'react-date-range' library. */}
            {openDatePicker && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>

          <button className="headerBtn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
