import "./header.css";

// Import CSS files from 'react-date-range' library
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Import 'DateRange' component from 'react-date-range' library
import { DateRange } from "react-date-range";

// Import useState and Children components from 'react' library
import { Children, useState } from "react";

// Import 'format' function from 'date-fns' library to format dates
import { format } from "date-fns";

// Import FontAwesomeIcon component from '@fortawesome/react-fontawesome' library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import icons from '@fortawesome/free-solid-svg-icons' library
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

// Define 'Header' function component
function Header({ type }) {
  // Initialize 'date' state with default values from 'react-date-range' library
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Initialize 'openDatePicker' state to track date picker visibility
  const [openDatePicker, setOpenDatePicker] = useState(false);

  // Initialize 'openOptions' state to track options visibility
  const [openOptions, setOpenOptions] = useState(false);

  // Initialize 'options' state with default values for adults, children, and rooms
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  // Define 'handleOption' function to update 'options' state
  function handleOption(name, operation) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
      };
    });
  }

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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">
              Discover the secret to affordable travel - BilBra's got you
              covered
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
                <span
                  onClick={() => setOpenDatePicker(!openDatePicker)} // Toggles the date picker component visibility
                  className="headerSearchText"
                >
                  {/* Display selected date range */}
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {/* Toggle date picker component from 'react-date-range' library */}
                {openDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                {/* Display number of adults, children, and rooms */}
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adult. ${options.children} children.  ${options.rooms} rooms`}
                </span>
                {/* Toggle options component */}
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.adult <= 1} // Disable decrement button when there is only one adult
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")} // Decrement the adult count when the "-" button is clicked
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.rooms <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.rooms}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerBtn">Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
