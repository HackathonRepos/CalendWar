import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Unauthenticated/Homepage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default App;
