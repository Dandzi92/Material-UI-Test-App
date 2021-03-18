import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Auth from "../../pages/Auth/Auth";
import Main from "../../pages/Main";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../features/auth";
import PrivateRoute from "../PrivateRoute";
import { paths } from "../../shared/paths";

const MainRouter = () => {
  const authData = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();

  if (authData) {
    dispatch(logUserIn(authData));
  }

  return (
    <Router>
      <Route exact path={paths.AUTH} component={Auth} />
      <PrivateRoute path={paths.MAIN} component={Main} />
    </Router>
  );
};

export default MainRouter;
