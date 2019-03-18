import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Translate from "./containers/translate/Translate";
import { createStore } from "redux";
import rootReducer from "./redux/reduxReducer";
import reducerConf from "./redux/reduxConf";
import "./main.scss";
import "../node_modules/antd/dist/antd.less";
import "../node_modules/antd/dist/antd.css";

const store = createStore(rootReducer, reducerConf);

ReactDOM.render(
  <Provider store={store}>
    <Translate />
  </Provider>,
  document.getElementById("root")
);
