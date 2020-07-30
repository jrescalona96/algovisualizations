import React from "react";
import Loader from "react-loaders";
import "./load.scss";
import { Typography } from "@material-ui/core";

function Load({ active, message }) {
  return (
    <div id="loader">
      {message && <Typography id="loaderMessage">{message}</Typography>}
      <Loader type="ball-grid-pulse" active={active} />
    </div>
  );
}

export default Load;
