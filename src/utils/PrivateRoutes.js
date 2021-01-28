import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticate,
  verifyToken,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          if (verifyToken()) {
            return <Component {...props} />;
          } else if (isAuthenticate()) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/404" />;
          }
        } catch (err) {
          console.log(`Error => ${err}`);
          return <Redirect to="/404" />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  verifyToken: PropTypes.func.isRequired,
  isAuthenticate: PropTypes.func.isRequired,
};
