import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../common/chart";
import Header from "../header/header";
import Controls from "../controls/controls";
import { sort } from "../../algorithms/index";
import "./sortingPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
}));

function SortingPage() {
  const classes = useStyles();

  return (
    <Container id="pageContainer" className={classes.root}>
      <Header />
      <Chart />
      <Controls algorithms={sort} />
    </Container>
  );
}

export default SortingPage;
