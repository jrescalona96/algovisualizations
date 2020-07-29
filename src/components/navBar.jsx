import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  title: { flexGrow: 1, color: "white", textDecoration: "underline" },
  button: {
    marginRight: theme.spacing(1),
    color: "white",
  },
  link: { textDecoration: "none" },
}));

function NavBar({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <NavLink key="/sorting" to={"/sorting"} className={classes.link}>
            <Button variant="outlined" className={classes.button}>
              Sorting
            </Button>
          </NavLink>

          <NavLink key="/searching" to={"/searching"} className={classes.link}>
            <Button variant="outlined" className={classes.button}>
              Searching
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
