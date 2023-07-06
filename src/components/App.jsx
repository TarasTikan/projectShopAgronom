import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { PlantsProtect } from "pages/PlantsProtect/PlantsProtect";

export const App = () => {
  return (
 <Routes>
 <Route path='/' element={<SharedLayout/>}>
  <Route index element={<Home/>}/>
  <Route path="catalog/plantsProtect" element={<PlantsProtect/>}/>
 </Route>
 </Routes>
  );
};
