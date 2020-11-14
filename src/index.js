import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";
const theme = createMuiTheme({ palette: {}, esES });

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
  rootElement
);
