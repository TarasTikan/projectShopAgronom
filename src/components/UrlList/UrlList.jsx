import { useState } from 'react';
import { List, ListItemUrl, TextFilter, UrlDecor } from './UrlList.styled';
import { useParams } from 'react-router-dom';
import { allRouterName } from 'fakeAPI';

export const UrlList = ({ productOne }) => {
  const [page] = useState(localStorage.getItem('page'));
  const { routesName } = useParams();
  const changeTitle = page => {
    if (page === 'plantsProtect') {
      return 'Засоби захисту рослин';
    } else if (page === 'feedGroup') {
      return 'Кормова група';
    } else if (page === 'fertilizers') {
      return 'Добрива';
    } else {
      return 'Корзина';
    }
  };
  const routerTitle = () => {
    if (!routesName) return null;
     const  findRouterName = allRouterName.find(
        item => item.routesName === routesName)
    return (
      <ListItemUrl>
        <UrlDecor />
        <TextFilter>{findRouterName.name}</TextFilter>
      </ListItemUrl>
    );
  };
  return (
    <List>
      <ListItemUrl>
        <TextFilter>Головна</TextFilter>
      </ListItemUrl>
      <ListItemUrl>
        <UrlDecor />
        <TextFilter>Каталог</TextFilter>
      </ListItemUrl>
      <ListItemUrl>
        <UrlDecor />
        <TextFilter>{changeTitle(page)}</TextFilter>
      </ListItemUrl>
      {routerTitle()}
      {productOne && (
        <ListItemUrl>
          <UrlDecor />
          <TextFilter>{productOne.name}</TextFilter>
        </ListItemUrl>
      )}
    </List>
  );
};
