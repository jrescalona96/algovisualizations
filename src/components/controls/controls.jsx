import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Options from "../options/options";
import StartButton from "../startButton/startButton";
import AlgorithmsMenu from "../algorithmsMenu/algorithmsMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(1),
    margin: theme.spacing(1),
  },
  grid: {
    margin: theme.spacing(1),
  },
}));

function Controls({ algorithms }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container className={classes.controls} justify="center">
        <Grid item xs={12} className={classes.grid}>
          <AlgorithmsMenu algorithms={algorithms} />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Options id="options" />
        </Grid>
        <Grid item xs={2} className={classes.grid}>
          <StartButton id="startButton" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Controls;
