import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const HeaderIcons = () => {
  return (
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
  );
};
