import { Route, Routes } from "react-router-dom";
import { AppBar } from './AppBar/AppBar';
import { Home } from "pages/Home/Home";
import { PlantsProtect } from "pages/PlantsProtect/PlantsProtect";
import { Registration } from "pages/Register/Registration";
import { Login } from "pages/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchCurrentUser());}, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="catalog/plantsProtect" element={<PlantsProtect />} />
        <Route path="signUp" element={<Registration />} />
        <Route path="signIn" element={<Login />} />
      </Route>
    </Routes>
  );
};
