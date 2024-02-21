import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddPage from "../components/AddPage/AddPage.jsx";
import CartPage from "../components/CartPage/CartPage.jsx";
import ErrorPage from "../components/Error/ErrorPage.jsx";
import Homepage from "../components/HomePage/Homepage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProductDetail from "../components/Shared/ProductDetail";
import UpdatePage from "../components/UpdatePage/UpdatePage.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/add_products",
        element: (
          <PrivateRoute>
            <AddPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ), //shared folder
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default Routes;
