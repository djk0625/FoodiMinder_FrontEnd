import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "./views/Login.jsx";
import Join from "./views/Join.jsx"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Join} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
