import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import EventModal from "./EventModal";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";

function Event({ year, description, links }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div style={{ width: "100%", display: "flex" }}>
        <IconButton onClick={() => setModalOpen(!modalOpen)}>
          <LaunchIcon />
        </IconButton>
        <h5 style={{ marginRight: "20px" }}>{year}</h5>
        <p>{description}</p>
      </div>
      <Divider />
      <EventModal
        op={modalOpen}
        links={links}
        close={setModalOpen}
        c={modalOpen}
      />
    </div>
  );
}

export default Event;
