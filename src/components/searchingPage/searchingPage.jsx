import React from "react";
import Load from "../common/load/load";

function SearchingPage() {
  const loadingMessage = "Still working on this one";
  return (
    <React.Fragment>
      <Load active={true} message={loadingMessage} />
    </React.Fragment>
  );
}

export default SearchingPage;
