import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <NavLink to="/" className={classes.title}>
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </NavLink>
          <NavLink to="/sorting" className={classes.button}>
            <Button color="inherit">Sorting</Button>
          </NavLink>
          <NavLink to="/searching" className={classes.button}>
            <Button color="inherit">Searching</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
