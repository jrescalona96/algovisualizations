import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  title: { flexGrow: 1 },
  button: { marginRight: theme.spacing(1) },
}));

function CustomAppBar({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            {title}
          </Typography>
          <Button variant="outlined" color="inherit" className={classes.button}>
            Sorting
          </Button>
          <Button variant="outlined" color="inherit" className={classes.button}>
            Searching
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
