import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./_variables.scss";

import RootContainer from "./containers/RootContainer";

ReactDOM.render(
  <div>
    <Router>
      <RootContainer />
    </Router>
  </div>,
  document.getElementById("app")
);

module.hot.accept();
