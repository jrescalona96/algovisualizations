import React from "react";
import Loader from "react-loaders";
import "./load.scss";

const style = {
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
};

function Load({ active }) {
  return <Loader type="ball-grid-pulse" active={active} style={style} />;
}

export default Load;
