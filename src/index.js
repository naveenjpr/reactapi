import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Product from "./pages/product";
import Carts from "./pages/carts";
import Users from "./pages/users";
import Posts from "./pages/posts";
import Comments from "./pages/comments";
import Quotes from "./pages/quotes";
import Recipes from "./pages/recipes";
import Todos from "./pages/todos";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/productDetails";

let routh = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "Users",
    element: <Users />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
  {
    path: "Comments",
    element: <Comments />,
  },
  {
    path: "Quotes",
    element: <Quotes />,
  },
  {
    path: "Recipes",
    element: <Recipes />,
  },
  {
    path: "Todos",
    element: <Todos />,
  },
  {
    path: "Carts",
    element: <Carts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routh} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
