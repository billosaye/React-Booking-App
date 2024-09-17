// Importing necessary libraries and components
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom"; // imports useNavigate hook from react-router-dom for client-side routing

// HEADER COMPONENT
const Header = ({ type }) => {
  const navigate = useNavigate(); // navigate hook for client-side routing

  //STATES
  const [destination, setDestination] = useState("");
  // This state is initialized to false, indicating the date picker is initially closed
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    //This state from the Date Range Liblary. It Initializes a state for date range selection with a default start and end date
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    /* This state is for storing the number of adults, children, and rooms for the search */
    adult: 1,
    children: 0,
    room: 1,
  });

  // EVENT HANDLERS
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

const handleSearch = () => { 
  // Navigate to the /hotels route, passing the destination, date, and options as state 
  navigate("/hotels", { state: { destination, date, options } }); 
};

  const handleInput = (e) => {
    setDestination(e.target.value);
  };

  // RENDERING COMPONENTS
  return (
    <div className="header">
      <div // Applies additional 'listMode' class to headerContainer when type prop is "list"
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Accommodations</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Car Hire</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Tours</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Cabs</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Experience the World, One Booking at a Time.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free OsayeBookings account
            </p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Enter City"
                  className="headerSearchInput"
                  onChange={handleInput}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`
  ${format(date[0].startDate, "MM/dd/yyyy")} 
  ${
    date[0].startDate.toLocaleDateString() ===
    date[0].endDate.toLocaleDateString()
      ? ""
      : " to "
  } 
  ${format(date[0].endDate, "MM/dd/yyyy")}
`}
                </span>

                {openDate && (
                  //This is from the date range from the react liblary
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()} // Sets the minimum date to today's date, ensuring users can't select dates in the past
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)} //Toggle openOptions state when clicked
                  className="headerSearchText"
                >
                  {/* Displays the number of adults, children, and rooms selected */}
                  {`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}
                </span>
                {/* Displays the number of adults, children, and rooms selected */}
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1} // Disable the button when there is one or less adult selected
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
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
                      <div className="optionCounter">
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
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Exporting the Header component
export default Header;
