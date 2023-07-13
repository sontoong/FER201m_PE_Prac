import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
          Staff Management
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/dashboard" color="inherit">
          Dashboard
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
