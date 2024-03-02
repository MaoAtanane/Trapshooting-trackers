import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import RoutesEnum from "@/router/RoutesEnum.tsx";

const routes = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <Home />,
  },
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
  },
]);
export default function Router() {
  return <RouterProvider router={routes} />;
}
