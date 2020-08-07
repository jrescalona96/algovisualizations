import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Container, OutlinedInput } from "@material-ui/core";
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
  };
});

function SortingPage() {
  const { data, searchItem, handleChangeSearchItem } = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container id="pageContainer" className={classes.root}>
      <Header />
      <OutlinedInput
        variant="outlined"
        size="small"
        margin="dense"
        defaultValue={searchItem}
        onChange={handleChangeSearchItem}
      />
      <GridDisplay data={data} />
      <Controls algorithms={search} />
    </Container>
  );
}

export default SortingPage;
