import { useDispatch, useSelector } from "react-redux";
import { ContainerImg, ContainerInfoPrice, ListBasketProducts, NumberProduct, PriceAllProduct, PriceProduct, PriceSpan, ProductItem, TitleProduct, WrapIconExit, WrapInfoPrice, WrapTitleProduct } from "./ProductsBasketList.styled";
import { selectItemsBasket } from "redux/basket/selectors";
import { useEffect, useState } from "react";
import { ExitIcon } from "assets/icon/exitIcon";
import { fetchBasketProducts, removeProductsBasket } from "redux/basket/operations";

export const ProductsBasketList = () => {
  const [totalPrice, setTotalPrice] = useState(0)
    const productsBasket = useSelector(selectItemsBasket);
    const dispatch = useDispatch()
    useEffect(() => {
      setTotalPrice(
        productsBasket.reduce((total, { price }) => {
          return total + Number(price);
        }, 0)
      );
    }, [productsBasket]);
useEffect(() => {
  dispatch(fetchBasketProducts());
}, [dispatch]);
    const removeProduct = e => {
      const productId = e.currentTarget.id
      dispatch(removeProductsBasket(productId));
    }
    return (
      <>
        <ListBasketProducts>
          {productsBasket.map(({ name, producer, price, number, _id }) => (
            <ProductItem key={_id}>
              <ContainerImg></ContainerImg>
              <WrapTitleProduct>
                <TitleProduct>
                  {name}, {producer}
                </TitleProduct>
                <WrapInfoPrice>
                  <PriceProduct>
                    {Number(price).toLocaleString('en-US')} грн
                  </PriceProduct>
                  <NumberProduct>x{number}</NumberProduct>
                </WrapInfoPrice>
              </WrapTitleProduct>
              <WrapIconExit id={_id} onClick={removeProduct}>
                <ExitIcon />
              </WrapIconExit>
            </ProductItem>
          ))}
        </ListBasketProducts>
        <ContainerInfoPrice>
          <PriceAllProduct>
            Разом: <PriceSpan>{productsBasket.length} товари</PriceSpan>
          </PriceAllProduct>
          <PriceAllProduct>
            На суму:
            <PriceSpan> {totalPrice.toLocaleString('en-US')}</PriceSpan>
          </PriceAllProduct>
        </ContainerInfoPrice>
      </>
    );
}