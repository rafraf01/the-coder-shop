import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/pages/home/Home.tsx";
import Product from "./components/pages/product/Product.tsx";
import NotFound from "./components/pages/not-found/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
