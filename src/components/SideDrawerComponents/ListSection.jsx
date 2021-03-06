import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

function ListSection({ listText, ListIcon, linkText, toggleDrawer }) {
  const handleClick = () => {
    if (toggleDrawer) {
      toggleDrawer();
    }
  };
  return (
    <Link
      href={linkText.length > 0 ? linkText : null}
      color={"secondary"}
      underline="none"
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ListIcon color="secondary" />
        </ListItemIcon>
        <ListItemText href="/signin">{listText}</ListItemText>
      </ListItem>
      <Divider />
    </Link>
  );
}

export default ListSection;
