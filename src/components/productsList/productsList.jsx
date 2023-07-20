import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from 'redux/products/operations';
import {
  IteamStock,
  ItemInfo,
  ItemNumber,
  ItemPrice,
  ItemTitle,
  ProductItem,
  ProductList,
  WrapPagination,
} from './productsList.styled';
import { Paginate } from 'components/Paginate/Paginate';
import { selectCurrentItems } from 'redux/pagination/selectors';

export const ProductsList = () => {
 const currentItems = useSelector(selectCurrentItems);
  const dispatch = useDispatch();
  const { routesName } = useParams();
  useEffect(() => {
    dispatch(fetchProducts(routesName));
  }, [routesName, dispatch]);
  return (
    <WrapPagination>
      <ProductList>
        {currentItems.map(({ name, number, price, _id }) => (
          <ProductItem key={_id}>
            {/* <img width={255} /> */}
            <ItemInfo>
              <div>
                <ItemTitle>{name}</ItemTitle>
                <IteamStock>В наявності</IteamStock>
              </div>
              <div>
                <ItemPrice>{price} грн</ItemPrice>
                <ItemNumber>{number} шт</ItemNumber>
              </div>
            </ItemInfo>
          </ProductItem>
        ))}
      </ProductList>
      <Paginate />
    </WrapPagination>
  );
};
