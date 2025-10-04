import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import LoginPage from "../pages/auth/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import { useSelector } from "react-redux";
import ResetPassword from "../pages/auth/reset-password/ResetPassword";

function MainRoutes() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route
        element={isAuth ? <HomePage /> : <Navigate to={routes.loginRoute} />}
        path={routes.homeRoute}
      />
      <Route
        element={!isAuth ? <LoginPage /> : <Navigate to={routes.homeRoute} />}
        path={routes.loginRoute}
      />

      <Route
        element={
          !isAuth ? <ResetPassword /> : <Navigate to={routes.loginRoute} />
        }
        path={routes.forgetPasswordGlobalRoute}
      />
    </Routes>
  );
}

export default MainRoutes;
