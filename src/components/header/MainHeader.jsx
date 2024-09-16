import "./header.css";
import { useNavigate } from 'react-router-dom';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

// HeaderSearchItem Component
const HeaderSearchItem = ({ icon, value, onClick, children }) => (
  <div className="headerSearchItem">
    <FontAwesomeIcon icon={icon} className="headerIcon" />
    <span onClick={onClick} className="headerSearchText">
      {value}
    </span>
    {children}
  </div>
);

// MainHeader Function Component
function MainHeader({ type }) {
  const navigate = useNavigate();

  // Initialize states
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  // Define 'handleOption' function to update 'options' state
  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : Math.max(prev[name] - 1, 0),
    }));
  };

  // Define 'handleSearch' function
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
              Discover the secret to affordable travel - BilBra's got you covered
            </p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
              <HeaderSearchItem
                icon={faBed}
                value={<input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />}
              />
              
              <HeaderSearchItem
                icon={faCalendarDays}
                value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                onClick={() => setOpenDatePicker(!openDatePicker)}
              >
                {openDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </HeaderSearchItem>
              
              <HeaderSearchItem
                icon={faPerson}
                value={`${options.adult} adult. ${options.children} children. ${options.rooms} rooms`}
                onClick={() => setOpenOptions(!openOptions)}
              >
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
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
                        <span className="optionCounterNumber">{options.children}</span>
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
                        <span className="optionCounterNumber">{options.rooms}</span>
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
              </HeaderSearchItem>

              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
