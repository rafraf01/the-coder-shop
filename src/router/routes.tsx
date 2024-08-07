import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../components/pages/home/Home";
import { lazy, Suspense } from "react";
import NotFound from "../components/pages/not-found/NotFound";
import Login from "../components/pages/login/Login";

const ProductsPage = lazy(() => import('../components/pages/product/Product'));
const ProductDetailsPage = lazy(() => import('../components/pages/product-details/ProductDetails'));

const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={
          <Suspense>
            <ProductsPage />
          </Suspense>}>
        </Route>
        <Route path="products/details/:productid" element={
          <Suspense>
            <ProductDetailsPage />
          </Suspense>
        } />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Route>
    ),
  );

export default routes;