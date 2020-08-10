import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { configStore } from "./store";

const store = configStore();
console.log("store state ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
