import React, { Component } from "react";
import { HashRouter, Route, Switch, Router, Redirect } from "react-router-dom";
import { asyncLocalStorage } from "./utils/asynclocalstorage";
import Cookie from "js-cookie";
import Loadable from "react-loadable";
import "./App.scss";
import { decode } from "jsonwebtoken";
import { PrivateRoute } from "./utils/PrivateRoutes";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = Loadable({
  loader: () => import("./containers/DefaultLayout"),
  loading,
});

// Pages

const Page404 = Loadable({
  loader: () => import("./views/Pages/Page404"),
  loading,
});

const Page500 = Loadable({
  loader: () => import("./views/Pages/Page500"),
  loading,
});

class App extends Component {
  isAuthenticate = () => {
    const auth = Cookie.get("auth");
    const token = asyncLocalStorage.getItem("auth_token");
    try {
      if (token !== null && auth !== null) {
        return true;
      } else if (token === null && auth !== null) {
        return false;
      } else if (token === null && auth === null) {
        return false;
      }
    } catch (error) {
      console.log(`Error => ${error}`);
      return false;
    }
  };
  VerifyToken = () => {
    const auth = Cookie.get("auth");
    const token = asyncLocalStorage.getItem("auth_token");

    const aux = decode(auth);
    const exp = aux.exp;
    const now = new Date().getTime() / 100;

    try {
      if (now < exp && auth != null && token !== null) {
        return true;
      } else if (exp === null && now !== null) {
        return false;
      } else {
        return false;
      }
    } catch (error) {
      console.log(`Error => ${error}`);
      return false;
    }
  };
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <PrivateRoute
            path="/"
            name="Home"
            isAuthenticate={this.isAuthenticate}
            verifyToken={this.VerifyToken}
            component={DefaultLayout}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
