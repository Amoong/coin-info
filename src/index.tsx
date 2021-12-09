import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";

import { lightTheme, darkTheme } from "styles/themes";
import globalCss from "styles/globalCss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Global styles={globalCss} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
