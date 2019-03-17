import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import freeze from "redux-freeze";

const crashReporter = () => next => async action => {
  try {
    return await Promise.resolve(next(action));
  } catch (err) {
    // here can go any other automated error handling
    // - such as displaying error messages to user, if they come from BE
    // - or sending to some external logging tool
    console.error(err);
    next({type: "ERROR"});
  }
};

const middlewares = [];
middlewares.push(crashReporter);
middlewares.push(thunk);

// freeze is only for development env
if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
}

let middleware = applyMiddleware(...middlewares);
// add the redux dev tools
if (process.env.NODE_ENV !== "production" && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

export default middleware;
