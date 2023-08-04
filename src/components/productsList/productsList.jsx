import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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
import { selectIsLoading } from 'redux/products/selectors';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const ProductsList = () => {
  const currentItems = useSelector(selectCurrentItems);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isShowModal, setIsShowModal] = useState(false);
  const [page] = useState(localStorage.getItem('page'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleBasket = e => {
    if (isLoggedIn === false) {
      navigate('/signIn');
    }
    const productId = e.currentTarget.name;
    const product = {
      plants: routesName,
      id: productId,
      page,
    };
    setIsShowModal(true);
    dispatch(fetchProductOne(product));
  };
  const toggleModal = e => {
    setIsShowModal(!isShowModal);
  };
  return (
    <WrapPagination>
      <ProductList>
        {isLoading ? (
          <Loader />
        ) : (
          currentItems.map(({ name, number, price, _id }) => (
            <ProductItem key={_id}>
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
          ))
        )}
      </ProductList>
      {isShowModal && <Modal onClose={toggleModal} />}
      <Paginate />
    </WrapPagination>
  );
};
