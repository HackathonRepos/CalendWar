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
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(false);
  };
  const logOut = () => {
    firebase.auth().signOut();
    history.push("/");
    window.location.reload();
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
          {firebase.auth().currentUser ? (
            <>
              <Button color="inherit">
                Hey {firebase.auth().currentUser.displayName}
              </Button>
              <Button color="inherit" onClick={logOut}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" href="/signin">
                Sign In
              </Button>
              <Button color="inherit" href="/signup">
                Sign Up
              </Button>
            </>
          )}
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
