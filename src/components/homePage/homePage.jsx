import React from "react";
import { Loader } from "react-loaders";
import "./homePage.scss";

function HomePage(props) {
  return (
    <div>
      <Loader id="loader" type="ball-pulse-rise" />
      <h1 id="welcome">algovisualizations</h1>
    </div>
  );
}

export default HomePage;
