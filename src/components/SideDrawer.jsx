import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import GitHubIcon from "@material-ui/icons/GitHub";

function SideDrawer({ isDrawerOpen, toggleDrawer }) {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} open={isDrawerOpen}>
      <Container>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Container>
      <Divider />
      <Container>
        <ListItem button>
          <ListItemText>HOME</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>SIGN IN</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>SIGN UP</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>TRY IT OUT</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>Check this project out on Github!</ListItemText>
        </ListItem>
      </Container>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
}));

export default SideDrawer;
