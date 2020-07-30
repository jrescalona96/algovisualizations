import React from "react";
import Loader from "react-loaders";
import "./load.scss";

function Load({ active }) {
  return (
    <div id="loader">
      <Loader type="ball-grid-pulse" active={active} />
    </div>
  );
}

export default Load;
