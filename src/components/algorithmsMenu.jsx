import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function AlgorithmsMenu({
  selectedAlgorithm,
  algorithms,
  onSetSelectedAlgorithm,
  onStart,
  timer,
}) {
  const classes = useStyles();
  const isTimerSet = timer > 0;
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        {algorithms.map((item) => {
          const { _id, name } = item;
          const variant =
            _id === selectedAlgorithm._id ? "contained" : "outlined";
          return (
            <Grid key={_id} item>
              <Button
                className={classes.options}
                variant={variant}
                color="primary"
                onClick={() => onSetSelectedAlgorithm(_id)}
              >
                {name}
              </Button>
            </Grid>
          );
        })}
        <Button
          className={classes.options}
          variant="contained"
          color={isTimerSet ? "default" : "secondary"}
          onClick={onStart}
          size="small"
          startIcon={isTimerSet ? <SwapHorizIcon /> : <PlayCircleOutlineIcon />}
        >
          {isTimerSet ? "STOP" : "START"}
        </Button>
      </Grid>
    </div>
  );
}

export default AlgorithmsMenu;
