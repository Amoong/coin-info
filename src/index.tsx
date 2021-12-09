import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import ReactDOM from "react-dom";

import globalCss from "styles/globalCss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={globalCss} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
