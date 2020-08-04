import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Options from "../options/options";
import StartButton from "../startButton/startButton";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(1),
  },
}));

function Controls() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container className={classes.controls} justify="center">
        <Grid xs={6} item>
          <Options id="options" />
        </Grid>
        <Grid xs={2} item>
          <StartButton id="startButton" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Controls;
