import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
