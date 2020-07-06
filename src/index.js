import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./store/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./App.css";
import "./responsive.css";

const store = createStore(Reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
