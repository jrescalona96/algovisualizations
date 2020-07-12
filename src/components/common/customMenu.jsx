import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

function CustomMenu({ options, name, onSelect }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (_id) => {
    onSelect(_id);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        aria-controls={name}
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<SwapHorizIcon />}
      >
        {name}
      </Button>
      <Menu
        id={name}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((item) => {
          return (
            <MenuItem key={item._id} onClick={() => handleSelect(item._id)}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}

export default CustomMenu;
