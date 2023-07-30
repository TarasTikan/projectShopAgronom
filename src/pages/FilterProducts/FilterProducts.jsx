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
import treelistRight from '../../assets/images/treelestright.png';
import { Outlet } from 'react-router-dom';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { useState } from 'react';
import { FilterPlantsProtect } from 'components/Filter/FilterPlantsProtect/FilterPlantsProtect';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
import { FilterFeedGroup } from 'components/Filter/FilterFeedGroup/FilterFeedGroup';
import { FilterFertilizers } from 'components/Filter/FilterFertilizers/FilterFertilizers';
export const FilterProducts = () => {
  const [page] = useState(localStorage.getItem('page'));

  const confirmPage = page => {
    if (page === 'plantsProtect') {
      return <FilterPlantsProtect />;
    } else if (page === 'feedGroup') {
      return <FilterFeedGroup />;
    } else {
      return <FilterFertilizers />;
    }
  };
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
            <img src={treelistRight} alt="treelist" />
          </WrapTitle>
          <WrapNumberProducts>
            <TitleNumberProducts>Показано 621 товарів</TitleNumberProducts>
            <SortButton type="button">Сортувати за</SortButton>
          </WrapNumberProducts>
          <WrapFilterALL>
            {confirmPage(page)}
            <Outlet />
          </WrapFilterALL>
        </Container>
      </FilterSection>
      <InfoPlantsProtect />
      <Footer />
    </>
  );
};
