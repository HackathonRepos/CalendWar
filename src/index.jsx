import dotenv from "dotenv";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import firebase from "firebase";
dotenv.config();

function InitFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY_MESSAGE_ID,
      appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID,
    });
  } else {
    firebase.app();
  }
  console.log("Initialized Firebase");
  return <App />;
}

ReactDOM.render(
  <BrowserRouter>
    <InitFirebase />
  </BrowserRouter>,
  document.getElementById("root")
);
