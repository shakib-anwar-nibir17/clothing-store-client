import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Homepage from "../components/HomePage/Homepage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProductDetail from "../components/Shared/ProductDetail";
import PrivateRoute from "./PrivateRoutes.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
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
    ],
  },
]);

export default Routes;
