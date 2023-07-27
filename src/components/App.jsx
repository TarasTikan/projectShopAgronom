import { Route, Routes } from "react-router-dom";
import { AppBar } from './AppBar/AppBar';
import { Home } from "pages/Home/Home";
import { PlantsProtect } from "pages/PlantsProtect/PlantsProtect";
import { Registration } from "pages/Register/Registration";
import { Login } from "pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { FilterProducts } from "pages/FilterProducts/FilterProducts";
import { ProductsList } from "./productsList/productsList";
import { ProductInfo } from "../pages/ProductInfo/ProductInfo";
import { PlacingOrder } from "pages/PlacingOrder/PlacingOrder";
import { selectIsRefreshing } from "redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {dispatch(fetchCurrentUser())}, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="catalog/plantsProtect" element={<PlantsProtect />} />
          <Route
            path="signUp"
            element={
              <RestrictedRoute component={Registration} redirectTo="/" />
            }
          />
          <Route
            path="signIn"
            element={<RestrictedRoute component={Login} redirectTo="/" />}
          />
          <Route path="plantsProtect" element={<FilterProducts />}>
            <Route path="filter/:routesName" element={<ProductsList />} />
          </Route>
          <Route
            path="productDetails/:routesName/:productId"
            element={<ProductInfo />}
          />
          <Route
            path="basketProducts"
            element={
              <PrivateRoute component={PlacingOrder} redirectTo="/signIn"/>
            }
          />
        </Route>
      </Routes>
    )
  );
};
