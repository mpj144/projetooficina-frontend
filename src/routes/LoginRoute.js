import React from "react";

import { Route, Redirect } from "react-router";
import Cookie from "js-cookie";

const RouteLogin = (props) => {
  const isLogged = !!Cookie.get("@token");
  return !isLogged ? <Route {...props} /> : <Redirect to="/" />;
};

export default RouteLogin;
