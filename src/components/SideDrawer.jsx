import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import ListSection from "../components/SideDrawerComponents/ListSection";

function SideDrawer({ isDrawerOpen, toggleDrawer }) {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      open={isDrawerOpen}
      onClose={toggleDrawer}
    >
      <Container className={classes.container}>
        <Divider />
        <ListSection
          listText="CLOSE"
          ListIcon={ChevronLeftIcon}
          linkText=""
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"HOME"}
          ListIcon={HomeIcon}
          linkText={"/"}
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"SIGN IN"}
          ListIcon={LockIcon}
          linkText="/signin"
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"SIGN UP"}
          ListIcon={CreateIcon}
          linkText="/signup"
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"TRY IT OUT"}
          ListIcon={PlayArrowIcon}
          linkText="/unauthenticated/calendar"
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"Check this project out on Github!"}
          ListIcon={GitHubIcon}
          linkText="https://github.com/Mihir-Achyuta/CalendWar"
          toggleDrawer={toggleDrawer}
        />
      </Container>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
}));

export default SideDrawer;
