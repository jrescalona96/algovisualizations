import React from "react";
import Loader from "react-loader-spinner";

function SearchingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        widows: "50%",
      }}
    >
      <Loader
        type="Grid"
        color="#3f51b5"
        height={160}
        width={160}
        style={{ margin: "2rem" }}
      />
      <h4>Sorry, I'm still working on this one.</h4>
    </div>
  );
}

export default SearchingPage;
