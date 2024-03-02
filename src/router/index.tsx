import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default function Router() {
  return <RouterProvider router={routes} />;
}
