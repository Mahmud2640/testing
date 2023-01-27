import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Hooks/ProductsContext";
import { FilterContextProvider } from "./Hooks/FilterContex";
import { CartProvider } from "./Hooks/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
