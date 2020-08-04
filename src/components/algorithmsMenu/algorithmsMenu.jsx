import React, { useContext } from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DataContext from "../../context/DataContext";

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
  const data = useContext(DataContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        {data.sort.map((item) => {
          const { _id, name } = item;
          const variant =
            _id === data.selectedAlgorithm._id ? "contained" : "outlined";
          return (
            <Grid key={_id} item>
              <Button
                className={classes.options}
                variant={variant}
                color="primary"
                onClick={() => data.handleSetSelectedAlgorithm(_id)}
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
