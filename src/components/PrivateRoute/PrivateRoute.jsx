import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIsAuthenticated } from "../../shared/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAuthenticated = useSelector(checkIsAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/auth" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
