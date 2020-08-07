import React, { useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Options from "../options/options";
import AlgorithmsMenu from "../algorithmsMenu/algorithmsMenu";
import ControlsContext from "../../context/ControlsContext";
import AlgorithmsContext from "../../context/AlgorithmsContext";

import ActionButton from "../common/actionButton/actionButton";

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
  const { handleStart, handleReset, timer } = useContext(ControlsContext);
  const { selectedAlgorithm } = useContext(AlgorithmsContext);
  const classes = useStyles();

  const isRunning = timer !== 0;
  return (
    <Container className={classes.root}>
      <Grid container className={classes.controls} justify="center">
        <Grid item xs={12} className={classes.grid}>
          <AlgorithmsMenu algorithms={algorithms} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Options id="options" />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.grid}>
          <ActionButton
            id="startButton"
            label="start"
            isDisabled={!selectedAlgorithm._id || isRunning}
            onClick={handleStart}
            icon={<PlayCircleOutlineIcon />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.grid}>
          <ActionButton
            id="resetButton"
            label="reset"
            isDisabled={false}
            onClick={handleReset}
            icon={<SwapHorizIcon />}
            color="secondary"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Controls;
