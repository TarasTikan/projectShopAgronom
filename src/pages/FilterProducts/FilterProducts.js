import { plantsCulture, plantsProducer, plantsProtectCatalog } from "fakeAPI";
import {  Container, FormProducer, LabalInput, ListCatalogName, SortButton, StyledLink, TitleCatalog, TitleCulture, TitleFilter, TitleNumberProducts, TitleProducer, UrlList, WrapFilter, WrapFilterALL, WrapNumberProducts, WrapTitle, WrapTitleFilter } from "./FilterProducts.styled";
import treelist from '../../assets/treelist.png';
import { RoteteImg } from "pages/PlantsProtect/PlantsProtect.styled";
import {useState } from "react";

import { Outlet} from "react-router-dom";
import { HeadInfo } from "components/HeadInfo/HeadInfo";
import { useDispatch } from "react-redux";
import { filterProducts } from "redux/products/filterSlice";
export const FilterProducts = () => {
    const [valueInput, setValueInput] = useState([])
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setValueInput(e.target.name);
        if (e.target.name.includes('producer')) {
          const filter = {
            filterProducer: e.target.name,
            filterCulture: [],
            filterNumber: null,
          };
          dispatch(filterProducts(filter));
        }
          console.log(e.target.name.includes('producer'));
          console.log(valueInput);
    }
  return (
    <Container>
      <HeadInfo />
      <UrlList>
        <li>
          <p>Головна</p>
        </li>
        <li>
          <p>Каталог</p>
        </li>
        <li>
          <p>Засоби захисту рослин</p>
        </li>
      </UrlList>
      <WrapTitle>
        <img src={treelist} alt="treelist" />
        <TitleCatalog>Засоби захисту рослин</TitleCatalog>
        <RoteteImg src={treelist} alt="treelist" />
      </WrapTitle>
      <WrapNumberProducts>
        <TitleNumberProducts>Показано 621 товарів</TitleNumberProducts>
        <SortButton type="button">Сортувати за</SortButton>
      </WrapNumberProducts>
      <WrapFilterALL>
        <WrapTitleFilter>
          <ListCatalogName>
            {plantsProtectCatalog.map(({ id, name, routesName }) => (
              <li key={id}>
                <StyledLink to={`filter/${routesName}`}>{name}</StyledLink>
              </li>
            ))}
          </ListCatalogName>
          <WrapFilter>
            <TitleFilter>Фільтр</TitleFilter>
            <FormProducer>
              <TitleProducer>Виробник</TitleProducer>
              {plantsProducer.map(({ id, name }) => (
                <LabalInput key={id}>
                  <input
                    type="checkbox"
                    name={`producer ${name}`}
                    value={valueInput}
                    onChange={handleChange}
                  />
                  {name}
                </LabalInput>
              ))}
            </FormProducer>
            <FormProducer>
              <TitleCulture>Культура</TitleCulture>
              {plantsCulture.map(({ id, name }) => (
                <LabalInput key={id}>
                  <input
                    type="checkbox"
                    name={`culture ${name}`}
                    value={valueInput}
                    onChange={handleChange}
                  />
                  {name}
                </LabalInput>
              ))}
            </FormProducer>
            <FormProducer>
              <TitleProducer>Кількість</TitleProducer>
              <LabalInput>
                <input type="checkbox" name="1" value="1" />1
              </LabalInput>
              <LabalInput>
                <input type="checkbox" name="2" value="2" />2
              </LabalInput>
              <LabalInput>
                <input type="checkbox" name="3" value="3" />3
              </LabalInput>
              <LabalInput>
                <input type="checkbox" name="4" value="4" />4
              </LabalInput>
              <LabalInput>
                <input type="checkbox" name="5" value="5" />5
              </LabalInput>
              <LabalInput>
                <input type="checkbox" name="6" value="6" />6
              </LabalInput>
            </FormProducer>
          </WrapFilter>
        </WrapTitleFilter>
        <Outlet />
      </WrapFilterALL>
    </Container>
  );
};