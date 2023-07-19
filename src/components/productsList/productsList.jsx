import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "redux/products/operations";
import { selectProducts } from "redux/products/selectors";
import { IteamStock, ItemInfo, ItemNumber, ItemPrice, ItemTitle, ProductItem, ProductList } from "./productsList.styled";

export const ProductsList = () => {
        const products = useSelector(selectProducts);
        const dispatch = useDispatch();
        const {routesName} = useParams()
        useEffect(() => {
            dispatch(fetchProducts(routesName));
        }, [routesName, dispatch]);

    return (
      <ProductList>
        {products.map(({ name, number, price, _id }) => (
          <ProductItem key={_id}>
            <img width={255} />
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
    );
}