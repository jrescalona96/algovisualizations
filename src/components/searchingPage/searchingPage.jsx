import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Container, OutlinedInput, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { search } from "../../algorithms/index";
import Header from "../header/header";
import Controls from "../controls/controls";
import GridDisplay from "../common/gridDisplay/gridDisplay";
import "./searchingPage.scss";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      margin: "auto",
      width: "5rem",
    },
  };
});

function SortingPage() {
  const { data, searchItem, handleChangeSearchItem } = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container id="pageContainer" className={classes.root}>
      <Header />
      <GridDisplay data={data} />
      <Paper className={classes.input}>
        <OutlinedInput
          inputProps={{
            style: {
              fontSize: "1.2rem",
              textAlign: "center",
              padding: "0.5rem",
              fontWeight: "bold",
            },
          }}
          size="small"
          defaultValue={searchItem}
          onChange={handleChangeSearchItem}
        />
      </Paper>
      <Typography variant="button">Search Item</Typography>
      <Controls algorithms={search} />
    </Container>
  );
}

export default SortingPage;
