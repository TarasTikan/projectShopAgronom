import {
  Container,
  FilterSection,
  SortButton,
  TitleCatalog,
  TitleNumberProducts,
  UrlList,
  WrapFilterALL,
  WrapNumberProducts,
  WrapTitle,
} from './FilterProducts.styled';
import treelist from '../../assets/images/treelist.png';
import { RoteteImg } from 'pages/PlantsProtect/PlantsProtect.styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
export const FilterProducts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const saveRouter = localStorage.getItem('router');
    if (saveRouter) {
      navigate(`filter/${saveRouter}`);
    } else {
      localStorage.setItem('router', 'herbicides');
    }
    localStorage.removeItem('router');
  }, [navigate]);

  return (
    <>
      <FilterSection>
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
            <Filter />
            <Outlet />
          </WrapFilterALL>
        </Container>
      </FilterSection>
      <InfoPlantsProtect />
      <Footer />
    </>
  );
};
