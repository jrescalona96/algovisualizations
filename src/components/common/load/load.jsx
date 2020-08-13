import React from "react";
import Loader from "react-loaders";
import "./load.scss";
import { Typography } from "@material-ui/core";

function Load({ active, message }) {
  return (
    <div id="loader" className="hide">
      <Loader type="ball-grid-pulse" active={active} />
      {message && (
        <Typography variant="h4" id="loaderMessage">
          {message}
        </Typography>
      )}
    </div>
  );
}

export default Load;
