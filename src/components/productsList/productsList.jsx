import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductOne, fetchProducts } from 'redux/products/operations';
import {
  BtnBasket,
  IteamStock,
  ItemInfo,
  ItemNumber,
  ItemPrice,
  ItemTitleLink,
  ProductItem,
  ProductList,
  WrapInfoPrice,
  WrapPagination,
} from './productsList.styled';
import { Paginate } from 'components/Paginate/Paginate';
import { selectCurrentItems } from 'redux/pagination/selectors';
import { ShopBascetIcon } from 'assets/icon/shopBascetIcon';
import {
  selectIsLoading,
  selectProductOne,
} from 'redux/products/selectors';
import { addProductBacket } from 'redux/basket/operations';
import { Loader } from 'components/Loader/Loader';

export const ProductsList = () => {
  const currentItems = useSelector(selectCurrentItems);
  const productOne = useSelector(selectProductOne);
  const isLoading = useSelector(selectIsLoading);
  const [page] = useState(localStorage.getItem('page'));
  const dispatch = useDispatch();
  const { routesName } = useParams();
  const fetchProductsData = useCallback(() => {
    const requestData = {
      page: page,
      router: routesName,
    };
    dispatch(fetchProducts(requestData));
  }, [page, routesName, dispatch]);
  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  const addBasketProduct = () => {
    const { _id, updatedAt, createdAt, ...productInBasket } = {
      ...productOne,
      number: String(1),
    };
    dispatch(addProductBacket(productInBasket));
  };
  const handleBasket = e => {
    const productId = e.currentTarget.name;
    const product = {
      plants: routesName,
      id: productId,
    };
    dispatch(fetchProductOne(product));
    addBasketProduct();
  };
  return (
    <WrapPagination>
      <ProductList>{isLoading ? <Loader /> : currentItems.map(({ name, number, price, _id }) => (
        <ProductItem
          key={_id}
        >
          {/* <img width={255} /> */}
          <ItemInfo>
            <div>
              <ItemTitleLink to={`/productDetails/${routesName}/${_id}`}>
                {name}
              </ItemTitleLink>
              <IteamStock>В наявності</IteamStock>
            </div>
            <WrapInfoPrice>
              <div>
                <ItemPrice>{price} грн</ItemPrice>
                <ItemNumber>{number} шт</ItemNumber>
              </div>
              <BtnBasket type="button" name={_id} onClick={handleBasket}>
                <ShopBascetIcon />
              </BtnBasket>
            </WrapInfoPrice>
          </ItemInfo>
        </ProductItem>
      ))}</ProductList>
      <Paginate />
    </WrapPagination>
  );
};
