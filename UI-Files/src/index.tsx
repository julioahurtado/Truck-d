import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./modules/LandingPage/pages/LandingPage";
import * as serviceWorker from "./StartFiles/serviceWorker";
import { Provider } from "react-redux";
import { store } from "../src/Redux/StoreFiles/store";

ReactDOM.render(
  <Provider store={store}>
    <LandingPage description="Landing Page" />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA∂
serviceWorker.unregister();
