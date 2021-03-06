import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Unauthenticated/Homepage";
import AuthenticatedCalendar from "./screens/Authenticated/AuthenticatedCalender";
import Dashboard from "./screens/Authenticated/Dashboard";
import SignIn from "./screens/Authenticated/SignIn";
import SignUp from "./screens/Authenticated/SignUp";

import { auth } from "./firebase";

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
      {/* <Route
        path={"/authenticated/dashboard"}
        render={() =>
          auth.currentUser ? <Dashboard /> : <Redirect to="/signin" />
        }
        exact
      /> */}
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  );
}

export default App;
