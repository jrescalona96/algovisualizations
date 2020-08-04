import React, { useContext } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlgorithmsContext from "../../context/AlgorithmsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(0),
  },
  button: {
    display: "fixed",
    margin: theme.spacing(1),
  },
}));

function AlgorithmsMenu() {
  const { selectedAlgorithm, handleSetSelectedAlgorithm, sort } = useContext(
    AlgorithmsContext
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        {sort.map((item) => {
          const { _id, name } = item;
          const variant =
            _id === selectedAlgorithm._id ? "contained" : "outlined";
          return (
            <Grid key={_id} item>
              <Button
                className={classes.options}
                variant={variant}
                color="primary"
                onClick={() => handleSetSelectedAlgorithm(_id)}
              >
                {name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AlgorithmsMenu;
