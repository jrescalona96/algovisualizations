import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../common/chart";
import AlgorithmsMenu from "../algorithmsMenu";
import Options from "../options";
import DataContext from "../../context/DataContext";
import "./sortingPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  options: {
    position: "fixed",
    bottom: theme.spacing(2),
  },
}));

function SortingPage() {
  const data = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container id="pageContainer">
      <React.Fragment>
        <Typography className="chart-header" variant="h3">
          {data.selectedAlgorithm.name}
        </Typography>
        <Chart id="chart" data={data} />
        <AlgorithmsMenu />
        <Container className={classes.options}>
          <Options />
        </Container>
      </React.Fragment>
    </Container>
  );
}

export default SortingPage;
