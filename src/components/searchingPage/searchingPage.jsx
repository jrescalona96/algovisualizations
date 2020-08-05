import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { search } from "../../algorithms/index";
import Header from "../header/header";
import Controls from "../controls/controls";
import "./searchingPage.scss";

const useStyles = makeStyles((theme) => {
  const paperStyle = {
    height: "4rem",
    width: "4rem",
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return {
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    visualizer: {
      width: "660px",
      maxHeight: "65vh",
      overflow: "auto",
    },
    backgroundColor0: {
      ...paperStyle,
    },
    backgroundColor1: {
      ...paperStyle,
      backgroundColor: "orange",
    },
    backgroundColor2: {
      ...paperStyle,
      backgroundColor: "red",
    },
  };
});

function SortingPage() {
  const data = useContext(DataContext);
  const classes = useStyles();

  const _getBackgroundColor = (color) => {
    const { backgroundColor0, backgroundColor1, backgroundColor2 } = classes;
    if (color === 0) return backgroundColor0;
    else if (color === 1) return backgroundColor1;
    else return backgroundColor2;
  };

  return (
    <Container id="pageContainer" className={classes.root}>
      <Header />
      <Grid container justify="center" className={classes.visualizer}>
        {data.map((item) => {
          const backgroundColor = _getBackgroundColor(item.color);
          return (
            <Grid key={item._id} item>
              <Paper elevation={item.elevation} className={backgroundColor}>
                <h3 className={classes.data}>{item.y}</h3>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Controls algorithms={search} />
    </Container>
  );
}

export default SortingPage;
