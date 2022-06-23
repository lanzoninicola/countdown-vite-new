import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import CountdownProvider from "./countdown-provider/countdown-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CountdownProvider>
        <App />
      </CountdownProvider>
    </ChakraProvider>
  </React.StrictMode>
);
