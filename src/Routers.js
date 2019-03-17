import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./containers/main/Main";
import Redirect from "./containers/redirect/Redirect";
import history from "./routerHistory";


export default class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />} />
          <Route exact path="/redirect" render={props => <Redirect {...props} />} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}


