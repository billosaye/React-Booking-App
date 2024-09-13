import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import icons from '@fortawesome/free-solid-svg-icons' library
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export const Options = () => {
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
    </div>
  );
};
