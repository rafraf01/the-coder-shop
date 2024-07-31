import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout.tsx";
import Home from "./components/pages/home/Home.tsx";
import Product from "./components/pages/product/Product.tsx";
import NotFound from "./components/pages/not-found/NotFound.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const ProductsPage = lazy(() => import('./components/pages/product/Product'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Suspense>
        <ProductsPage />
      </Suspense>}>
        <Route path=":productid" element={<Product />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
