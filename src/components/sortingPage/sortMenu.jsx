import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import CustomMenu from "../common/customMenu";

function SortMenu({
  selectedAlgorithm,
  algorithms,
  onSetSelectedAlgorithm,
  onStart,
}) {
  return (
    <React.Fragment>
      <Typography variant="h3">{selectedAlgorithm.name}</Typography>
      <Grid container justify="flex-end">
        <CustomMenu
          options={algorithms}
          onSelect={(_id) => onSetSelectedAlgorithm(_id)}
          name="Algorithm"
        />
        <Box ml={1}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onStart}
            startIcon={<PlayCircleOutlineIcon />}
          >
            Start
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default SortMenu;
