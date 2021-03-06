import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

function ListSection({ listText, ListIcon, linkText, toggleDrawer }) {
  const handleClick = () => {
    if (toggleDrawer) {
      toggleDrawer();
    }
  };
  const classes = useStyles();
  return (
    <Link
      href={linkText.length > 0 ? linkText : null}
      color={"secondary"}
      underline="none"
    >
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon>
          <ListIcon color="secondary" />
        </ListItemIcon>
        <ListItemText href="/signin">{listText}</ListItemText>
      </ListItem>
      <Divider />
    </Link>
  );
}

const useStyles = makeStyles((theme) => ({ item: { padding: "25px 0px" } }));

export default ListSection;
