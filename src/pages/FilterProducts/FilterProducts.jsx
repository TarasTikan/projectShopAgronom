import {
  Container,
  FilterSection,
  SortButton,
  TitleCatalog,
  TitleNumberProducts,
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
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from 'redux/products/selectors';
import { UrlList } from 'components/UrlList/UrlList';

export const FilterProducts = () => {
  const [page] = useState(localStorage.getItem('page'));
  const products = useSelector(selectFilteredProducts);
  const changeTitle = page => {
    if (page === 'plantsProtect') {
      return 'Засоби захисту рослин';
    } else if (page === 'feedGroup') {
      return 'Кормова група';
    } else {
      return 'Добрива';
    }
  };
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
          <UrlList changeTitle={changeTitle} />
          <WrapTitle>
            <img src={treelist} alt="treelist" />
            <TitleCatalog>{changeTitle(page)}</TitleCatalog>
            <img src={treelistRight} alt="treelist" />
          </WrapTitle>
          <WrapNumberProducts>
            <TitleNumberProducts>
              Показано {products.length} товарів
            </TitleNumberProducts>
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
