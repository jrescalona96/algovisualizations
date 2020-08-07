import React, { useContext } from "react";
import { Container, Button, Grid } from "@material-ui/core";
import AlgorithmsContext from "../../context/AlgorithmsContext";

function AlgorithmsMenu({ algorithms }) {
  const { selectedAlgorithm, handleSetSelectedAlgorithm } = useContext(
    AlgorithmsContext
  );

  return (
    <Container>
      <Grid container justify="space-evenly" alignContent="center">
        {algorithms.map((item) => {
          const { _id, name } = item;
          const variant =
            _id === selectedAlgorithm._id ? "contained" : "outlined";
          return (
            <Grid item xs={12} sm={2} key={_id}>
              <Button
                fullWidth
                variant={variant}
                color="primary"
                onClick={() => handleSetSelectedAlgorithm(item)}
              >
                {name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default AlgorithmsMenu;
