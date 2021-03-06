import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
        <Fab
          className={classes.button}
          style={{ color: "rgba(245,0,87,1)" }}
          variant="extended"
          href="/signin"
        >
          Lets Prevent This
          <ArrowForwardIosIcon style={{ color: "rgba(245,0,87,1)" }} />
        </Fab>
      </div>
      <div></div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  line: { borderTop: "2px solid white", width: "100%" },
  hook: {
    boxShadow: "0px 0 10px rgba(0, 0, 0, 1)",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "white",
    background:
      "linear-gradient(90deg, rgba(245,0,87,1) 68%, rgba(255,255,255,1) 100%)",
  },
  quote: { width: "97vw", paddingTop: "30px" },
  author: {
    fontWeight: "bold",
    paddingTop: "20px",
    paddingBottom: "30px",
    display: "flex",
    width: "97vw",
  },
  button: { position: "absolute", right: "100px", bottom: "70px" },
}));

export default Homepage;
