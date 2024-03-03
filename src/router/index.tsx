import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login";
import RoutesEnum from "@/router/RoutesEnum.tsx";
import AuthHOC from "@/containers/AuthHOC";
import Home from "@/pages/Home";

const routes = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <AuthHOC />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
  },
]);
export default function Router() {
  return <RouterProvider router={routes} />;
}
