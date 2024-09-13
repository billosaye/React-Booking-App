// Import React and 'useState' for managing component state
import React, { useState } from "react";

// Import 'DateRange' component from 'react-date-range' library
import { DateRange } from "react-date-range";

// Import 'format' function from 'date-fns' library to format dates
import { format } from "date-fns";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// Import CSS files from 'react-date-range' library
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DatePicker = () => {
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

  return (
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
  );
};
