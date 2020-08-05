import React, { useContext } from "react";
import { sort, search } from "../../algorithms";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AlgorithmsContext from "../../context/AlgorithmsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: { flexGrow: 1, color: "white" },
  button: {
    marginRight: theme.spacing(1),
    textDecoration: "none",
    color: "white",
  },
}));

function NavBar({ title }) {
  const { handleSetSelectedAlgorithm } = useContext(AlgorithmsContext);
  const baseRoute = "/algovisualizations";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <NavLink to={baseRoute} className={classes.title}>
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </NavLink>
          <NavLink to={`${baseRoute}/sorting`} className={classes.button}>
            <Button
              color="inherit"
              onClick={() => {
                handleSetSelectedAlgorithm(sort[0]);
              }}
            >
              Sorting
            </Button>
          </NavLink>
          <NavLink to={`${baseRoute}/searching`} className={classes.button}>
            <Button
              color="inherit"
              onClick={() => {
                handleSetSelectedAlgorithm(search[0]);
              }}
            >
              Searching
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
