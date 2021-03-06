import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Unauthenticated/Homepage";
import AuthenticatedCalendar from "./screens/Authenticated/AuthenticatedCalender";
import Dashboard from "./screens/Authenticated/Dashboard";
import SignIn from "./screens/Authenticated/SignIn";
import SignUp from "./screens/Authenticated/SignUp";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route
        path="/authenticated/calendar"
        component={AuthenticatedCalendar}
        exact
      />
      <Route path="/authenticated/dashboard" component={Dashboard} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  );
}

export default App;
