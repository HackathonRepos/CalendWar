import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

function ListSection({ listText, ListIcon, linkText, toggleDrawer }) {
  const history = useHistory();
  const handleClick = () => {
    if (linkText === "") {
      toggleDrawer();
    } else if (linkText.includes("github")) {
      toggleDrawer();
      window.open("https://github.com/Mihir-Achyuta/CalendWar");
    } else {
      toggleDrawer();
      setTimeout(() => {
        history.push(linkText);
      }, 100);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon>
          <ListIcon color="secondary" />
        </ListItemIcon>
        <ListItemText href="/signin">{listText}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({ item: { padding: "25px 0px" } }));

export default ListSection;
