import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginBottom: theme.spacing(0),
  },
}));

export default function Navbar({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
