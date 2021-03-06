import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "normalize.css";
import "./common/styles/base.css";
import App from "./App 渲染属性";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
