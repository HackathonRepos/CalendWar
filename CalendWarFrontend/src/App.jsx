import React from "react";

import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Unauthenticated/Homepage";
import AuthenticatedCalendar from "./screens/Authenticated/AuthenticatedCalender";
import SignIn from "./screens/Authenticated/SignIn";
import SignUp from "./screens/Authenticated/Signup";

import { auth } from "./firebase";

axios
  .get("/api")
  .then(({ data }) => console.log("Server Online", data["serverOnline"]))
  .catch((err) => console.log(err));

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route
        path={"/authenticated/calendar"}
        render={() =>
          auth.currentUser ? (
            <AuthenticatedCalendar />
          ) : (
            <Redirect to="/signin" />
          )
        }
        exact
      />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  );
}

export default App;
