import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import SideDrawer from "./SideDrawer";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="secondary" className={classes.nav}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" color="inherit" className={classes.title}>
            <Typography variant="h6">CalendWar</Typography>
          </Link>
          <Button color="inherit" href="/signin">
            Sign In
          </Button>
          <Button color="inherit" href="/signup">
            Sign Up
          </Button>
          <Button
            variant="outlined"
            href="/unauthenticated/calendar"
            size={"large"}
            className={classes.try}
          >
            Try It Out
          </Button>
        </Toolbar>
      </AppBar>
      <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  nav: {
    height: "10vh",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  try: {
    color: "white",
    border: "2px solid white",
    marginLeft: theme.spacing(3),
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
}));

export default Navbar;
