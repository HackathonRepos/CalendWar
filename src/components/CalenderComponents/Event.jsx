import React from "react";
import Divider from "@material-ui/core/Divider";

function Event({ year, description }) {
  return (
    <div>
      <div style={{ width: "100%", display: "flex" }}>
        <h5 style={{ marginRight: "20px" }}>{year}</h5>
        <p>{description}</p>
      </div>
      <Divider />
      {/* <span style={{ border: "1px solid black" }} /> */}
    </div>
  );
}

export default Event;
