import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./stores/context/CartContext";
import Footer from './stores/components/Footer';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
      {/* <Footer/> */}
      {/* <h1>kjkjhu</h1> */}
    </CartProvider>
  </BrowserRouter>
);

reportWebVitals();
