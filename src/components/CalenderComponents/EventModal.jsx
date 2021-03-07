import React from "react";
import Modal from "@material-ui/core/Modal";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function EventModal({ links, close, c }) {
  const classes = useStyles();
  const handleClose = () => {
    close(!c);
  };
  const allLinks = links.map((item, i) => (
    <Link target="_blank" href={item.link} key={i}>
      {item.title}
    </Link>
  ));
  return (
    <Modal open={c} className={classes.paper} onClose={handleClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {allLinks}
      </div>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 300,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default EventModal;
