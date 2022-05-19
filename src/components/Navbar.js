import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <h1 className="navbar-header">
        {" "}
        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        &nbsp;My Travel Journal
      </h1>
    </div>
  );
}

export default Navbar;
