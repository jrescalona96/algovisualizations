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
    height: "2.5rem",
    width: "2.5rem",
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
      display: "flex",
      alignItems: "center",
      width: "660px",
      maxHeight: "65vh",
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

function SortingPage() {
  const data = useContext(DataContext);
  const classes = useStyles();

  const _getPaperClass = (color) => {
    const { paper0, paper1, paper2 } = classes;
    if (color === 0) return paper0;
    else if (color === 1) return paper1;
    else return paper2;
  };

  return (
    <Container id="pageContainer" className={classes.root}>
      <Header />
      <Container className={classes.visualizer}>
        <Grid container justify="center">
          {data.map((item) => {
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
          })}
        </Grid>
      </Container>
      <Controls algorithms={search} />
    </Container>
  );
}

export default SortingPage;
