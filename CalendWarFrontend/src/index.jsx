import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
