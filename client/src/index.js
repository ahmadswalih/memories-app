import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/index";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";
import {
  Theme,
  unstable_createMuiStrictModeTheme,
  useTheme,
} from "@mui/material/styles";
const theme = unstable_createMuiStrictModeTheme();
const store = configureStore({ reducer }, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
