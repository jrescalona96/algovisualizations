import React, { useContext } from "react";
import { Container, Button, Grid } from "@material-ui/core";
import AlgorithmsContext from "../../context/AlgorithmsContext";

function AlgorithmsMenu({ algorithms }) {
  const { selectedAlgorithm, handleSetSelectedAlgorithm } = useContext(
    AlgorithmsContext
  );

  const isActive = (_id) => _id === selectedAlgorithm._id;

  return (
    <Container>
      <Grid container justify="space-evenly" alignContent="center">
        {algorithms.map((item) => {
          const { _id, name } = item;
          const variant = isActive(_id) ? "contained" : "outlined";
          return (
            <Grid item xs={12} sm={2} key={_id}>
              <Button
                fullWidth
                variant={variant}
                size="small"
                color={isActive(_id) ? "primary" : "default"}
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
