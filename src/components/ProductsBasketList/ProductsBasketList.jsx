import { useSelector } from "react-redux";
import { ContainerImg, ContainerInfoPrice, ListBasketProducts, NumberProduct, PriceAllProduct, PriceProduct, PriceSpan, ProductItem, TitleProduct, WrapInfoPrice, WrapTitleProduct } from "./ProductsBasketList.styled";
import { selectItemsBasket } from "redux/basket/selectors";
import { useEffect, useState } from "react";

export const ProductsBasketList = () => {
  const [totalPrice, setTotalPrice] = useState(0)
    const productsBasket = useSelector(selectItemsBasket);
    useEffect(()=>{
      setTotalPrice(
        productsBasket.reduce((total, { price }) => {
          return total + Number(price);
        }, 0)
      );
    })
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