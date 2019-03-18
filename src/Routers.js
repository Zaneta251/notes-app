import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./containers/main/Main";
import Redirect from "./containers/redirect/Redirect";
import history from "./routerHistory";


export default class Routers extends React.Component {
  render() {
    return (
      <HashRouter history={history}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <Main {...props} />} />
          <Route exact path={process.env.PUBLIC_URL + '/redirect'} render={props => <Redirect {...props} />} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </HashRouter>
    );
  }
}


