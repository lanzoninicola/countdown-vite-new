import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import CountdownWidgetProvider from "./countdown-widget-provider/countdown-widget-provider";
import CountdownWidgetThemeProvider from "./countdown-widget-theme-provider/countdown-widget-theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CountdownWidgetProvider>
        <CountdownWidgetThemeProvider>
          <App />
        </CountdownWidgetThemeProvider>
      </CountdownWidgetProvider>
    </ChakraProvider>
  </React.StrictMode>
);
