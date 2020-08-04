import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import DataContext from "../../context/DataContext";
function Header() {
  const { selectedAlgorithm } = useContext(DataContext);
  return (
    <Typography className="chart-header" variant="h3">
      {selectedAlgorithm.name}
    </Typography>
  );
}

export default Header;
