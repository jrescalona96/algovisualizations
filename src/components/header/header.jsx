import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import AlgorithmsContext from "../../context/AlgorithmsContext";
function Header() {
  const { selectedAlgorithm } = useContext(AlgorithmsContext);
  return (
    <Typography className="chart-header" variant="h3">
      {selectedAlgorithm.name}
    </Typography>
  );
}

export default Header;
