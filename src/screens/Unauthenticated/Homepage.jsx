import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

function Homepage() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          CalendWar
        </Typography>
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
  );
}

const useStyles = makeStyles((theme) => ({
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
}));

export default Homepage;
