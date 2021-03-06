import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      <div className={classes.hook}>
        <span className={classes.line} />
        <Typography variant="h4" className={classes.quote}>
          Those who fail to learn from history are condemned to repeat it.
        </Typography>
        <Typography variant="h5" className={classes.author}>
          -Winston Churchill
        </Typography>
        <span className={classes.line} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  line: { borderTop: "2px solid black", width: "100%" },
  hook: {
    height: "91vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  quote: { width: "97vw" },
  author: {
    fontWeight: "bold",
    paddingTop: "20px",
    paddingBottom: "30px",
    display: "flex",
    width: "97vw",
  },
}));

export default Homepage;
