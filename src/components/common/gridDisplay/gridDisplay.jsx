import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  const paperStyle = {
    height: "2.5rem",
    width: "2.5rem",
    margin: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return {
    root: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "55vh",
      overflow: "auto",
    },
    paper0: {
      ...paperStyle,
    },
    paper1: {
      ...paperStyle,
      backgroundColor: "orange",
    },
    paper2: {
      ...paperStyle,
      backgroundColor: "red",
    },
  };
});

function GridDisplay({ data }) {
  const classes = useStyles();
  const _getPaperClass = (color) => {
    const { paper0, paper1, paper2 } = classes;
    if (color === 0) return paper0;
    else if (color === 1) return paper1;
    else return paper2;
  };

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        {data.length > 0 ? (
          data.map((item) => {
            const paperClass = _getPaperClass(item.color);
            return (
              <Grid key={item._id} item>
                <Paper
                  variant="elevation"
                  elevation={item.elevation}
                  className={paperClass}
                >
                  <h3 className={classes.data}>{item.y}</h3>
                </Paper>
              </Grid>
            );
          })
        ) : (
          <Typography className="chart-header" variant="h5">
            NO DATA TO PROCESS
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default GridDisplay;
