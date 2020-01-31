import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./Home";
import LoginPage from "./Login";

import * as routes from "../constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.LOGIN} component={() => <LoginPage />} />
      </>
    </Router>
  );
};

export default App;
