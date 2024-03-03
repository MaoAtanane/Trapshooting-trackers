import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "@/globalContext";
import Loader from "@/commons/Loader";
import RoutesEnum from "@/router/RoutesEnum.tsx";

export default function AuthHOC() {
  const { user, loading } = useGlobalContext();
  console.log("test user", user);
  console.log("test loading", loading);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to={RoutesEnum.LOGIN} replace={false} />;
  }
  return <Outlet />;
}
