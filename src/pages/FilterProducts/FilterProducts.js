import { plantsCulture, plantsProducer, plantsProtectCatalog } from "fakeAPI";
import { CatalogText, Container, FormProducer, LabalInput, ListCatalogName, SortButton, TitleCatalog, TitleCulture, TitleFilter, TitleNumberProducts, TitleProducer, UrlList, WrapFilter, WrapFilterALL, WrapNumberProducts, WrapTitle, WrapTitleFilter } from "./FilterProducts.styled";
import treelist from '../../assets/treelist.png';
import { RoteteImg } from "pages/PlantsProtect/PlantsProtect.styled";
import { useEffect, useState } from "react";
export const FilterProducts = () => {
    const [valueInput, setValueInput] = useState([])
    const handleChange = (e) => {
        setValueInput(e.target.value)
        console.log(e.target.name);
    }
    useEffect(()=>{

    },[])
  return (
    <Container>
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
            {plantsProtectCatalog.map(({ id, name }) => (
              <li key={id}>
                <CatalogText>{name}</CatalogText>
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
                    name={`${name}`}
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
                    name={`${name}`}
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
      <ul>
        <li>
          <p>hello</p>
        </li>
      </ul>
      </WrapFilterALL>
    </Container>
  );
};
