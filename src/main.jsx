import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./reforzamientos/ContextReducer/Main";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Main/>
    </React.StrictMode>
  </BrowserRouter>
);
