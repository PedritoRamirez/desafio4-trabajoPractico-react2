import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
